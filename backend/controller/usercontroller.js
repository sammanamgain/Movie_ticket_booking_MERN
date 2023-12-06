const User = require("../models/usermodel");
const validator = require("validator");
const catchAsync = require("../middleware/catchAsync");
const Error = require("../utils/Error");
const customError = require("../middleware/customError.js");
const sendToken=require('../utils/sendToken.js')

exports.sign_up = catchAsync(async (req, res, next) => {
  const { username, email, password } = req.body;
  if (validator.isEmail(email) === false) {
    return next(new Error(400, "Invalid Email"));
  }
  const passwordRegex = /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

  if (passwordRegex.test(password) === false) {
    return next(
      new Error(
        400,
        "Password must be 8 digit long and should contain a special character"
      )
    );
  }
  const user = await User.create({ username, email, password });
  if (!user) {
    return next(new Error(400, "failed to create user"));
    }
    sendToken(user, 201, res, next);
    
//   res.status(201).json({
//     success: true,
//     message: "User created successfully",
//   });
});
