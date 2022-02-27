const configureIdentityX = require('@seed-world-group/package-global/config/identity-x');

module.exports = configureIdentityX({
  appId: '621b96b985e777eff703ba5e',
  requiredServerFields: [
    'givenName',
    'familyName',
    'organization',
    'organizationTitle',
    'countryCode',
    'regionCode',
    'postalCode',
  ],
});
