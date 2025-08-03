const hashpassword = require("../utils/hashpasswords");
const ConnectToDatabaseAndCollection = require("../models/connectToDatabaseAndCollection");

const addUserToDB = async (fullname, username, telephone, email, password) => {
  try {
    if (!fullname || !username || !telephone || !email || !password) {
      console.log("Missing Values");
    }
    const hashedPassword = await hashpassword(password);
    const collection = await ConnectToDatabaseAndCollection();
    const result = await collection.insertOne({
      fullname: fullname,
      username: username,
      telephone: telephone,
      email: email,
      password: hashedPassword,
    });
    console.log("User created:", result.insertedId);
    result ? true : false;
  } catch (error) {
    console.error("Error adding user:", error.message);
  }
};

module.exports = addUserToDB;
