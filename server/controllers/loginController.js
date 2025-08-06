const User = require("../models/userSchema");
const validateHP = require("../utils/validateHP");
const { connectDB, closeDB } = require("../config/mongodbconnection");
const validateEmail = require("../utils/validateEmail");

const loginController = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    await connectDB();

    const validateMail = await validateEmail(email);
    if (!validateMail)
      return res.status(400).json({ message: "email is invalid" });

    const userExist = await User.findOne({ email }).select("username password");

    if (!userExist) return res.status(404).json({ message: "no user account" });

    const verifyHP = await validateHP(password, userExist.password);
    if (!verifyHP)
      return res.status(401).json({
        message: "incorrect password",
        username: userExist.username,
        userID: userExist._id,
      });

    await closeDB();
    return res.status(201).json({ message: "login successful" });
  } catch (error) {
    next(error);
  }
};

module.exports = loginController;
