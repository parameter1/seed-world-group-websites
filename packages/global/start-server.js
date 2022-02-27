const newrelic = require('newrelic');
const { startServer } = require('@parameter1/base-cms-marko-web');
const { set, get } = require('@parameter1/base-cms-object-path');
const loadInquiry = require('@parameter1/base-cms-marko-web-inquiry');
const omedaGraphQL = require('@parameter1/omeda-graphql-client-express');
const htmlSitemapPagination = require('@parameter1/base-cms-marko-web-html-sitemap/middleware/paginated');
const stripOlyticsParam = require('@parameter1/base-cms-marko-web-omeda-identity-x/middleware/strip-olytics-param');
const odentityCustomerUpsert = require('@parameter1/base-cms-marko-web-omeda/odentity/upsert-customer');

const companySearchHandler = require('./company-search');
const document = require('./components/document');
const components = require('./components');
const fragments = require('./fragments');
const sharedRoutes = require('./routes');
const paginated = require('./middleware/paginated');
const newsletterState = require('./middleware/newsletter-state');
const billboardState = require('./middleware/billboard-state');
const oembedHandler = require('./oembed-handler');
const omedaConfig = require('./config/omeda');
const redirectHandler = require('./redirect-handler');
const recaptcha = require('./config/recaptcha');

const routes = (siteRoutes, siteConfig) => (app) => {
  // Handle submissions on /__inquiry
  loadInquiry(app);
  // Shared/global routes (all sites)
  sharedRoutes(app, siteConfig);
  // Handle request on /__company-search?searchQuery=CompanyName
  companySearchHandler(app);
  // Load site routes
  siteRoutes(app);
};

module.exports = (options = {}) => {
  const { onStart } = options;
  const googleNewsInput = {
    days: 7,
    includeContentTypes: ['News'],
    excludeLabels: ['Sponsored'],
  };
  return startServer({
    ...options,
    routes: routes(options.routes, options.siteConfig),
    document: options.document || document,
    components: options.components || components,
    fragments: options.fragments || fragments,
    sitemapsHeaders: {
      'x-google-news-input': JSON.stringify(googleNewsInput),
    },
    onStart: async (app) => {
      if (typeof onStart === 'function') await onStart(app);
      app.set('trust proxy', 'loopback, linklocal, uniquelocal');

      // Use paginated middleware
      app.use(paginated());

      // Use paginated middleware
      app.use(htmlSitemapPagination());

      // Use newsletterState middleware
      app.use(newsletterState());

      // Use billboardState middleware
      app.use(billboardState());

      // Use Omeda middleware
      app.use(omedaGraphQL({
        uri: 'https://graphql.omeda.parameter1.com/',
        brandKey: omedaConfig.brandKey,
        clientKey: omedaConfig.clientKey,
        appId: omedaConfig.appId,
        inputId: omedaConfig.inputId,
      }));

      // Setup GAM.
      const gamConfig = get(options, 'siteConfig.gam');
      set(app.locals, 'GAM', gamConfig);

      // Setup NativeX.
      const nativeXConfig = get(options, 'siteConfig.nativeX');
      set(app.locals, 'nativeX', nativeXConfig);

      // Setup IdentityX.
      const identityXConfig = get(options, 'siteConfig.identityX');
      set(app.locals, 'identityX', identityXConfig);
      app.use(stripOlyticsParam());

      // Recaptcha
      set(app.locals, 'recaptcha', recaptcha);

      // Omeda customer upsert
      app.use(odentityCustomerUpsert({
        brandKey: omedaConfig.brandKey,
        onError: newrelic.noticeError.bind(newrelic),
      }));
    },
    onAsyncBlockError: e => newrelic.noticeError(e),

    redirectHandler,

    embeddedMediaHandlers: {
      oembed: oembedHandler,
    },
  });
};
