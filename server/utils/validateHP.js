const bcrypt = require("bcrypt");

const validateHP = async (password, hashed) => {
  const feedback = bcrypt.compareSync(password, hashed);
  return feedback;
};

module.exports = validateHP;
