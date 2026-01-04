// Activity to emoji/icon mapping
function getActivityIcon(activity) {
    const lowerActivity = activity.toLowerCase();
    
    // Sports & Fitness
    if (lowerActivity.includes('running') || lowerActivity.includes('jogging') || lowerActivity.includes('marathon')) return '🏃';
    if (lowerActivity.includes('cycling') || lowerActivity.includes('bike')) return '🚴';
    if (lowerActivity.includes('swimming') || lowerActivity.includes('dive')) return '🏊';
    if (lowerActivity.includes('hiking') || lowerActivity.includes('trail')) return '🥾';
    if (lowerActivity.includes('yoga') || lowerActivity.includes('meditation')) return '🧘';
    if (lowerActivity.includes('gym') || lowerActivity.includes('workout') || lowerActivity.includes('fitness')) return '💪';
    if (lowerActivity.includes('basketball')) return '🏀';
    if (lowerActivity.includes('soccer') || lowerActivity.includes('football')) return '⚽';
    if (lowerActivity.includes('tennis')) return '🎾';
    if (lowerActivity.includes('golf')) return '⛳';
    if (lowerActivity.includes('volleyball')) return '🏐';
    if (lowerActivity.includes('baseball') || lowerActivity.includes('softball')) return '⚾';
    if (lowerActivity.includes('hockey') || lowerActivity.includes('ice')) return '🏒';
    if (lowerActivity.includes('skiing') || lowerActivity.includes('snowboard')) return '⛷️';
    if (lowerActivity.includes('surfing') || lowerActivity.includes('surf')) return '🏄';
    if (lowerActivity.includes('skateboard')) return '🛹';
    if (lowerActivity.includes('climbing') || lowerActivity.includes('rock')) return '🧗';
    if (lowerActivity.includes('boxing') || lowerActivity.includes('martial')) return '🥊';
    if (lowerActivity.includes('dancing') || lowerActivity.includes('dance')) return '💃';
    
    // Water Activities
    if (lowerActivity.includes('sailing') || lowerActivity.includes('boat')) return '⛵';
    if (lowerActivity.includes('kayak') || lowerActivity.includes('canoe')) return '🛶';
    if (lowerActivity.includes('fishing')) return '🎣';
    if (lowerActivity.includes('beach') || lowerActivity.includes('ocean')) return '🏖️';
    
    // Creative Arts
    if (lowerActivity.includes('painting') || lowerActivity.includes('drawing') || lowerActivity.includes('art')) return '🎨';
    if (lowerActivity.includes('photography') || lowerActivity.includes('photo')) return '📸';
    if (lowerActivity.includes('music') || lowerActivity.includes('instrument') || lowerActivity.includes('singing')) return '🎵';
    if (lowerActivity.includes('writing') || lowerActivity.includes('blog') || lowerActivity.includes('journal')) return '✍️';
    if (lowerActivity.includes('pottery') || lowerActivity.includes('ceramic')) return '🏺';
    if (lowerActivity.includes('sculpting') || lowerActivity.includes('sculpture')) return '🗿';
    if (lowerActivity.includes('crafting') || lowerActivity.includes('craft')) return '🪡';
    if (lowerActivity.includes('knitting') || lowerActivity.includes('crochet')) return '🧶';
    if (lowerActivity.includes('sewing')) return '🧵';
    if (lowerActivity.includes('woodworking') || lowerActivity.includes('wood')) return '🪵';
    if (lowerActivity.includes('jewelry') || lowerActivity.includes('beading')) return '💎';
    
    // Food & Drink
    if (lowerActivity.includes('cooking') || lowerActivity.includes('baking') || lowerActivity.includes('chef')) return '👨‍🍳';
    if (lowerActivity.includes('restaurant') || lowerActivity.includes('dining')) return '🍽️';
    if (lowerActivity.includes('coffee') || lowerActivity.includes('cafe')) return '☕';
    if (lowerActivity.includes('wine') || lowerActivity.includes('beer') || lowerActivity.includes('cocktail')) return '🍷';
    if (lowerActivity.includes('food') || lowerActivity.includes('meal')) return '🍕';
    
    // Games & Entertainment
    if (lowerActivity.includes('video game') || lowerActivity.includes('gaming') || lowerActivity.includes('esport')) return '🎮';
    if (lowerActivity.includes('board game') || lowerActivity.includes('tabletop')) return '🎲';
    if (lowerActivity.includes('card game') || lowerActivity.includes('poker') || lowerActivity.includes('cards')) return '🃏';
    if (lowerActivity.includes('chess')) return '♟️';
    if (lowerActivity.includes('puzzle') || lowerActivity.includes('sudoku')) return '🧩';
    if (lowerActivity.includes('bowling')) return '🎳';
    if (lowerActivity.includes('arcade')) return '🕹️';
    if (lowerActivity.includes('escape room')) return '🚪';
    if (lowerActivity.includes('karaoke')) return '🎤';
    if (lowerActivity.includes('movie') || lowerActivity.includes('film') || lowerActivity.includes('cinema')) return '🎬';
    
    // Reading & Learning
    if (lowerActivity.includes('reading') || lowerActivity.includes('book') || lowerActivity.includes('library')) return '📚';
    if (lowerActivity.includes('learning') || lowerActivity.includes('course') || lowerActivity.includes('study')) return '📖';
    if (lowerActivity.includes('language')) return '🗣️';
    if (lowerActivity.includes('podcast')) return '🎧';
    
    // Travel & Exploration
    if (lowerActivity.includes('travel') || lowerActivity.includes('trip') || lowerActivity.includes('vacation')) return '✈️';
    if (lowerActivity.includes('camping') || lowerActivity.includes('tent')) return '⛺';
    if (lowerActivity.includes('hiking') || lowerActivity.includes('mountain')) return '⛰️';
    if (lowerActivity.includes('museum') || lowerActivity.includes('gallery')) return '🏛️';
    if (lowerActivity.includes('theater') || lowerActivity.includes('theatre') || lowerActivity.includes('play')) return '🎭';
    if (lowerActivity.includes('concert') || lowerActivity.includes('music festival')) return '🎪';
    
    // Nature & Outdoors
    if (lowerActivity.includes('gardening') || lowerActivity.includes('garden')) return '🌱';
    if (lowerActivity.includes('bird') || lowerActivity.includes('wildlife')) return '🦅';
    if (lowerActivity.includes('stargazing') || lowerActivity.includes('astronomy')) return '⭐';
    if (lowerActivity.includes('nature') || lowerActivity.includes('outdoor')) return '🌲';
    if (lowerActivity.includes('walk') || lowerActivity.includes('hike')) return '🚶';
    
    // Social & Community
    if (lowerActivity.includes('volunteer') || lowerActivity.includes('charity')) return '🤝';
    if (lowerActivity.includes('social') || lowerActivity.includes('friend')) return '👥';
    if (lowerActivity.includes('party') || lowerActivity.includes('celebration')) return '🎉';
    
    // Technology & Digital
    if (lowerActivity.includes('coding') || lowerActivity.includes('programming') || lowerActivity.includes('development')) return '💻';
    if (lowerActivity.includes('3d printing') || lowerActivity.includes('maker')) return '🖨️';
    if (lowerActivity.includes('drone')) return '🚁';
    if (lowerActivity.includes('video') || lowerActivity.includes('film making')) return '📹';
    
    // Collecting & Hobbies
    if (lowerActivity.includes('collecting') || lowerActivity.includes('collection')) return '📦';
    if (lowerActivity.includes('stamp') || lowerActivity.includes('coin')) return '🪙';
    
    // Pets & Animals
    if (lowerActivity.includes('pet') || lowerActivity.includes('dog') || lowerActivity.includes('cat')) return '🐾';
    if (lowerActivity.includes('horse') || lowerActivity.includes('equestrian')) return '🐴';
    
    // Wellness & Self-Care
    if (lowerActivity.includes('spa') || lowerActivity.includes('massage') || lowerActivity.includes('wellness')) return '🧖';
    if (lowerActivity.includes('meditation') || lowerActivity.includes('mindfulness')) return '🧘';
    
    // Default icons based on common words
    if (lowerActivity.includes('class') || lowerActivity.includes('workshop')) return '📝';
    if (lowerActivity.includes('club') || lowerActivity.includes('group')) return '👥';
    if (lowerActivity.includes('festival') || lowerActivity.includes('event')) return '🎊';
    
    // Fallback to a generic activity icon
    return '🎯';
}

