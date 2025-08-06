const express = require("express");
const router = express.Router();
const loginController = require("../controllers/loginController");

//POST login
router.post("/login", loginController);

module.exports = router;
