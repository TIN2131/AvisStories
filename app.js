// App state
let currentStory = null;
let completedStories = JSON.parse(localStorage.getItem('aviCompletedStories')) || [];
let favorites = JSON.parse(localStorage.getItem('aviFavorites')) || [];

// DOM elements
const playButton = document.getElementById('playButton');
const musicPlayer = document.getElementById('musicPlayer');
const storyReveal = document.getElementById('storyReveal');
const storyContainer = document.getElementById('storyContainer');
const progressSection = document.getElementById('progressSection');
const backgroundMusic = document.getElementById('backgroundMusic');
const volumeControl = document.getElementById('volumeControl');
const volumeSlider = document.getElementById('volumeSlider');
const volumeValue = document.getElementById('volumeValue');
const backButton = document.getElementById('backButton');
const favoriteButton = document.getElementById('favoriteButton');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProgressSection();
    setupEventListeners();
    
    // Set initial volume
    backgroundMusic.volume = 0.25;
});

function setupEventListeners() {
    playButton.addEventListener('click', startExperience);
    backButton.addEventListener('click', showStoryReveal);
    favoriteButton.addEventListener('click', toggleFavorite);
    
    volumeSlider.addEventListener('input', (e) => {
        const volume = e.target.value / 100;
        backgroundMusic.volume = volume;
        volumeValue.textContent = e.target.value + '%';
    });
}

function startExperience() {
    // Start music
    backgroundMusic.play().catch(err => {
        console.log('Music autoplay prevented:', err);
    });
    
    // Hide play button, show volume control
    playButton.style.display = 'none';
    volumeControl.style.display = 'block';
    
    // Show story reveal after a brief moment
    setTimeout(() => {
        selectRandomStory();
        showStoryReveal();
    }, 500);
}

function selectRandomStory() {
    // Get stories that haven't been read yet, or all if all have been read
    const unreadStories = stories.filter(s => !completedStories.includes(s.id));
    const availableStories = unreadStories.length > 0 ? unreadStories : stories;
    
    // Select random story
    const randomIndex = Math.floor(Math.random() * availableStories.length);
    currentStory = availableStories[randomIndex];
}

function showStoryReveal() {
    // Hide other sections
    storyContainer.style.display = 'none';
    
    // Update pillar info
    document.getElementById('pillarIcon').textContent = currentStory.icon;
    document.getElementById('pillarName').textContent = currentStory.pillar;
    
    // Show reveal with animation
    storyReveal.style.display = 'block';
    
    // Auto-advance to story after 3 seconds
    setTimeout(() => {
        showStory();
    }, 3000);
    
    // But also allow clicking to advance immediately
    storyReveal.onclick = showStory;
}

function showStory() {
    // Remove click handler
    storyReveal.onclick = null;
    
    // Hide reveal
    storyReveal.style.display = 'none';
    
    // Update story content
    document.getElementById('storyTitle').textContent = currentStory.title;
    document.getElementById('storyText').innerHTML = currentStory.text;
    
    // Update favorite button
    updateFavoriteButton();
    
    // Show story
    storyContainer.style.display = 'block';
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Mark as completed
    if (!completedStories.includes(currentStory.id)) {
        completedStories.push(currentStory.id);
        localStorage.setItem('aviCompletedStories', JSON.stringify(completedStories));
        renderProgressSection();
    }
}

function toggleFavorite() {
    const storyId = currentStory.id;
    
    if (favorites.includes(storyId)) {
        // Remove from favorites
        favorites = favorites.filter(id => id !== storyId);
    } else {
        // Add to favorites
        favorites.push(storyId);
    }
    
    localStorage.setItem('aviFavorites', JSON.stringify(favorites));
    updateFavoriteButton();
}

function updateFavoriteButton() {
    if (favorites.includes(currentStory.id)) {
        favoriteButton.classList.add('favorited');
        favoriteButton.textContent = '♥ Saved as Favorite';
    } else {
        favoriteButton.classList.remove('favorited');
        favoriteButton.textContent = '♡ Save as Favorite';
    }
}

function renderProgressSection() {
    const progressGrid = document.getElementById('progressGrid');
    progressGrid.innerHTML = '';
    
    // Group stories by pillar
    const pillarCounts = {};
    stories.forEach(story => {
        if (!pillarCounts[story.pillar]) {
            pillarCounts[story.pillar] = {
                icon: story.icon,
                total: 0,
                completed: 0
            };
        }
        pillarCounts[story.pillar].total++;
        if (completedStories.includes(story.id)) {
            pillarCounts[story.pillar].completed++;
        }
    });
    
    // Create progress items
    Object.keys(pillarCounts).forEach(pillar => {
        const data = pillarCounts[pillar];
        const item = document.createElement('div');
        item.className = 'progress-item' + (data.completed > 0 ? ' completed' : '');
        item.innerHTML = `
            <div class="icon">${data.icon}</div>
            <div class="name">${pillar}</div>
            <div class="count">${data.completed}/${data.total}</div>
        `;
        progressGrid.appendChild(item);
    });
    
    // Show progress section if any stories completed
    if (completedStories.length > 0) {
        progressSection.style.display = 'block';
    }
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Space bar to play/pause music
    if (e.code === 'Space' && e.target === document.body) {
        e.preventDefault();
        if (backgroundMusic.paused) {
            backgroundMusic.play();
        } else {
            backgroundMusic.pause();
        }
    }
});
