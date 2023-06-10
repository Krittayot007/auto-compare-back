const createError = require("../utils/create-error");

module.exports = async (req, res, next) => {
  try {
    const isAdmin = req.user.isAdmin;
    if (!isAdmin) {
      createError("You not admin", 404);
    }
    next();
  } catch (err) {
    next(err);
  }
};
