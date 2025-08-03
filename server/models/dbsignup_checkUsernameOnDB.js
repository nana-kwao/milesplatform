const ConnectToDatabaseAndCollection = require("./connectToDatabaseAndCollection");

const checkUsernameOnDB = async (fullname, username, telephone, email) => {
  try {
    const collection = await ConnectToDatabaseAndCollection();
    const existingUser = await collection.findOne(
      { fullname: fullname } || { username: username } || {
          telephone: telephone,
        } || { email: email }
    );
    if (existingUser) return true;
  } catch (error) {
    console.error("Error", error.message);
    throw error;
  }
};

module.exports = checkUsernameOnDB;
