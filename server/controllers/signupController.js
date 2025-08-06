const User = require("../models/userSchema");
const hashP = require("../utils/hashP");
const { connectDB, closeDB } = require("../config/mongodbconnection");
const validateEmail = require("../utils/validateEmail");

const signupController = async (req, res, next) => {
  const { fullname, username, telephone, email, password } = req.body;
  try {
    await connectDB();
    const userExist = await User.findOne({
      $or: [
        { fullname: fullname },
        { username: username },
        { telephone: telephone },
        { email: email },
      ],
    });
    if (userExist)
      return res.status(400).json({ message: "user already exist" });

    const hashedpwd = await hashP(password);

    const validateMail = await validateEmail(email);

    if (!validateMail)
      return res.status(400).json({ message: "email is invalid" });

    const newUser = await User.create({
      fullname,
      username,
      telephone,
      email,
      password: hashedpwd,
    });

    await newUser.save();
    await closeDB();
    return res.status(201).json({
      message: "user account created",
      username: username,
      userID: newUser._id,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = signupController;
