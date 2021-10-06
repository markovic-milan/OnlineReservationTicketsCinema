const crypto = require("crypto");

module.exports = {
  secret: crypto.randomBytes(30).toString('hex')
};