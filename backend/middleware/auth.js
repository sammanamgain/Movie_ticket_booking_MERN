const User = require("../models/usermodel");
const validator = require("validator");
const catchAsync = require("../middleware/catchAsync");
const Error = require("../utils/Error");
const customError = require("../middleware/customError.js");
const sendToken = require("../utils/sendToken.js");
const jwt = require("jsonwebtoken");

exports.auth = catchAsync(async (req, res, next) => {
  console.log(req.cookies);
  const { token } = req.cookies;
  if (!token) {
    res.status(400).json({
      success: false,
      message: "please login to access this feature",
    });
  }
  const decodedData = jwt.verify(token, process.env.JWT_SECRET_KEY);

  const user = await User.findById(decodedData.id);
  if (!user) {
    res.status(400).json({
      success: false,
      message: "token expired ,please login again to access this feature",
    });
  }
  req.user = user;
  //console.log(req.user);
  req.user.id = decodedData._id;
  next();
});
exports.checkrole = (...roles) => {
    return (req, res, next) => {
      console.log(req.user)
    if (req.user.roles == undefined) {
      next(new Error("404", "you are not allowed to access this route"));
    } else if (req.user.roles == "user") {
      next(new Error("403", "A normal user cannot access this route"));
    }
    next();
  };
};
