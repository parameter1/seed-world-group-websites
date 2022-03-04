const subscribe = require('./subscribe');

const topics = [
  { href: '/technology', label: 'Technology' },
  { href: '/business', label: 'Business' },
  { href: '/leadership', label: 'Leadership' },
  { href: '/sustainability', label: 'Sustainability' },
];

const resources = [];

const utilities = [
  { href: '/page/advertise', label: 'Advertise' },
  { href: '/page/about-us', label: 'About Us' },
  { href: '/page/contact-us', label: 'Contact Us' },
  subscribe,
];

const mobileMenu = {
  primary: [
    ...topics,
  ],
  secondary: [
    subscribe,
    { href: '/page/advertise', label: 'Advertise' },
  ],
};

const desktopMenu = {
  about: [...utilities],
  sections: [
    ...topics,
  ],
};

module.exports = {
  type: 'navbar2',
  promos: [
    {
      title: subscribe.label,
      callToAction: subscribe.label,
      link: subscribe.href,
    },
  ],
  desktopMenu,
  mobileMenu,
  topics,
  primary: {
    items: [
      { href: '/technology', label: 'Technology' },
      { href: '/business', label: 'Business' },
      { href: '/leadership', label: 'Leadership' },
      { href: '/sustainability', label: 'Sustainability' },
      { href: '/insiders', label: 'INSIDERS' },
    ],
  },
  secondary: {
    items: [],
  },
  tertiary: {
    items: [],
  },
  toggleMenu: {
    about: {
      label: 'About',
      items: utilities,
    },
    leftColumn: {
      label: 'Topics',
      items: [
        ...topics,
      ],
    },
    midColumn: {
      items: [
        ...resources,
      ],
    },
    rightColumn: {
      label: 'Awards & Honors',
      items: [],
    },
  },
  footer: {
    items: [
      { href: '/page/privacy-policy', label: 'Privacy Policy' },
      { href: '/site-map', label: 'Site Map' },
    ],
  },
};
