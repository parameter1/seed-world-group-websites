const navigation = require('./navigation');
const gam = require('./gam');
const nativeX = require('./native-x');
const identityX = require('./identity-x');
const newsletter = require('./newsletter');
const search = require('./search');
const subscribe = require('./subscribe');

module.exports = {
  navigation,
  gam,
  nativeX,
  identityX,
  newsletter,
  search,
  company: 'Seed World Group',
  publicationIds: [
    'NOT_SET',
  ],
  subscribe,
  p1events: {
    tenant: 'seedworldgroup',
    enabled: true,
    cookieDomain: process.env.NODE_ENV === 'production' ? 'seedworld.com' : '',
  },
  logos: {
    navbar: {
      src: 'https://p1-cms-assets.imgix.net/files/base/seedworldgroup/all/image/static/sw-logo.png?h=45&auto=format,compress',
      srcset: [
        'https://p1-cms-assets.imgix.net/files/base/seedworldgroup/all/image/static/sw-logo.png?h=45&auto=format,compress&dpr=2 2x',
      ],
    },
    footer: {
      src: 'https://p1-cms-assets.imgix.net/files/base/seedworldgroup/all/image/static/sw-logo.png?h=60&auto=format,compress',
      srcset: [
        'https://p1-cms-assets.imgix.net/files/base/seedworldgroup/all/image/static/sw-logo.png?h=60&auto=format,compress&dpr=2 2x',
      ],
    },
    corporate: {
      alt: 'Seed World Group Logo',
      href: 'https://www.seedworldgroup.com',
      src: 'https://p1-cms-assets.imgix.net/files/base/seedworldgroup/all/image/static/seed-world-group-logo.png?h=40&auto=format,compress',
      srcset: [
        'https://p1-cms-assets.imgix.net/files/base/seedworldgroup/all/image/static/seed-world-group-logo.png?h=40&auto=format,compress&dpr=2 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/SeedWorld/', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/seed-world-media/', target: '_blank' },
    { provider: 'youtube', href: 'https://www.youtube.com/c/seedworldgroup', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/seedworldmag', target: '_blank' },
  ],
  podcastLinks: [],
  gtm: {
    containerId: 'GTM-KKMNMDK',
  },
  wufoo: {
    userName: 'NOT_SET',
  },
  gcse: {
    id: '29e97f02d3b680a4b',
  },
  layout: 'default',
  inquiry: {
    enabled: true,
    directSend: false,
    sendTo: 'sales@seedworld.com',
    sendFrom: 'seedworld.com <noreply@parameter1.com>',
    logo: 'https://p1-cms-assets.imgix.net/files/base/seedworldgroup/all/image/static/sw-logo.png?h=60&auto=format,compress&bg=FFFFFF&pad=5',
    bgColor: '#FFFFFF',
  },
};
