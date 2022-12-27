const passwordHash = require("passport-hash");

module.exports = {
  checkPassword: (password, hash) => {
    return passwordHash.verify(password, hash);
  },
  genPassword: (password) => {
    const hashPassword = passwordHash.generate(password);
    console.log(hashPassword);
    return hashPassword;
  },
};
