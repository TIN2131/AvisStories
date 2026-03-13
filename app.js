/* ═══════════════════════════════════════════════════════════════
   AVI'S BEDTIME STORIES — App Logic
   Clean state machine, event delegation, localStorage persistence
   ═══════════════════════════════════════════════════════════════ */

;(function () {
  'use strict';

  // ── State ──────────────────────────────────────────────────

  const state = {
    currentStory:   null,
    completed:      JSON.parse(localStorage.getItem('avi_completed') || '[]'),
    favorites:      JSON.parse(localStorage.getItem('avi_favorites') || '[]'),
    filter:         'all',       // all | unread | favorites
    pillarFilter:   null,        // null = all pillars
    searchQuery:    '',
    musicPlaying:   false,
  };

  function save() {
    localStorage.setItem('avi_completed', JSON.stringify(state.completed));
    localStorage.setItem('avi_favorites', JSON.stringify(state.favorites));
  }

  // ── DOM refs (cached once) ────────────────────────────────

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  const el = {
    screens:       $('#screens'),
    // topbar
    navHome:       $('#navHome'),
    musicToggle:   $('#musicToggle'),
    musicIcon:     $('#musicIcon'),
    volSlider:     $('#volumeSlider'),
    bgMusic:       $('#bgMusic'),
    // welcome
    statTotal:     $('#statTotal'),
    statRead:      $('#statRead'),
    statFavs:      $('#statFavs'),
    // reveal
    revealIcon:    $('#revealIcon'),
    revealPillar:  $('#revealPillar'),
    revealTitle:   $('#revealTitle'),
    // reader
    readBadgeIcon: $('#readBadgeIcon'),
    readBadgeText: $('#readBadgeText'),
    readIcon:      $('#readIcon'),
    readTitle:     $('#readTitle'),
    readText:      $('#readText'),
    readDone:      $('#readDone'),
    favIcon:       $('#favIcon'),
    favLabel:      $('#favLabel'),
    // browse
    searchInput:   $('#searchInput'),
    filterTabs:    $('#filterTabs'),
    pillarTabs:    $('#pillarTabs'),
    storiesGrid:   $('#storiesGrid'),
    browseEmpty:   $('#browseEmpty'),
    cntAll:        $('#cntAll'),
    cntUnread:     $('#cntUnread'),
    cntFav:        $('#cntFav'),
    // favorites
    favsGrid:      $('#favsGrid'),
    favsEmpty:     $('#favsEmpty'),
  };

  // ── Screen navigation ─────────────────────────────────────

  function showScreen(id) {
    $$('.screen').forEach(s => s.classList.remove('is-active'));
    const target = $(`#${id}`);
    if (target) {
      target.classList.add('is-active');
      // re-trigger the fadeUp animation
      target.style.animation = 'none';
      target.offsetHeight; // reflow
      target.style.animation = '';
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  // ── Music ─────────────────────────────────────────────────

  function initMusic() {
    el.bgMusic.volume = el.volSlider.value / 100;
    updateMusicUI();
  }

  function toggleMusic() {
    if (state.musicPlaying) {
      el.bgMusic.pause();
      state.musicPlaying = false;
    } else {
      el.bgMusic.play().then(() => { state.musicPlaying = true; updateMusicUI(); })
        .catch(() => { /* browser blocked autoplay, that's fine */ });
      state.musicPlaying = true;
    }
    updateMusicUI();
  }

  function updateMusicUI() {
    el.musicIcon.textContent = state.musicPlaying ? '🔊' : '🔇';
  }

  // ── Stats ─────────────────────────────────────────────────

  function refreshStats() {
    el.statTotal.textContent = stories.length;
    el.statRead.textContent  = state.completed.length;
    el.statFavs.textContent  = state.favorites.length;
  }

  // ── Story selection ───────────────────────────────────────

  function pickRandom() {
    const unread = stories.filter(s => !state.completed.includes(s.id));
    const pool   = unread.length > 0 ? unread : stories;
    state.currentStory = pool[Math.floor(Math.random() * pool.length)];
  }

  // ── Reveal screen ─────────────────────────────────────────

  function showReveal() {
    const s = state.currentStory;
    el.revealIcon.textContent   = s.icon;
    el.revealPillar.textContent = s.pillar;
    el.revealTitle.textContent  = s.title;
    showScreen('scrReveal');
    // auto-start music on first "Begin"
    if (!state.musicPlaying) {
      el.bgMusic.play().then(() => { state.musicPlaying = true; updateMusicUI(); }).catch(() => {});
    }
  }

  // ── Reader screen ─────────────────────────────────────────

  function openStory(story) {
    if (!story) return;
    state.currentStory = story;

    el.readBadgeIcon.textContent = story.icon;
    el.readBadgeText.textContent = story.pillar;
    el.readIcon.textContent      = story.icon;
    el.readTitle.textContent     = story.title;
    el.readText.innerHTML        = story.text;

    // mark read
    if (!state.completed.includes(story.id)) {
      state.completed.push(story.id);
      save();
    }

    // favorite button state
    updateFavButton();

    // show "shared" indicator after a beat
    el.readDone.classList.remove('is-visible');
    setTimeout(() => el.readDone.classList.add('is-visible'), 1500);

    showScreen('scrRead');
    refreshStats();
  }

  function updateFavButton() {
    const isFav = state.favorites.includes(state.currentStory?.id);
    el.favIcon.textContent  = isFav ? '♥' : '♡';
    el.favLabel.textContent = isFav ? 'Favorited' : 'Favorite';
    $('#btnFav').classList.toggle('is-fav', isFav);
  }

  function toggleFavorite() {
    if (!state.currentStory) return;
    const id = state.currentStory.id;
    const idx = state.favorites.indexOf(id);
    if (idx === -1) { state.favorites.push(id); }
    else            { state.favorites.splice(idx, 1); }
    save();
    updateFavButton();
    refreshStats();
  }

  // ── Browse screen ─────────────────────────────────────────

  function openBrowse() {
    buildPillarChips();
    refreshBrowseCounts();
    renderBrowseGrid();
    showScreen('scrBrowse');
  }

  function buildPillarChips() {
    const pillars = [...new Set(stories.map(s => s.pillar))].sort();
    el.pillarTabs.innerHTML =
      `<button class="chip${state.pillarFilter === null ? ' is-active' : ''}" data-pillar="all">All</button>` +
      pillars.map(p => {
        const icon = stories.find(s => s.pillar === p).icon;
        return `<button class="chip${state.pillarFilter === p ? ' is-active' : ''}" data-pillar="${p}">${icon} ${p}</button>`;
      }).join('');
  }

  function refreshBrowseCounts() {
    el.cntAll.textContent    = stories.length;
    el.cntUnread.textContent = stories.filter(s => !state.completed.includes(s.id)).length;
    el.cntFav.textContent    = state.favorites.length;
  }

  function getFilteredStories() {
    let list = [...stories];

    // main filter
    if (state.filter === 'unread')    list = list.filter(s => !state.completed.includes(s.id));
    if (state.filter === 'favorites') list = list.filter(s => state.favorites.includes(s.id));

    // pillar
    if (state.pillarFilter) list = list.filter(s => s.pillar === state.pillarFilter);

    // search
    if (state.searchQuery) {
      const q = state.searchQuery.toLowerCase();
      list = list.filter(s =>
        s.title.toLowerCase().includes(q) ||
        s.pillar.toLowerCase().includes(q)
      );
    }

    return list;
  }

  function renderBrowseGrid() {
    const filtered = getFilteredStories();

    if (filtered.length === 0) {
      el.storiesGrid.innerHTML = '';
      el.browseEmpty.classList.remove('is-hidden');
      return;
    }
    el.browseEmpty.classList.add('is-hidden');

    el.storiesGrid.innerHTML = filtered.map(s => {
      const isRead = state.completed.includes(s.id);
      const isFav  = state.favorites.includes(s.id);
      return `
        <div class="card" data-sid="${s.id}">
          <div class="card__icon">${s.icon}</div>
          <div class="card__title">${s.title}</div>
          <div class="card__pillar">${s.pillar}</div>
          <div class="card__badges">
            ${isFav  ? '<span class="card__badge card__badge--fav">♥ Favorite</span>' : ''}
            ${isRead && !isFav ? '<span class="card__badge card__badge--read">✓ Read</span>' : ''}
          </div>
        </div>`;
    }).join('');
  }

  // ── Favorites screen ──────────────────────────────────────

  function openFavorites() {
    const favStories = stories.filter(s => state.favorites.includes(s.id));

    if (favStories.length === 0) {
      el.favsGrid.innerHTML = '';
      el.favsEmpty.classList.remove('is-hidden');
    } else {
      el.favsEmpty.classList.add('is-hidden');
      el.favsGrid.innerHTML = favStories.map(s => `
        <div class="card" data-sid="${s.id}">
          <div class="card__icon">${s.icon}</div>
          <div class="card__title">${s.title}</div>
          <div class="card__pillar">${s.pillar}</div>
        </div>`).join('');
    }

    showScreen('scrFavorites');
  }

  // ── Event wiring ──────────────────────────────────────────

  function bind() {
    // Navigation
    el.navHome.addEventListener('click', () => { showScreen('scrWelcome'); refreshStats(); });

    // Welcome
    $('#btnBegin').addEventListener('click',  () => { pickRandom(); showReveal(); });
    $('#btnBrowse').addEventListener('click', openBrowse);
    $('#btnFavs').addEventListener('click',   openFavorites);

    // Reveal
    $('#btnReadStory').addEventListener('click',  () => openStory(state.currentStory));
    $('#btnPickAnother').addEventListener('click', () => { pickRandom(); showReveal(); });

    // Reader
    $('#btnBackRead').addEventListener('click', () => { showScreen('scrWelcome'); refreshStats(); });
    $('#btnFav').addEventListener('click', toggleFavorite);
    $('#btnNext').addEventListener('click', () => { pickRandom(); openStory(state.currentStory); });

    // Browse
    $('#btnBackBrowse').addEventListener('click', () => { showScreen('scrWelcome'); refreshStats(); });

    // Browse: filter tabs (event delegation)
    el.filterTabs.addEventListener('click', e => {
      const tab = e.target.closest('.tab');
      if (!tab) return;
      $$('.tab', el.filterTabs).forEach(t => t.classList.remove('is-active'));
      tab.classList.add('is-active');
      state.filter = tab.dataset.filter;
      renderBrowseGrid();
    });

    // Browse: pillar chips (event delegation)
    el.pillarTabs.addEventListener('click', e => {
      const chip = e.target.closest('.chip');
      if (!chip) return;
      $$('.chip', el.pillarTabs).forEach(c => c.classList.remove('is-active'));
      chip.classList.add('is-active');
      const p = chip.dataset.pillar;
      state.pillarFilter = p === 'all' ? null : p;
      renderBrowseGrid();
    });

    // Browse: search
    el.searchInput.addEventListener('input', e => {
      state.searchQuery = e.target.value.trim();
      renderBrowseGrid();
    });

    // Browse: card clicks (event delegation on grid)
    el.storiesGrid.addEventListener('click', e => {
      const card = e.target.closest('.card');
      if (!card) return;
      const story = stories.find(s => s.id === Number(card.dataset.sid));
      if (story) openStory(story);
    });

    // Favorites: card clicks
    el.favsGrid.addEventListener('click', e => {
      const card = e.target.closest('.card');
      if (!card) return;
      const story = stories.find(s => s.id === Number(card.dataset.sid));
      if (story) openStory(story);
    });

    // Favorites: empty → browse
    $('#btnBrowseFromEmpty').addEventListener('click', openBrowse);

    // Music
    el.musicToggle.addEventListener('click', toggleMusic);
    el.volSlider.addEventListener('input', () => {
      el.bgMusic.volume = el.volSlider.value / 100;
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', e => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.code === 'Space')  { e.preventDefault(); toggleMusic(); }
      if (e.code === 'Escape') { showScreen('scrWelcome'); refreshStats(); }
    });
  }

  // ── Init ──────────────────────────────────────────────────

  function init() {
    initMusic();
    refreshStats();
    bind();
  }

  // Wait for DOM + stories
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
