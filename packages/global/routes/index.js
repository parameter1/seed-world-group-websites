const htmlSitemap = require('@parameter1/base-cms-marko-web-html-sitemap/routes');
const renderBlock = require('@seed-world-group/package-theme-monorail/routes/render-block');
const searchTemplate = require('../templates/search');
const digitalEdition = require('./digital-edition');
const feed = require('./feed');
const identityX = require('./identity-x');
const magazine = require('../components/magazine/routes');
const nativeX = require('./native-x');
const omedaNewsletters = require('./omeda-newsletters');
const printContent = require('./print-content');
const publicFiles = require('./public-files');
const redirects = require('./redirects');

module.exports = (app, siteConfig) => {
  // Digital Edition
  digitalEdition(app, siteConfig);

  // Feed
  feed(app);

  // IdentityX (user routing and app context)
  identityX(app);

  // Magazine Routes
  magazine(app);

  // Omeda newsletter signup
  omedaNewsletters(app);

  // NativeX (Story rendering)
  nativeX(app);

  // Shared Print Content
  printContent(app);

  // Shared Public Files (e.g. ads.txt)
  publicFiles(app);

  // Redirects
  redirects(app, siteConfig);

  // Remote component/block loader
  renderBlock(app);

  // Search routes
  // search(app, siteConfig);
  app.get('/search', (_, res) => { res.marko(searchTemplate); });

  // HTML Sitemap
  htmlSitemap(app);
};
