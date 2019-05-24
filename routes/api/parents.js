const express = require("express");
const router = express.Router();

// Import Controller
const parentController = require("../../controllers/parentController.js");

router.get("/test", parentController.test);

// Register user
router.post("/register", parentController.register);

module.exports = router;
