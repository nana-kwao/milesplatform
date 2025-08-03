const ConnectToDatabaseAndCollection = require("../models/connectToDatabaseAndCollection");
const checkEmailOnDB = require("../models/dblogin_checkemail");
const verifyhashpassword = require("../utils/verifyhashedpasswords");

const VerifyHashedPassword = async (email, rawPassword) => {
  try {
    const matchEmail = await checkEmailOnDB(email);
    if (matchEmail) {
      const collection = await ConnectToDatabaseAndCollection();
      const getHashedPassword = await collection.findOne({
        email: email,
      });
      if (getHashedPassword) {
        let compare = await verifyhashpassword(
          rawPassword,
          getHashedPassword.password
        );
        if (compare) {
          return true;
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
  } catch (error) {
    console.log("Error Occured: ", error.message);
  }
};

module.exports = VerifyHashedPassword;
