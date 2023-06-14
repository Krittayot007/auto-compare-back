const express = require("express");
const adminController = require("../controllers/admin-controller");
const publicController = require("../controllers/public-controller");
const upload = require("../middleware/upload");

const router = express.Router();

router.post(
  "/addImage/:carId",
  upload.array("imgUrl"),
  adminController.uploadProducts
);
router.post("/addProduct", adminController.addProduct);
router.post("/search", publicController.searchProduct);
router.patch("/updateProduct/:id", adminController.updateProduct);
router.delete("/deleteFile/:id", adminController.deleteFileProduct);
router.delete("/delete/:id", adminController.deleteProduct);

module.exports = router;
