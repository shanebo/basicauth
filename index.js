const auth = require('basic-auth');

module.exports = ({ user, password }) => {
  return (req, res, next) => {
    const cred = auth(req);
    if (!cred || cred.name !== user || cred.pass !== password) {
      res.status(401).set('WWW-Authenticate', 'Basic realm="example"').end('Access denied');
    } else {
      next();
    }
  }
}
