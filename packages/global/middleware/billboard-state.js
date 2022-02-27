const { get } = require('@parameter1/base-cms-object-path');

const cookieName = 'billboardAd';

module.exports = () => (req, res, next) => {
  const hasCookie = Boolean(get(req, `cookies.${cookieName}`));
  const cookieValue = get(req, `cookies.${cookieName}`);

  res.locals.billboardState = { hasCookie, cookieValue, cookieName };
  next();
};
