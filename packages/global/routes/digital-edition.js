const createError = require('http-errors');
const { getAsObject } = require('@parameter1/base-cms-object-path');
const digitalEdition = require('../templates/digital-edition');

module.exports = (app, siteConfig) => {
  app.get('/images/digitalissues/:code([a-zA-Z0-9]{4})', (req, res) => {
    const { redirects } = getAsObject(siteConfig, 'digitalEdition');
    const zmagId = redirects[req.params.code];
    if (zmagId) {
      const to = `/digital-edition/${zmagId}/`;
      res.redirect(301, to);
    }
    throw createError(404, `No digital edition found for '${req.params.code}'`);
  });

  app.get('/digital-edition/:id([a-fA-F0-9]{8})', (req, res) => {
    res.marko(digitalEdition, { id: req.params.id });
  });
};
