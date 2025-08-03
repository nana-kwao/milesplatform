const client = require("../config/mongodbconnection");

const ConnectToDatabaseAndCollection = async () => {
  try {
    let db = await client.db("milesplatform");
    let collection = await db.collection("User");
    return collection;
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = ConnectToDatabaseAndCollection;
