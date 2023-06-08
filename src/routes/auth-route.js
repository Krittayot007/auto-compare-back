const authController = require("../controllers/auth-controller");
const authenticateMiddleware = require("../middleware/authenticate");

const express = require("express");

const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/me", authenticateMiddleware, authController.getMe);

module.exports = router;