// Get activity image URL (using Unsplash API)
function getActivityImage(activity) {
    // Use Unsplash Source API for dynamic images based on activity name
    const searchTerm = encodeURIComponent(activity);
    return `https://source.unsplash.com/200x200/?${searchTerm},activity`;
}

// List of leisure activities (mutable to allow adding new ones)
let activities = [
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
    'Sculpting',
    'Volleyball',
    'Baseball',
    'Softball',
    'Football',
    'Rugby',
    'Hockey',
    'Ice skating',
    'Roller skating',
    'Inline skating',
    'Skateboarding',
    'Longboarding',
    'Parkour',
    'CrossFit',
    'Pilates',
    'Zumba',
    'Aerobics',
    'Dance fitness',
    'Barre',
    'Spinning',
    'Rowing',
    'Kayaking',
    'Canoeing',
    'Paddleboarding',
    'Water skiing',
    'Wakeboarding',
    'Scuba diving',
    'Snorkeling',
    'Free diving',
    'Kitesurfing',
    'Windsurfing',
    'Mountain biking',
    'BMX',
    'Unicycling',
    'Triathlon training',
    'Marathon training',
    'Trail running',
    'Ultra running',
    'Orienteering',
    'Geocaching',
    'Archery',
    'Fencing',
    'Boxing',
    'Wrestling',
    'Jiu-jitsu',
    'Karate',
    'Taekwondo',
    'Kung fu',
    'Aikido',
    'Capoeira',
    'Muay Thai',
    'Kickboxing',
    'Cross-country skiing',
    'Snowshoeing',
    'Ice climbing',
    'Mountaineering',
    'Bouldering',
    'Caving',
    'Paragliding',
    'Hang gliding',
    'Skydiving',
    'Bungee jumping',
    'Zip-lining',
    'Digital art',
    'Graphic design',
    'Illustration',
    'Calligraphy',
    'Hand lettering',
    'Typography',
    'Printmaking',
    'Etching',
    'Lithography',
    'Screen printing',
    'Origami',
    'Paper crafting',
    'Scrapbooking',
    'Card making',
    'Jewelry making',
    'Beading',
    'Wire wrapping',
    'Metalworking',
    'Blacksmithing',
    'Glassblowing',
    'Stained glass',
    'Mosaic art',
    'Collage',
    'Mixed media',
    'Fiber arts',
    'Weaving',
    'Spinning yarn',
    'Embroidery',
    'Cross-stitch',
    'Needlepoint',
    'Quilting',
    'Sewing',
    'Fashion design',
    'Costume making',
    'Cosplay',
    'Makeup artistry',
    'Hair styling',
    'Nail art',
    'Tattoo design',
    'Graffiti art',
    'Street art',
    'Mural painting',
    'Body painting',
    'Face painting',
    'Henna art',
    'Soap making',
    'Candle making',
    'Perfume making',
    'Bath bomb making',
    'Potpourri making',
    'Singing',
    'Choir',
    'A cappella',
    'Beatboxing',
    'Rapping',
    'DJing',
    'Music production',
    'Sound engineering',
    'Audio mixing',
    'Composing',
    'Songwriting',
    'Music theory',
    'Conducting',
    'Orchestra',
    'Band practice',
    'Jamming sessions',
    'Open mic nights',
    'Poetry slams',
    'Spoken word',
    'Theater acting',
    'Improv comedy',
    'Magic tricks',
    'Juggling',
    'Circus arts',
    'Mime',
    'Puppetry',
    'Ventriloquism',
    'Storytelling',
    'Narrating',
    'Voice acting',
    'Audiobook narration',
    'Baking',
    'Pastry making',
    'Cake decorating',
    'Chocolate making',
    'Candy making',
    'Ice cream making',
    'Fermenting',
    'Pickling',
    'Canning',
    'Preserving',
    'Homebrewing',
    'Cocktail making',
    'Mixology',
    'Tea tasting',
    'Coffee roasting',
    'Cheese making',
    'Sausage making',
    'BBQ',
    'Grilling',
    'Smoking meats',
    'Food photography',
    'Food blogging',
    'Recipe development',
    'Meal prep',
    'Farmers market visits',
    'Food tours',
    'Culinary travel',
    'Food festivals',
    'Online learning',
    'Coursera courses',
    'Udemy courses',
    'Khan Academy',
    'TED Talks',
    'Documentaries',
    'Educational YouTube',
    'Webinars',
    'Workshops',
    'Seminars',
    'Conferences',
    'Lectures',
    'Study groups',
    'Research',
    'Academic writing',
    'Thesis writing',
    'Dissertation',
    'Learning coding',
    'Web development',
    'App development',
    'Game development',
    'Data science',
    'Machine learning',
    'AI programming',
    'Cybersecurity',
    'Ethical hacking',
    'Blockchain',
    'Cryptocurrency',
    'Trading',
    'Investing',
    'Personal finance',
    'Economics',
    'Philosophy',
    'Psychology',
    'Neuroscience',
    'History',
    'Archaeology',
    'Anthropology',
    'Sociology',
    'Political science',
    'International relations',
    'Chess',
    'Checkers',
    'Go',
    'Backgammon',
    'Mahjong',
    'Poker',
    'Blackjack',
    'Bridge',
    'Solitaire',
    'Sudoku',
    'Crosswords',
    'Word searches',
    'Jigsaw puzzles',
    '3D puzzles',
    'Rubik\'s cube',
    'Magic: The Gathering',
    'Dungeons & Dragons',
    'Tabletop RPGs',
    'War games',
    'Strategy games',
    'Party games',
    'Trivia games',
    'Video game streaming',
    'Speedrunning',
    'Game modding',
    'Game design',
    'Virtual reality',
    'Augmented reality',
    'E-sports',
    'Gaming tournaments',
    'Forest bathing',
    'Nature walks',
    'Wildlife watching',
    'Animal photography',
    'Butterfly watching',
    'Insect collecting',
    'Rock collecting',
    'Fossil hunting',
    'Shell collecting',
    'Beachcombing',
    'Tide pooling',
    'Whale watching',
    'Dolphin watching',
    'Seal watching',
    'Penguin watching',
    'Safari',
    'Wildlife photography',
    'Landscape photography',
    'Astrophotography',
    'Sunrise watching',
    'Sunset watching',
    'Meteor shower watching',
    'Aurora watching',
    'Storm chasing',
    'Weather watching',
    'Cloud watching',
    'Tree identification',
    'Plant identification',
    'Foraging',
    'Mushroom hunting',
    'Herb gardening',
    'Vegetable gardening',
    'Flower gardening',
    'Bonsai',
    'Terrarium making',
    'Aquascaping',
    'Composting',
    'Beekeeping',
    'Chicken keeping',
    'Urban farming',
    'Hydroponics',
    'Aquaponics',
    'Road trips',
    'Backpacking',
    'City breaks',
    'Beach vacations',
    'Mountain retreats',
    'Desert exploration',
    'Tropical destinations',
    'Cultural immersion',
    'Historical tours',
    'Architecture tours',
    'Food tours',
    'Wine tours',
    'Brewery tours',
    'Distillery tours',
    'Factory tours',
    'Behind-the-scenes tours',
    'Ghost tours',
    'Photography tours',
    'Adventure tours',
    'Safari tours',
    'Cruise travel',
    'Train travel',
    'Bike touring',
    'Motorcycle touring',
    'RV travel',
    'Van life',
    'Camping trips',
    'Glamping',
    'Hostel stays',
    'Airbnb experiences',
    'Couchsurfing',
    'House sitting',
    'Meetup groups',
    'Networking events',
    'Speed dating',
    'Dating apps',
    'Friend dates',
    'Double dates',
    'Group activities',
    'Team building',
    'Community service',
    'Charity work',
    'Fundraising',
    'Donating',
    'Mentoring',
    'Tutoring',
    'Teaching',
    'Coaching',
    'Workshop leading',
    'Event organizing',
    'Party planning',
    'Wedding planning',
    'Baby shower planning',
    'Birthday party planning',
    'Holiday planning',
    'Spa days',
    'Massage therapy',
    'Aromatherapy',
    'Reflexology',
    'Acupuncture',
    'Chiropractic',
    'Physical therapy',
    'Reiki',
    'Crystal healing',
    'Energy healing',
    'Sound healing',
    'Breathwork',
    'Pranayama',
    'Tai chi',
    'Qigong',
    'Stretching',
    'Foam rolling',
    'Sauna',
    'Steam room',
    'Hot tub',
    'Cold therapy',
    'Ice baths',
    'Cryotherapy',
    'Float therapy',
    'Sensory deprivation',
    'Sensory experiences',
    'Mindfulness',
    'Gratitude journaling',
    'Affirmations',
    'Vision boards',
    'Goal setting',
    'Life planning',
    'Career planning',
    'Financial planning',
    '3D printing',
    'Laser cutting',
    'CNC machining',
    'Electronics',
    'Arduino projects',
    'Raspberry Pi',
    'Robotics',
    'Drone flying',
    'Drone photography',
    'Aerial videography',
    'Videography',
    'Video editing',
    'Film making',
    'Short films',
    'Documentary making',
    'Vlogging',
    'Streaming',
    'Content creation',
    'Social media',
    'Instagram',
    'TikTok',
    'YouTube',
    'Twitch',
    'Podcast hosting',
    'Web design',
    'UI/UX design',
    'Product design',
    'Industrial design',
    'Interior design',
    'Architecture',
    'Landscape architecture',
    'Urban planning',
    'Stamp collecting',
    'Coin collecting',
    'Currency collecting',
    'Comic book collecting',
    'Trading cards',
    'Action figures',
    'Model kits',
    'Die-cast cars',
    'Hot wheels',
    'Lego building',
    'Model trains',
    'Model airplanes',
    'RC cars',
    'RC planes',
    'RC boats',
    'RC helicopters',
    'RC drones',
    'Toy collecting',
    'Vintage collecting',
    'Antique collecting',
    'Art collecting',
    'Wine collecting',
    'Whiskey collecting',
    'Beer collecting',
    'Record collecting',
    'CD collecting',
    'Vinyl collecting',
    'Book collecting',
    'First editions',
    'Rare books',
    'Home improvement',
    'Renovation',
    'Interior decorating',
    'Feng shui',
    'Minimalism',
    'Decluttering',
    'Organizing',
    'Home staging',
    'Furniture building',
    'Cabinet making',
    'Carpentry',
    'Plumbing',
    'Electrical work',
    'HVAC',
    'Landscaping',
    'Hardscaping',
    'Outdoor living',
    'Patio design',
    'Deck building',
    'Fence building',
    'Greenhouse building',
    'Shed building',
    'Treehouse building',
    'Chicken coop building',
    'Garden design',
    'Irrigation systems',
    'Dog training',
    'Dog agility',
    'Dog shows',
    'Cat shows',
    'Pet grooming',
    'Pet photography',
    'Pet sitting',
    'Pet walking',
    'Horseback riding',
    'Horse care',
    'Equestrian sports',
    'Dressage',
    'Show jumping',
    'Rodeo',
    'Livestock showing',
    'Animal rescue',
    'Wildlife rehabilitation',
    'Animal fostering',
    'Pet adoption',
    'Aquarium keeping',
    'Fish breeding',
    'Reptile keeping',
    'Bird keeping',
    'Swimming laps',
    'Water aerobics',
    'Synchronized swimming',
    'Water polo',
    'Diving',
    'High diving',
    'Cliff diving',
    'Freediving',
    'Spearfishing',
    'Underwater photography',
    'Underwater videography',
    'Marine biology',
    'Coral reef exploration',
    'Boat tours',
    'Yacht charters',
    'Fishing charters',
    'Whale watching tours',
    'Dolphin tours',
    'Snorkeling tours',
    'Diving tours',
    'Sailing lessons',
    'Ice fishing',
    'Figure skating',
    'Ice hockey',
    'Curling',
    'Bobsledding',
    'Luge',
    'Skeleton',
    'Biathlon',
    'Snowmobiling',
    'Dog sledding',
    'Snow tubing',
    'Tobogganing',
    'Ice sculpting',
    'Snow sculpting',
    'Snowman building',
    'Ice castle building',
    'Northern lights viewing',
    'Parasailing',
    'Wingsuit flying',
    'Base jumping',
    'Mountain climbing',
    'Via ferrata',
    'Canyoning',
    'Whitewater rafting',
    'Whitewater kayaking',
    'Canoeing rapids',
    'Surfing big waves',
    'Kiteboarding',
    'Jet skiing',
    'Motocross',
    'Rally racing',
    'Off-roading',
    'Mud bogging',
    'Paintball',
    'Airsoft',
    'Laser tag',
    'Obstacle courses',
    'Tough Mudder',
    'Spartan Race',
    'Marathon',
    'Ultra marathon',
    'Ironman',
    'Triathlon',
    'Adventure racing',
    'Memory training',
    'Brain training',
    'Puzzle solving',
    'Logic puzzles',
    'Riddles',
    'Brain teasers',
    'Escape room puzzles',
    'Mystery solving',
    'True crime',
    'Cold cases',
    'Investigation',
    'Forensics',
    'Psychology experiments',
    'Personality tests',
    'IQ tests',
    'Cognitive training',
    'Speed reading',
    'Mental math',
    'Calculus',
    'Statistics',
    'Probability',
    'Game theory',
    'Opera',
    'Ballet',
    'Symphony',
    'Jazz concerts',
    'Blues concerts',
    'Folk music',
    'World music',
    'Classical music',
    'Electronic music',
    'Festivals',
    'Music festivals',
    'Art festivals',
    'Film festivals',
    'Comedy festivals',
    'Beer festivals',
    'Wine festivals',
    'Cultural festivals',
    'Religious festivals',
    'Holiday celebrations',
    'Parades',
    'Carnivals',
    'Fairs',
    'Markets',
    'Bazaars',
    'Fiction reading',
    'Non-fiction reading',
    'Biographies',
    'Autobiographies',
    'Memoirs',
    'Historical fiction',
    'Science fiction',
    'Fantasy',
    'Mystery novels',
    'Thrillers',
    'Horror',
    'Romance',
    'Poetry',
    'Short stories',
    'Essays',
    'Philosophy books',
    'Self-help books',
    'Business books',
    'Science books',
    'History books',
    'Travel books',
    'Cookbooks',
    'Magazines',
    'Newspapers',
    'Comics',
    'Graphic novels',
    'Manga',
    'Web novels',
    'Fan fiction',
    'Literary criticism',
    'Creative writing',
    'Fiction writing',
    'Poetry writing',
    'Screenwriting',
    'Playwriting',
    'Journalism',
    'Copywriting',
    'Technical writing',
    'Grant writing',
    'Resume writing',
    'Cover letter writing',
    'Email writing',
    'Letter writing',
    'Postcard writing',
    'Diary keeping',
    'Journaling',
    'Bullet journaling',
    'Genealogy',
    'Family history',
    'Ancestry research',
    'Oral history',
    'Astronomy',
    'Telescope viewing',
    'Planetarium visits',
    'Observatory visits',
    'Meteorite hunting',
    'Space exploration',
    'Physics experiments',
    'Chemistry experiments',
    'Biology experiments',
    'Microscopy',
    'Telescopy',
    'Geology',
    'Mineralogy',
    'Paleontology',
    'Botany',
    'Zoology',
    'Marine biology',
    'Ecology',
    'Environmental science',
    'Climate science',
    'Weather science',
    'Meteorology',
    'Oceanography',
    'Leatherworking',
    'Bookbinding',
    'Paper making',
    'Ink making',
    'Dye making',
    'Natural dyes',
    'Fabric printing',
    'Batik',
    'Tie-dye',
    'Bleach art',
    'Resin art',
    'Epoxy art',
    'Resin casting',
    'Concrete art',
    'Cement art',
    'Plaster casting',
    'Ceramics',
    'Raku firing',
    'Kiln work',
    'Glazing',
    'Pottery wheel',
    'Hand building',
    'Coil building',
    'Slab building',
    'People watching',
    'Window shopping',
    'Thrift shopping',
    'Vintage shopping',
    'Antique shopping',
    'Estate sales',
    'Garage sales',
    'Flea markets',
    'Auctions',
    'Online auctions',
    'Bidding',
    'Negotiating',
    'Bargaining',
    'Haggling',
    'Deal hunting',
    'Couponing',
    'Extreme couponing',
    'Price matching',
    'Comparison shopping'
];

