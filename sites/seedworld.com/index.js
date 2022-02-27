const startServer = require('@seed-world-group/package-global/start-server');

const routes = require('./server/routes');
const siteConfig = require('./config/site');
const coreConfig = require('./config/core');

const { log } = console;

module.exports = startServer({
  rootDir: __dirname,
  coreConfig,
  siteConfig,
  routes,
}).then(() => log('Website started!')).catch(e => setImmediate(() => { throw e; }));
