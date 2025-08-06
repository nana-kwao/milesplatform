const express = require("express");
const router = express.Router();
const signupController = require("../controllers/signupController");

//POST signup
router.post("/signup", signupController);

module.exports = router;
