const checkUsernameOnDB = require("../models/dbsignup_checkUsernameOnDB");

const userAccountExist = async (fullname, username, telephone, email) => {
  try {
    const responseFromDB = await checkUsernameOnDB(
      fullname,
      username,
      telephone,
      email
    );
    if (responseFromDB) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error checking user:", error);
    console.logn("An Error Occurred");
  }
};

module.exports = userAccountExist;
