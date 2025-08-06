const express = require("express");
const router = express.Router();
const testController = require("../controllers/testC");

//POST /test
router.post("/test", testController);

module.exports = router;
