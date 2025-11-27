/* ===================================
   AVI'S BEDTIME STORIES - ULTIMATE EDITION
   Main Application Logic
   =================================== */

// ===================================
// STATE MANAGEMENT
// ===================================

const AppState = {
    currentStory: null,
    completedStories: JSON.parse(localStorage.getItem('aviCompletedStories')) || [],
    favorites: JSON.parse(localStorage.getItem('aviFavorites')) || [],
    dedications: JSON.parse(localStorage.getItem('aviDedications')) || {},
    isPlaying: false,
    currentFilter: 'all',
    currentPillarFilter: null,
    searchQuery: ''
};

// ===================================
// DOM ELEMENTS
// ===================================

const DOM = {
    // Screens
    welcomeScreen: document.getElementById('welcomeScreen'),
    revealScreen: document.getElementById('revealScreen'),
    storyScreen: document.getElementById('storyScreen'),
    browseScreen: document.getElementById('browseScreen'),
    favoritesScreen: document.getElementById('favoritesScreen'),
    
    // Navigation
    navbar: document.getElementById('navbar'),
    navBrand: document.getElementById('navBrand'),
    musicToggle: document.getElementById('musicToggle'),
    musicIcon: document.getElementById('musicIcon'),
    musicStatus: document.getElementById('musicStatus'),
    volumeWrapper: document.getElementById('volumeWrapper'),
    volumeSlider: document.getElementById('volumeSlider'),
    volumeLabel: document.getElementById('volumeLabel'),
    
    // Welcome Screen
    beginBtn: document.getElementById('beginBtn'),
    browseBtn: document.getElementById('browseBtn'),
    favoritesBtn: document.getElementById('favoritesBtn'),
    totalStories: document.getElementById('totalStories'),
    storiesRead: document.getElementById('storiesRead'),
    favoriteCount: document.getElementById('favoriteCount'),
    
    // Reveal Screen
    revealIcon: document.getElementById('revealIcon'),
    revealPillar: document.getElementById('revealPillar'),
    revealTitle: document.getElementById('revealTitle'),
    readStoryBtn: document.getElementById('readStoryBtn'),
    pickAnotherBtn: document.getElementById('pickAnotherBtn'),
    
    // Story Screen
    backToHomeBtn: document.getElementById('backToHomeBtn'),
    storyPillarBadge: document.getElementById('storyPillarBadge'),
    storyIconLarge: document.getElementById('storyIconLarge'),
    storyTitle: document.getElementById('storyTitle'),
    storyBody: document.getElementById('storyBody'),
    favoriteBtn: document.getElementById('favoriteBtn'),
    favoriteIcon: document.getElementById('favoriteIcon'),
    favoriteText: document.getElementById('favoriteText'),
    nextStoryBtn: document.getElementById('nextStoryBtn'),
    readingComplete: document.getElementById('readingComplete'),
    
    // Browse Screen
    backFromBrowseBtn: document.getElementById('backFromBrowseBtn'),
    searchInput: document.getElementById('searchInput'),
    filterTabs: document.getElementById('filterTabs'),
    pillarFilters: document.getElementById('pillarFilters'),
    storiesGrid: document.getElementById('storiesGrid'),
    allCount: document.getElementById('allCount'),
    unreadCount: document.getElementById('unreadCount'),
    favTabCount: document.getElementById('favTabCount'),
    emptyBrowse: document.getElementById('emptyBrowse'),
    
    // Favorites Screen
    backFromFavoritesBtn: document.getElementById('backFromFavoritesBtn'),
    favoritesGrid: document.getElementById('favoritesGrid'),
    emptyFavorites: document.getElementById('emptyFavorites'),
    browseFromEmptyBtn: document.getElementById('browseFromEmptyBtn'),
    
    // Modal
    dedicationModal: document.getElementById('dedicationModal'),
    dedicationText: document.getElementById('dedicationText'),
    skipDedicationBtn: document.getElementById('skipDedicationBtn'),
    saveDedicationBtn: document.getElementById('saveDedicationBtn'),
    
    // Audio
    backgroundMusic: document.getElementById('backgroundMusic')
};

// ===================================
// INITIALIZATION
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    setupEventListeners();
    updateStats();
    DOM.backgroundMusic.volume = 0.25;
});

function initializeApp() {
    console.log(`🌙 Avi's Bedtime Stories loaded with ${stories.length} stories`);
}

