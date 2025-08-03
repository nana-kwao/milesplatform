const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const client = require("./config/mongodbconnection");
const userAccountExist = require("./controllers/userAccountExist");
const addUserToDB = require("./controllers/addUserToDB");
const VerifyHashedPassword = require("./controllers/getHashedPasswordAndCompare");
const app = express();
dotenv.config();
const PORT = parseInt(process.env.PORT) || 5000;
client.connect();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  try {
    res.send("Serving Running");
  } catch (error) {
    console.log("Error Turning on server");
  }
});

app.post("/api/signup", async (req, res) => {
  try {
    const { fullname, username, telephone, email, password } = req.body;

    // Check for required fields
    if (!fullname || !username || !telephone || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Check if user already exists
    const userExists = await userAccountExist(
      fullname,
      username,
      telephone,
      email
    );

    if (userExists) {
      return res.status(409).json({ user: "already exists", success: "exist" });
    } else if (!userExists) {
      const addUsertoDB = await addUserToDB(
        fullname,
        username,
        telephone,
        email,
        password
      );
      return res.status(201).json({ user: "user created", success: "created" });
    }
  } catch (error) {
    console.error("Signup Error:", error.message);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(401).json({ success: "No Details Provied" });
  }

  const verifyPassword = await VerifyHashedPassword(email, password);
  if (!verifyPassword) {
    return res
      .status(404)
      .json({ success: "incorrect password or account does not exist" });
  }
  return res.status(200).json({ success: "logged in" });
});

app.listen(PORT, () => console.log("Server running on Port", PORT));
