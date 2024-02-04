const characters = ['Happy Girl', 'Gardener', 'Book Lover'];

const environments = ['Flower Garden', 'Beachy', 'Forest'];

const accessories = ['Straw Hat', 'Dangly Earrings', 'Sunflower'];

const friends = ['Ladybug', 'Bumblebee', 'Beetle'];

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

export {
  characters,
  environments,
  accessories,
  friends,
  CHARACTERS_KEY,
  ENVIRONMENTS_KEY,
  ACCESSORIES_KEY,
  FRIENDS_KEY,
  initCharacters,
  initEnvironments,
  initAccessories,
  initFriends,
};
