const ConnectToDatabaseAndCollection = require("./connectToDatabaseAndCollection");

const checkEmailOnDB = async (email) => {
  try {
    const collection = await ConnectToDatabaseAndCollection();
    const existingUser = await collection.findOne({ email: email });
    if (existingUser) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error:", error.message);
    throw error;
  }
};

module.exports = checkEmailOnDB;
