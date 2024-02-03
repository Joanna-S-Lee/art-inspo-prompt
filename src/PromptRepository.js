const PROMPTS_KEY = 'prompts';

function initPrompts() {
  // if data already exists do not add data
  if (localStorage.getItem(PROMPTS_KEY) !== null) return;

  // Hard-coded a few prompts
  const prompts = [
    {
      character: 'Happy Girl',
      environment: 'Flower Garden',
      accessory: 'Straw Hat',
      friend: 'Ladybug',
    },
  ];

  // hard-code categories?

  // storing the above data in localStorage
  localStorage.setItem(PROMPTS_KEY, JSON.stringify(prompts));
}

export { initUsers };
