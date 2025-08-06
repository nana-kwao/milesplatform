const bcrypt = require("bcrypt");

const hashP = async (password) => {
  const rounds = 13;
  const salt = await bcrypt.genSalt(rounds);
  const hashed = bcrypt.hashSync(password, salt);
  return hashed;
};

module.exports = hashP;
