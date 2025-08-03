const checkEmailOnDB = require("../models/dblogin_checkEmailOnDB");

const userEmailExist = async (email) => {
  try {
    const responseFromDB = await checkEmailOnDB(email);
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

module.exports = userEmailExist;
