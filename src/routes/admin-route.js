const express = require("express");
const adminController = require("../controllers/admin-controller");
const publicController = require("../controllers/public-controller");

const router = express.Router();

router.post("/addProduct", adminController.addProduct);
router.post("/search", publicController.searchProduct);
router.patch("/updateProduct/:id", adminController.updateProduct);
router.delete("/delete/:id", adminController.deleteProduct);

module.exports = router;