function setupEventListeners() {
    // Navigation
    DOM.navBrand.addEventListener('click', () => showScreen('welcome'));
    DOM.musicToggle.addEventListener('click', toggleMusic);
    DOM.volumeSlider.addEventListener('input', updateVolume);
    
    // Welcome Screen
    DOM.beginBtn.addEventListener('click', beginStoryExperience);
    DOM.browseBtn.addEventListener('click', () => showScreen('browse'));
    DOM.favoritesBtn.addEventListener('click', () => showScreen('favorites'));
    
    // Reveal Screen
    DOM.readStoryBtn.addEventListener('click', showCurrentStory);
    DOM.pickAnotherBtn.addEventListener('click', pickRandomStory);
    
    // Story Screen
    DOM.backToHomeBtn.addEventListener('click', () => showScreen('welcome'));
    DOM.favoriteBtn.addEventListener('click', toggleFavorite);
    DOM.nextStoryBtn.addEventListener('click', pickAndShowRandomStory);
    
    // Browse Screen
    DOM.backFromBrowseBtn.addEventListener('click', () => showScreen('welcome'));
    DOM.searchInput.addEventListener('input', handleSearch);
    DOM.filterTabs.addEventListener('click', handleFilterTab);
    
    // Favorites Screen
    DOM.backFromFavoritesBtn.addEventListener('click', () => showScreen('welcome'));
    if (DOM.browseFromEmptyBtn) {
        DOM.browseFromEmptyBtn.addEventListener('click', () => showScreen('browse'));
    }
    
    // Modal
    DOM.skipDedicationBtn.addEventListener('click', closeDedicationModal);
    DOM.saveDedicationBtn.addEventListener('click', saveDedication);
    
    // Keyboard shortcuts
    document.addEventListener('keydown', handleKeyboard);
}

// ===================================
// SCREEN NAVIGATION
// ===================================

function showScreen(screenName) {
    // Hide all screens
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.remove('active'));
    
    // Show target screen
    const targetScreen = document.getElementById(`${screenName}Screen`);
    if (targetScreen) {
        targetScreen.classList.add('active');
    }
    
    // Screen-specific setup
    switch(screenName) {
        case 'welcome':
            updateStats();
            break;
        case 'browse':
            renderBrowseScreen();
            break;
        case 'favorites':
            renderFavoritesScreen();
            break;
    }
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===================================
// MUSIC CONTROLS
// ===================================

function toggleMusic() {
    if (AppState.isPlaying) {
        DOM.backgroundMusic.pause();
        AppState.isPlaying = false;
        DOM.musicIcon.textContent = '🎵';
        DOM.musicStatus.textContent = 'Off';
        DOM.musicToggle.classList.remove('playing');
        DOM.volumeWrapper.classList.remove('visible');
    } else {
        DOM.backgroundMusic.play().catch(err => {
            console.log('Music autoplay prevented:', err);
        });
        AppState.isPlaying = true;
        DOM.musicIcon.textContent = '🎶';
        DOM.musicStatus.textContent = 'On';
        DOM.musicToggle.classList.add('playing');
        DOM.volumeWrapper.classList.add('visible');
    }
}

function updateVolume() {
    const volume = DOM.volumeSlider.value / 100;
    DOM.backgroundMusic.volume = volume;
    DOM.volumeLabel.textContent = `${DOM.volumeSlider.value}%`;
}

// ===================================
// STORY SELECTION
// ===================================

function beginStoryExperience() {
    // Start music if not playing
    if (!AppState.isPlaying) {
        toggleMusic();
    }
    
    // Pick a random story
    pickRandomStory();
    
    // Show reveal screen
    showScreen('reveal');
}

function pickRandomStory() {
    // Prioritize unread stories
    const unreadStories = stories.filter(s => !AppState.completedStories.includes(s.id));
    const availableStories = unreadStories.length > 0 ? unreadStories : stories;
    
    // Random selection
    const randomIndex = Math.floor(Math.random() * availableStories.length);
    AppState.currentStory = availableStories[randomIndex];
    
    // Update reveal screen
    updateRevealScreen();
}

function updateRevealScreen() {
    const story = AppState.currentStory;
    DOM.revealIcon.textContent = story.icon;
    DOM.revealPillar.textContent = story.pillar;
    DOM.revealTitle.textContent = story.title;
}

