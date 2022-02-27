const { get } = require('@parameter1/base-cms-object-path');

module.exports = (app, siteConfig) => {
  app.get('/:alias(contact-us|contact-us.html)', (req, res) => {
    res.redirect(301, '/page/contact-us');
  });
  app.get('/:alias(about|about.html)', (req, res) => {
    res.redirect(301, '/page/about-us');
  });
  app.get('/:alias(feed)', (req, res) => {
    res.redirect(301, '/__rss/website-scheduled-content.xml?input=%7B"sectionAlias"%3A"home"%7D');
  });
  // Subscribe
  const subscribeUrl = get(siteConfig, 'subscribe.href');
  if (subscribeUrl) {
    app.get('/:alias(subscribe|subscribe.html)', (req, res) => {
      res.redirect(301, subscribeUrl);
    });
  }
};
