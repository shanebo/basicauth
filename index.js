const auth = require('basic-auth');

module.exports = (opts = {}) => {
  const { user, password } = opts;
  return (req, res, next) => {
    const creds = auth(req);
    if (!creds || creds.name !== user || creds.pass !== password) {
      res.status(401).set('WWW-Authenticate', 'Basic realm="example"').end('Access denied');
    } else {
      next();
    }
  }
}