function pickAndShowRandomStory() {
    pickRandomStory();
    showCurrentStory();
}

// ===================================
// STORY DISPLAY
// ===================================

function showCurrentStory() {
    const story = AppState.currentStory;
    
    // Update story screen elements
    DOM.storyIconLarge.textContent = story.icon;
    DOM.storyTitle.textContent = story.title;
    DOM.storyBody.innerHTML = story.text;
    DOM.storyPillarBadge.innerHTML = `
        <span class="badge-icon">${story.icon}</span>
        <span class="badge-text">${story.pillar}</span>
    `;
    
    // Update favorite button
    updateFavoriteButton();
    
    // Mark as completed
    markStoryComplete(story.id);
    
    // Show screen
    showScreen('story');
}

function showStoryById(storyId) {
    const story = stories.find(s => s.id === storyId);
    if (story) {
        AppState.currentStory = story;
        showCurrentStory();
    }
}

function markStoryComplete(storyId) {
    if (!AppState.completedStories.includes(storyId)) {
        AppState.completedStories.push(storyId);
        localStorage.setItem('aviCompletedStories', JSON.stringify(AppState.completedStories));
    }
}

// ===================================
// FAVORITES
// ===================================

function toggleFavorite() {
    const storyId = AppState.currentStory.id;
    
    if (AppState.favorites.includes(storyId)) {
        AppState.favorites = AppState.favorites.filter(id => id !== storyId);
    } else {
        AppState.favorites.push(storyId);
    }
    
    localStorage.setItem('aviFavorites', JSON.stringify(AppState.favorites));
    updateFavoriteButton();
    updateStats();
}

function updateFavoriteButton() {
    const isFavorited = AppState.favorites.includes(AppState.currentStory.id);
    
    if (isFavorited) {
        DOM.favoriteIcon.textContent = '♥';
        DOM.favoriteText.textContent = 'Favorited';
        DOM.favoriteBtn.classList.add('favorited');
    } else {
        DOM.favoriteIcon.textContent = '♡';
        DOM.favoriteText.textContent = 'Add to Favorites';
        DOM.favoriteBtn.classList.remove('favorited');
    }
}

// ===================================
// BROWSE SCREEN
// ===================================

function renderBrowseScreen() {
    renderPillarFilters();
    renderStoriesGrid();
    updateFilterCounts();
}

function renderPillarFilters() {
    // Get unique pillars
    const pillars = [...new Set(stories.map(s => s.pillar))];
    
    DOM.pillarFilters.innerHTML = `
        <button class="pillar-filter-btn ${AppState.currentPillarFilter === null ? 'active' : ''}" 
                data-pillar="all">
            ✨ All Themes
        </button>
        ${pillars.map(pillar => {
            const story = stories.find(s => s.pillar === pillar);
            return `
                <button class="pillar-filter-btn ${AppState.currentPillarFilter === pillar ? 'active' : ''}" 
                        data-pillar="${pillar}">
                    ${story.icon} ${pillar}
                </button>
            `;
        }).join('')}
    `;
    
    // Add click handlers
    DOM.pillarFilters.querySelectorAll('.pillar-filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const pillar = btn.dataset.pillar;
            AppState.currentPillarFilter = pillar === 'all' ? null : pillar;
            
            // Update active state
            DOM.pillarFilters.querySelectorAll('.pillar-filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            renderStoriesGrid();
        });
    });
}

