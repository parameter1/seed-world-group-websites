const baseConfig = {
  action: 'https://seedworld.dragonforms.com/loading.do',
  hiddenInputs: [
    { name: 'omedasite', value: 'ab_pref' },
  ],
};

const defaults = {
  name: 'NOT_SET',
  description: 'NOT_SET',
  defaultNewsletter: {
    deploymentTypeId: 0,
    name: 'NOT_SET',
    eventCategory: 'NOT_SET',
  },
  newsletters: [
    {
      deploymentTypeId: 0,
      name: 'NOT_SET',
      description: 'NOT_SET',
      eventCategory: 'NOT_SET',
    },
  ],
  demographic: {
    id: 0,
    label: 'Your primary role?',
    values: [
      { id: 0, label: 'NOT_SET' },
    ],
  },
};

module.exports = {
  // uses inline omeda form
  signupBanner: {
    ...defaults,
    imagePath: 'static/newsletter-pushdown/ab-full.png',
    disabled: true,
  },
  pushdown: {
    ...defaults,
    imagePath: 'static/newsletter-pushdown/ab-half.png',
    description: 'NOT_SET',
    disabled: true,
  },

  // links off to seperate omeda dragonform
  signupBannerLarge: {
    ...baseConfig,
    name: 'Sign Up for Seed World Today!',
    description: 'Get industry news, insights, and new product information delivered straight to your inbox.',
    disabled: true,
  },
  signupFooter: {
    ...baseConfig,
    name: 'Sign Up for Seed World Today!',
    description: 'Get industry news, insights, and new product information delivered straight to your inbox.',
    disabled: true,
  },
};
