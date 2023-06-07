const authController = require("../controllers/auth-controller");

const express = require("express");

const router = express.Router();

router.post("/register", authController.register);
router.post("/login", () => {});

module.exports = router;
