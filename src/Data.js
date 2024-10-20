const characters = [
  'Happy Girl',
  'Animal Lover',
  'Gardener',
  'Happy Boy',
  'Book Lover',
  'Witch',
  'Astronaut',
  'Butterfly Enthusiast',
  'Short Haired Person',
  'Long Haired Person',
  'Bug Catcher',
  'Baker',
  'Fairy',
  'Cute Fox',
  'Naughty Cat',
  'Artist',
  'Sleepy Dog',
  'Florist',
  'Tea Lover',
  'Traveller',
  'Calm Cow',
  'Stargazer',
  'Scientist',
  'Lucky Person',
  'Bunny',
  'Garden Gnome',
  'Explorer',
  'Glamour Girl',
  'Jolly Lady',
  'Sporty Person',
  'Food Lover',
  'Loyal Dog',
  'Comfy Kitty',
  'Photographer',
  'Laughing Wizard',
  'Strong Person',
  'Beachy Girl',
  'King/Queen',
  'Person in Love',
  'Cosy Person',
  'Curly Haired Person',
  'Nature Lover',
  'Polka Dot Lover',
  'Girl in Gingham',
  'Boy in Gingham',
  'Budgie',
  'Knitting Enthusiast',
  'Elderly Person',
  'Writer',
  'Coffee Lover',
];

const environments = [
  'Flower Garden',
  'Celestial',
  'Beachy',
  'Sunny Day',
  'Forest',
  'Beautiful Sky',
  'Fairytale',
  'Cosy & Warm',
  'Outer Space',
  'Woodland',
  'Winter',
  'Snowy Garden',
  'Farmyard',
  'Butterfly Garden',
  'Under the Sea',
  'Sunflower Field',
  'Cosy Cottage',
  'Spring',
  'Village',
  'Mountain Top',
  'Hot & Dry',
  'Foggy/Cloudy',
  'Jungle',
  'Bakery',
  'Sunrise',
  'Library',
  'Campfire',
  'Comfy Chair',
  'Rainy Day',
  'Museum',
  'Tall Grass',
  'Autumn',
  'Cute Hut',
  'Lavender Field',
  'Greenhouse',
  'Windy',
  'Summer',
  'Busy Shop',
  'Calm Room',
  'Sunny Window',
  'Snowy Window',
  'Dark',
  'Floral',
  'Candlelight',
  'Isolated',
  'Wilderness',
  'Comfy',
  'The Great Outdoors',
  'Cafe',
  'Zoo',
];

const accessories = [
  'Straw Hat',
  'Round Glasses',
  'Dangly Earrings',
  'Patterned Shirt',
  'Sunflower',
  'Fancy Bracelet',
  'Flower Crown',
  'Art Supplies',
  'Camera',
  'Tea Cup',
  'Map',
  'Picnic Basket',
  'Binoculars',
  'Hairclips',
  'Backpack',
  'Sunglasses',
  'Stripey Shirt',
  'Necklace',
  'Colourful Earrings',
  'Telescope',
  'Apron',
  'Strawberries',
  'Crown',
  'Biscuits',
  'Sweets',
  'Balloon',
  'Cute Hat',
  'Blanket',
  'Cup of Coffee',
  'Teapot',
  'Candle',
  'Bow',
  'Bouquet',
  'Envelope',
  'Plant',
  'Watch',
  'Mushroom',
  'Gloves',
  'Seashells',
  'Cake',
  'Love Hearts',
  'Raincoat',
  'Tattoo',
  'Bucket Hat',
  'Rings',
  'Starry Jewellery',
  'Bum Bag',
  'Bubblegum',
  'Sparklers',
  'Book',
];

const friends = [
  'Ladybug',
  'Snail',
  'Bumblebee',
  'Duck',
  'Beetle',
  'Butterfly',
  'Firefly',
  'Bird',
  'Angry Cat',
  'Little Dog',
  'Dragonfly',
  'Hedgehog',
  'Caterpillar',
  'Hamster',
  'Bunny',
  'Squirrel',
  'Goose',
  'Worm',
  'Puppy',
  'Spider',
  'Grasshopper',
  'Frog',
  'Owl',
  'Mouse',
  'Teddy',
  'Friendly Flower',
  'Moth',
  'Piglet',
  'Chicken',
  'Budgie',
  'Seagull',
  'Fairy',
  'Fox',
  'Turtle',
  'Kitten',
  'Goat',
  'Lamb',
  'Wombat',
  'Sloth',
  'Swan',
  'Happy Cat',
  'Sleeping Hedgehog',
  'Gecko',
  'Pigeon',
  'Blackbird',
  'Robin Bird',
  'Fluffy Dog',
  'Bug',
  'Serious Cat',
  'Silly Dog',
];

// saving hard-coded category prompts in localStorage

// Characters
const CHARACTERS_KEY = 'characters';

function initCharacters() {
  // if data already exists do not add data
  if (localStorage.getItem(CHARACTERS_KEY) !== null) return;

  // storing the character prompts in localStorage
  localStorage.setItem(CHARACTERS_KEY, JSON.stringify(characters));
}

// Environments
const ENVIRONMENTS_KEY = 'environments';

function initEnvironments() {
  if (localStorage.getItem(ENVIRONMENTS_KEY) !== null) return;

  localStorage.setItem(ENVIRONMENTS_KEY, JSON.stringify(environments));
}

// Accessories
const ACCESSORIES_KEY = 'accessories';

function initAccessories() {
  if (localStorage.getItem(ACCESSORIES_KEY) !== null) return;

  localStorage.setItem(ACCESSORIES_KEY, JSON.stringify(accessories));
}

// Friends
const FRIENDS_KEY = 'friends';

function initFriends() {
  if (localStorage.getItem(FRIENDS_KEY) !== null) return;

  localStorage.setItem(FRIENDS_KEY, JSON.stringify(friends));
}

// saved prompts
const SAVEDPROMPTS_KEY = 'savedprompts';
const savedPrompts = [];

function initSavedPrompts() {
  if (localStorage.getItem(SAVEDPROMPTS_KEY) !== null) return;

  localStorage.setItem(SAVEDPROMPTS_KEY, JSON.stringify(savedPrompts));
}

export {
  characters,
  environments,
  accessories,
  friends,
  CHARACTERS_KEY,
  ENVIRONMENTS_KEY,
  ACCESSORIES_KEY,
  FRIENDS_KEY,
  SAVEDPROMPTS_KEY,
  savedPrompts,
  initCharacters,
  initEnvironments,
  initAccessories,
  initFriends,
  initSavedPrompts,
};
