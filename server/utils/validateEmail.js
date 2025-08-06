const validateEmail = async (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@+$]/;
  if (emailRegex.test(email)) {
    return true;
  }
};

module.exports = validateEmail;
