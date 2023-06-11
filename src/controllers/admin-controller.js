const adminService = require("../services/admin-service");
const cloudinary = require("../config/cloudinary");
const fs = require("fs");

exports.addProduct = async (req, res, next) => {
  try {
    const { product } = req.body;
    const result = await adminService.addProduct(product);
    res.json(result);
  } catch (err) {
    next(err);
  }
};

exports.uploadProducts = async (req, res, next) => {
  try {
    const multiupload = async (files) => {
      // console.log(files);
      const uploadMultiFiles = [];
      for (let file of files) {
        const result = await cloudinary.uploader.upload(file.path);
        uploadMultiFiles.push(result.secure_url);
      }
      // files.map( async file => {
      //     const result  = await cloudinary.uploader.upload(file.path)
      //     uploadMultiFiles.push(result.secure_url);
      // })
      return uploadMultiFiles;
    };
    const { carId } = req.params;
    await multiupload(req.files).then(async (uploadMultiFiles) => {
      const imgArr = uploadMultiFiles.map((el) => {
        // สร้าง [{}]
        const obj = { carsId: carId, imgUrl: el };
        return obj;
      });
      const rs = await adminService.uploadMultiFiles(imgArr);
      res.json(rs);
    });
  } catch (err) {
    next(err);
  } finally {
    // console.log(req.files);
    if (req.files) {
      for (let file of req.files) {
        fs.unlinkSync(file.path);
      }
    }
  }
};

exports.updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const value = req.body;
    const update = await adminService.updateProduct(value, id);
    res.status(201).json(update);
  } catch (err) {
    next(err);
  }
};
// in front end
// if(1) {
//   setState
// }

exports.deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteProduct = await adminService.deleteProduct(id);
    res.json(deleteProduct);
  } catch (err) {
    next(err);
  }
};
