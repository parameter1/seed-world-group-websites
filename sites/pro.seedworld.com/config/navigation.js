const subscribe = require('./subscribe');

const topics = [
  { href: '/innovate', label: 'Innovate' },
  { href: '/profit', label: 'Profit' },
  { href: '/grow', label: 'Grow' },
  { href: '/audio-video', label: 'Audio & Video' },
  { href: '/peer-to-peer', label: 'Peer to Peer' },
  { href: '/concierge', label: 'Concierge' },
  { href: '/advisory-board', label: 'Advisory Board' },
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
      { href: '/innovate', label: 'Innovate' },
      { href: '/profit', label: 'Profit' },
      { href: '/grow', label: 'Grow' },
      { href: '/audio-video', label: 'Audio & Video' },
      { href: '/peer-to-peer', label: 'Peer to Peer' },
      { href: '/concierge', label: 'Concierge' },
      { href: '/advisory-board', label: 'Advisory Board' },
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
