const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const MONGO_URI =
  process.env.MONGO_URL_ATLAS_PREFIX +
  process.env.MONGO_URL_ATLAS_USERNAME +
  process.env.MONGO_URL_ATLAS_PASSWORD +
  process.env.MONGO_URL_ATLAS_SURFIX +
  process.env.MONGODB_DBNAME;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to Database");
  } catch (error) {
    console.error("❌ Database Connection Error:", error.message);
    throw error;
  }
};

const closeDB = async () => {
  try {
    await mongoose.disconnect();
    console.log("🔌 Database connection closed");
  } catch (error) {
    console.error("❌ Error closing the database:", error.message);
  }
};

module.exports = { connectDB, closeDB };