// State management
let activityState = {};

// Initialize state from localStorage or create new
function initState() {
    const saved = localStorage.getItem('activityState');
    if (saved) {
        activityState = JSON.parse(saved);
        // Migrate old starred property to enjoymentLevel if needed
        Object.keys(activityState).forEach(activity => {
            if (activityState[activity].starred && !activityState[activity].enjoymentLevel) {
                activityState[activity].enjoymentLevel = 2; // Default starred to level 2
            }
            // Remove old starred property
            if (activityState[activity].hasOwnProperty('starred')) {
                delete activityState[activity].starred;
            }
        });
    } else {
        activities.forEach(activity => {
            activityState[activity] = {
                checked: false,
                enjoymentLevel: null
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
    
    activities.forEach((activity, index) => {
        const state = activityState[activity] || { checked: false, enjoymentLevel: null };
        const item = document.createElement('li');
        item.className = 'activity-item';
        
        // Add staggered animation delay
        item.style.animationDelay = `${index * 0.03}s`;
        
        if (state.checked) {
            item.classList.add('checked');
        }
        if (state.enjoymentLevel) {
            item.classList.add(`level-${state.enjoymentLevel}`);
        }
        
        const level1Class = state.enjoymentLevel === 1 ? 'active' : '';
        const level2Class = state.enjoymentLevel === 2 ? 'active' : '';
        const level3Class = state.enjoymentLevel === 3 ? 'active' : '';
        
        const icon = getActivityIcon(activity);
        const imageUrl = getActivityImage(activity);
        
        item.innerHTML = `
            <div class="activity-image-wrapper">
                <span class="activity-icon">${icon}</span>
                <img src="${imageUrl}" alt="${activity}" class="activity-image" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                <span class="activity-icon-fallback" style="display: none;">${icon}</span>
            </div>
            <input type="checkbox" class="checkbox" ${state.checked ? 'checked' : ''} data-activity="${activity}">
            <span class="activity-text">${activity}</span>
            <div class="enjoyment-levels">
                <button class="level-btn level-1-btn ${level1Class}" data-activity="${activity}" data-level="1" title="1 - Unlikely to enjoy">1</button>
                <button class="level-btn level-2-btn ${level2Class}" data-activity="${activity}" data-level="2" title="2 - Possible to enjoy">2</button>
                <button class="level-btn level-3-btn ${level3Class}" data-activity="${activity}" data-level="3" title="3 - Probable enjoyment">3</button>
            </div>
        `;
        
        list.appendChild(item);
    });
    
    // Add event listeners
    document.querySelectorAll('.checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', handleCheck);
    });
    
    document.querySelectorAll('.level-btn').forEach(btn => {
        btn.addEventListener('click', handleEnjoymentLevel);
    });
}

// Handle checkbox change
function handleCheck(e) {
    const activity = e.target.dataset.activity;
    if (!activityState[activity]) {
        activityState[activity] = { checked: false, enjoymentLevel: null };
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

// Handle enjoyment level click
function handleEnjoymentLevel(e) {
    e.preventDefault();
    e.stopPropagation();
    const activity = e.target.dataset.activity;
    const level = parseInt(e.target.dataset.level);
    
    if (!activityState[activity]) {
        activityState[activity] = { checked: false, enjoymentLevel: null };
    }
    
    // Toggle: if clicking the same level, remove it
    if (activityState[activity].enjoymentLevel === level) {
        activityState[activity].enjoymentLevel = null;
    } else {
        activityState[activity].enjoymentLevel = level;
    }
    
    // Update UI
    const item = e.target.closest('.activity-item');
    const allLevelBtns = item.querySelectorAll('.level-btn');
    
    // Remove all level classes and active states
    item.classList.remove('level-1', 'level-2', 'level-3', 'starred');
    allLevelBtns.forEach(btn => btn.classList.remove('active'));
    
    // Add appropriate classes
    if (activityState[activity].enjoymentLevel) {
        item.classList.add(`level-${activityState[activity].enjoymentLevel}`);
        const activeBtn = item.querySelector(`.level-${activityState[activity].enjoymentLevel}-btn`);
        if (activeBtn) {
            activeBtn.classList.add('active');
        }
    }
    
    saveState();
}

// Update statistics with animation
function updateStats() {
    const total = activities.length;
    const level3 = Object.values(activityState).filter(s => s.enjoymentLevel === 3).length;
    const level2 = Object.values(activityState).filter(s => s.enjoymentLevel === 2).length;
    const level1 = Object.values(activityState).filter(s => s.enjoymentLevel === 1).length;
    const checked = Object.values(activityState).filter(s => s.checked).length;
    
    animateValue('total-count', parseInt(document.getElementById('total-count').textContent) || 0, total);
    animateValue('level3-count', parseInt(document.getElementById('level3-count').textContent) || 0, level3);
    animateValue('level2-count', parseInt(document.getElementById('level2-count').textContent) || 0, level2);
    animateValue('level1-count', parseInt(document.getElementById('level1-count').textContent) || 0, level1);
    animateValue('checked-count', parseInt(document.getElementById('checked-count').textContent) || 0, checked);
}

// Animate number counting
function animateValue(id, start, end) {
    const element = document.getElementById(id);
    const duration = 500;
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.floor(start + (end - start) * progress);
        element.textContent = current;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = end;
        }
    }
    
    requestAnimationFrame(update);
}

// Filter functionality
let currentFilter = 'all';

function updateFilter() {
    document.querySelectorAll('.activity-item').forEach(item => {
        const activity = item.querySelector('.activity-text').textContent;
        const state = activityState[activity] || { checked: false, enjoymentLevel: null };
        
        item.classList.remove('hidden');
        
        switch (currentFilter) {
            case 'level3':
                // Show only level 3 activities
                if (state.enjoymentLevel !== 3) {
                    item.classList.add('hidden');
                }
                break;
            case 'level2':
                // Show only level 2 activities
                if (state.enjoymentLevel !== 2) {
                    item.classList.add('hidden');
                }
                break;
            case 'level1':
                // Show only level 1 activities
                if (state.enjoymentLevel !== 1) {
                    item.classList.add('hidden');
                }
                break;
            case 'checked':
                // Show only checked off activities
                if (!state.checked) {
                    item.classList.add('hidden');
                }
                break;
            case 'unrated':
                // Show activities with no enjoyment level and not checked
                if (state.enjoymentLevel !== null || state.checked) {
                    item.classList.add('hidden');
                }
                break;
            case 'all':
            default:
                // Show all activities
                break;
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

// Handle form submission
function handleFormSubmit(e) {
    e.preventDefault();
    const input = document.getElementById('activity-input');
    const messageDiv = document.getElementById('form-message');
    const activityName = input.value.trim();
    
    // Validation
    if (!activityName) {
        showFormMessage('Please enter an activity name', 'error');
        return;
    }
    
    if (activityName.length < 2) {
        showFormMessage('Activity name must be at least 2 characters', 'error');
        return;
    }
    
    if (activityName.length > 100) {
        showFormMessage('Activity name must be less than 100 characters', 'error');
        return;
    }
    
    // Check if activity already exists
    if (activities.includes(activityName)) {
        showFormMessage('This activity already exists in the list', 'error');
        input.focus();
        return;
    }
    
    // Add activity
    activities.push(activityName);
    activityState[activityName] = {
        checked: false,
        enjoymentLevel: null
    };
    
    // Save to localStorage
    localStorage.setItem('activities', JSON.stringify(activities));
    saveState();
    
    // Clear input and show success message
    input.value = '';
    showFormMessage(`"${activityName}" added successfully! ✨`, 'success');
    
    // Re-render activities
    renderActivities();
    updateStats();
    
    // Scroll to the new activity
    setTimeout(() => {
        const newItem = Array.from(document.querySelectorAll('.activity-item')).find(item => 
            item.querySelector('.activity-text').textContent === activityName
        );
        if (newItem) {
            newItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
            newItem.style.animation = 'highlight 1s ease-out';
        }
    }, 100);
}

// Show form message
function showFormMessage(message, type) {
    const messageDiv = document.getElementById('form-message');
    messageDiv.textContent = message;
    messageDiv.className = `form-message ${type}`;
    
    // Auto-hide after 3 seconds
    setTimeout(() => {
        messageDiv.textContent = '';
        messageDiv.className = 'form-message';
    }, 3000);
}

// Load activities from localStorage on init
function loadActivities() {
    const saved = localStorage.getItem('activities');
    if (saved) {
        try {
            const savedActivities = JSON.parse(saved);
            // Merge with existing activities, avoiding duplicates
            savedActivities.forEach(activity => {
                if (!activities.includes(activity)) {
                    activities.push(activity);
                }
            });
        } catch (e) {
            console.error('Error loading activities:', e);
        }
    }
}

// Initialize
loadActivities();
initState();
renderActivities();
updateStats();

// Add form event listener
document.getElementById('add-activity-form').addEventListener('submit', handleFormSubmit);

