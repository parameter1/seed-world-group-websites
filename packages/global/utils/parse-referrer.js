module.exports = (req) => {
  const referrer = req.get('referrer');
  if (!referrer) return 'none';
  return `${referrer}`.includes(req.hostname) ? 'internal' : 'external';
};
