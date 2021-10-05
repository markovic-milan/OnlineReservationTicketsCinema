const bcrypt = require('bcrypt');
const saltRounds = 10;

hashPassword = (password) => {
  return bcrypt.hashSync(password, saltRounds);
};

validatePassword = (password, passwordHash) => {
  return bcrypt.compareSync(password, passwordHash);
};
  
module.exports = {
  hashPassword,
  validatePassword
};