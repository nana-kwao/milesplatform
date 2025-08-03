const bcrypt = require("bcrypt");

const hashpassword = async (password) => {
  const rounds = 13;
  const salt = await bcrypt.genSalt(rounds);
  const hashed = await bcrypt.hash(password, salt);
  return hashed;
};

module.exports = hashpassword;
