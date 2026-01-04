// List of leisure activities
const activities = [
    'Reading books',
    'Watching movies',
    'Playing video games',
    'Going for a walk',
    'Hiking',
    'Cycling',
    'Swimming',
    'Yoga',
    'Meditation',
    'Cooking',
    'Trying new restaurants',
    'Photography',
    'Painting or drawing',
    'Playing a musical instrument',
    'Listening to music',
    'Attending concerts',
    'Dancing',
    'Gardening',
    'Board games',
    'Card games',
    'Puzzles',
    'Writing',
    'Blogging',
    'Learning a new language',
    'Traveling',
    'Exploring local areas',
    'Museums',
    'Art galleries',
    'Theater',
    'Sports (watching or playing)',
    'Fishing',
    'Camping',
    'Beach activities',
    'Skiing or snowboarding',
    'Rock climbing',
    'Running or jogging',
    'Gym workout',
    'Martial arts',
    'Sailing',
    'Surfing',
    'Golf',
    'Tennis',
    'Basketball',
    'Soccer',
    'Volunteering',
    'Socializing with friends',
    'Coffee shop visits',
    'Wine tasting',
    'Crafting',
    'Knitting or crocheting',
    'Woodworking',
    'DIY projects',
    'Collecting items',
    'Stargazing',
    'Bird watching',
    'Nature photography',
    'Online courses',
    'Podcasts',
    'Stand-up comedy',
    'Karaoke',
    'Bowling',
    'Mini golf',
    'Arcade games',
    'Escape rooms',
    'Trivia nights',
    'Book clubs',
    'Cooking classes',
    'Pottery',
    'Sculpting'
];

// State management
let activityState = {};

// Initialize state from localStorage or create new
function initState() {
    const saved = localStorage.getItem('activityState');
    if (saved) {
        activityState = JSON.parse(saved);
    } else {
        activities.forEach(activity => {
            activityState[activity] = {
                checked: false,
                starred: false
            };
        });
    }
}

// Save state to localStorage
function saveState() {
    localStorage.setItem('activityState', JSON.stringify(activityState));
    updateStats();
    updateFilter();
}

// Render activities
function renderActivities() {
    const list = document.getElementById('activities-list');
    list.innerHTML = '';
    
    activities.forEach(activity => {
        const state = activityState[activity] || { checked: false, starred: false };
        const item = document.createElement('li');
        item.className = 'activity-item';
        
        if (state.checked) {
            item.classList.add('checked');
        }
        if (state.starred) {
            item.classList.add('starred');
        }
        
        item.innerHTML = `
            <input type="checkbox" class="checkbox" ${state.checked ? 'checked' : ''} data-activity="${activity}">
            <span class="activity-text">${activity}</span>
            <button class="star-btn ${state.starred ? 'active' : ''}" data-activity="${activity}">
                ${state.starred ? '★' : '☆'}
            </button>
        `;
        
        list.appendChild(item);
    });
    
    // Add event listeners
    document.querySelectorAll('.checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', handleCheck);
    });
    
    document.querySelectorAll('.star-btn').forEach(btn => {
        btn.addEventListener('click', handleStar);
    });
}

// Handle checkbox change
function handleCheck(e) {
    const activity = e.target.dataset.activity;
    if (!activityState[activity]) {
        activityState[activity] = { checked: false, starred: false };
    }
    activityState[activity].checked = e.target.checked;
    
    const item = e.target.closest('.activity-item');
    if (e.target.checked) {
        item.classList.add('checked');
    } else {
        item.classList.remove('checked');
    }
    
    saveState();
}

// Handle star click
function handleStar(e) {
    e.preventDefault();
    e.stopPropagation();
    const activity = e.target.dataset.activity;
    if (!activityState[activity]) {
        activityState[activity] = { checked: false, starred: false };
    }
    activityState[activity].starred = !activityState[activity].starred;
    
    const item = e.target.closest('.activity-item');
    if (activityState[activity].starred) {
        item.classList.add('starred');
        e.target.textContent = '★';
        e.target.classList.add('active');
    } else {
        item.classList.remove('starred');
        e.target.textContent = '☆';
        e.target.classList.remove('active');
    }
    
    saveState();
}

// Update statistics
function updateStats() {
    const total = activities.length;
    const starred = Object.values(activityState).filter(s => s.starred).length;
    const checked = Object.values(activityState).filter(s => s.checked).length;
    
    document.getElementById('total-count').textContent = total;
    document.getElementById('starred-count').textContent = starred;
    document.getElementById('checked-count').textContent = checked;
}

// Filter functionality
let currentFilter = 'all';

function updateFilter() {
    document.querySelectorAll('.activity-item').forEach(item => {
        const activity = item.querySelector('.activity-text').textContent;
        const state = activityState[activity] || { checked: false, starred: false };
        
        item.classList.remove('hidden');
        
        if (currentFilter === 'starred' && !state.starred) {
            item.classList.add('hidden');
        } else if (currentFilter === 'checked' && !state.checked) {
            item.classList.add('hidden');
        } else if (currentFilter === 'active' && (state.checked || state.starred)) {
            item.classList.add('hidden');
        }
    });
}

// Filter button handlers
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        updateFilter();
    });
});

// Initialize
initState();
renderActivities();
updateStats();

