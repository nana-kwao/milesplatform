const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();
const client = new MongoClient(
  process.env.MONGO_URL_ATLAS_PREFIX +
    process.env.MONGO_URL_ATLAS_USERNAME +
    process.env.MONGO_URL_ATLAS_PASSWORD +
    process.env.MONGO_URL_ATLAS_SURFIX
);

module.exports = client;
