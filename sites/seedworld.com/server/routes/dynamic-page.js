const { withDynamicPage } = require('@parameter1/base-cms-marko-web/middleware');
const queryFragment = require('@seed-world-group/package-theme-monorail/graphql/fragments/dynamic-page');
const page = require('@seed-world-group/package-global/templates/dynamic-page');

module.exports = (app) => {
  app.get('/page/:alias(*)', withDynamicPage({
    template: page,
    queryFragment,
  }));
};
