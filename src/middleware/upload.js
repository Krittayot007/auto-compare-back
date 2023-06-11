const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      new Date().getTime() +
        "" +
        Math.round(Math.random() * 100000) +
        "." +
        file.mimetype.split("/")[1]
    ); // ตั้งเป็นตัวเลขแบบ milli-second
  },
});

module.exports = multer({ storage });
