const publicController = require("../controllers/public-controller");

const express = require("express");

const router = express.Router();

router.get("/fetch/:id", publicController.fetchProductById);
router.post("/search", publicController.searchProduct);

module.exports = router;