function renderStoriesGrid() {
    let filteredStories = [...stories];
    
    // Apply main filter
    if (AppState.currentFilter === 'unread') {
        filteredStories = filteredStories.filter(s => !AppState.completedStories.includes(s.id));
    } else if (AppState.currentFilter === 'favorites') {
        filteredStories = filteredStories.filter(s => AppState.favorites.includes(s.id));
    }
    
    // Apply pillar filter
    if (AppState.currentPillarFilter) {
        filteredStories = filteredStories.filter(s => s.pillar === AppState.currentPillarFilter);
    }
    
    // Apply search
    if (AppState.searchQuery) {
        const query = AppState.searchQuery.toLowerCase();
        filteredStories = filteredStories.filter(s => 
            s.title.toLowerCase().includes(query) ||
            s.pillar.toLowerCase().includes(query)
        );
    }
    
    // Render cards
    if (filteredStories.length === 0) {
        DOM.storiesGrid.innerHTML = '';
        DOM.emptyBrowse.classList.remove('hidden');
    } else {
        DOM.emptyBrowse.classList.add('hidden');
        DOM.storiesGrid.innerHTML = filteredStories.map(story => {
            const isRead = AppState.completedStories.includes(story.id);
            const isFavorite = AppState.favorites.includes(story.id);
            
            return `
                <div class="story-card" data-story-id="${story.id}">
                    <div class="story-card-icon">${story.icon}</div>
                    <h3 class="story-card-title">${story.title}</h3>
                    <p class="story-card-pillar">${story.pillar}</p>
                    <div class="story-card-badges">
                        ${isFavorite ? '<span class="story-card-status status-favorite">♥ Favorite</span>' : ''}
                        ${isRead && !isFavorite ? '<span class="story-card-status status-read">✓ Read</span>' : ''}
                    </div>
                </div>
            `;
        }).join('');
        
        // Add click handlers
        DOM.storiesGrid.querySelectorAll('.story-card').forEach(card => {
            card.addEventListener('click', () => {
                const storyId = parseInt(card.dataset.storyId);
                showStoryById(storyId);
            });
        });
    }
}

function handleFilterTab(e) {
    const tab = e.target.closest('.filter-tab');
    if (!tab) return;
    
    const filter = tab.dataset.filter;
    AppState.currentFilter = filter;
    
    // Update active state
    DOM.filterTabs.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    
    renderStoriesGrid();
}

function handleSearch(e) {
    AppState.searchQuery = e.target.value;
    renderStoriesGrid();
}

function updateFilterCounts() {
    const unreadCount = stories.filter(s => !AppState.completedStories.includes(s.id)).length;
    const favCount = AppState.favorites.length;
    
    DOM.allCount.textContent = stories.length;
    DOM.unreadCount.textContent = unreadCount;
    DOM.favTabCount.textContent = favCount;
}

// ===================================
// FAVORITES SCREEN
// ===================================

function renderFavoritesScreen() {
    const favoriteStories = stories.filter(s => AppState.favorites.includes(s.id));
    
    if (favoriteStories.length === 0) {
        DOM.favoritesGrid.innerHTML = '';
        DOM.emptyFavorites.style.display = 'block';
    } else {
        DOM.emptyFavorites.style.display = 'none';
        DOM.favoritesGrid.innerHTML = favoriteStories.map(story => `
            <div class="favorite-card" data-story-id="${story.id}">
                <div class="story-card-icon">${story.icon}</div>
                <h3 class="story-card-title">${story.title}</h3>
                <p class="story-card-pillar">${story.pillar}</p>
            </div>
        `).join('');
        
        // Add click handlers
        DOM.favoritesGrid.querySelectorAll('.favorite-card').forEach(card => {
            card.addEventListener('click', () => {
                const storyId = parseInt(card.dataset.storyId);
                showStoryById(storyId);
            });
        });
    }
}

// ===================================
// DEDICATION MODAL
// ===================================

function openDedicationModal() {
    DOM.dedicationText.value = '';
    DOM.dedicationModal.classList.add('active');
}

function closeDedicationModal() {
    DOM.dedicationModal.classList.remove('active');
    showCurrentStory();
}

function saveDedication() {
    const dedication = DOM.dedicationText.value.trim();
    if (dedication && AppState.currentStory) {
        AppState.dedications[AppState.currentStory.id] = dedication;
        localStorage.setItem('aviDedications', JSON.stringify(AppState.dedications));
    }
    closeDedicationModal();
}

// ===================================
// STATS
// ===================================

function updateStats() {
    DOM.totalStories.textContent = stories.length;
    DOM.storiesRead.textContent = AppState.completedStories.length;
    DOM.favoriteCount.textContent = AppState.favorites.length;
}

// ===================================
// KEYBOARD SHORTCUTS
// ===================================

function handleKeyboard(e) {
    // Space to toggle music (when not typing)
    if (e.code === 'Space' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
        e.preventDefault();
        toggleMusic();
    }
    
    // Escape to go back
    if (e.code === 'Escape') {
        showScreen('welcome');
    }
}

// ===================================
// UTILITY FUNCTIONS
// ===================================

function getRandomStory(excludeId = null) {
    const available = stories.filter(s => s.id !== excludeId);
    return available[Math.floor(Math.random() * available.length)];
}

// Make stories globally available for debugging
window.AppState = AppState;
window.stories = stories;
