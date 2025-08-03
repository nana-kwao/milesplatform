const bcrypt = require("bcrypt");

const verifyhashpassword = (password, hashed) => {
  const feedback = bcrypt.compareSync(password, hashed);
  return feedback;
};

module.exports = verifyhashpassword;
