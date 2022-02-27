const directory = require('@seed-world-group/package-global/routes/directory');
const home = require('./home');
const content = require('./content');
const dynamicPages = require('./dynamic-page');
const websiteSections = require('./website-section');

module.exports = (app) => {
  // Homepage
  home(app);

  // Dynamic Pages
  dynamicPages(app);

  // Content Pages
  content(app);

  // Directory
  directory(app);

  // Website Sections
  websiteSections(app);
};
