const User = require("../models/usermodel");
const validator = require("validator");
const catchAsync = require("../middleware/catchAsync");
const Error = require("../utils/Error");
const customError = require("../middleware/customError.js");
const sendToken = require("../utils/sendToken.js");

//sign up a user
exports.sign_up = catchAsync(async (req, res, next) => {
  const { username, email, password,roles } = req.body;
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
  const user = await User.create({ username, email, password,roles });
  if (!user) {
    return next(new Error(400, "failed to create user"));
  }
  const user1 = await User.findOne({ email });
  sendToken(user1, 201, res, next);
});


//sign in user
exports.log_in = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  console.log(password);
  if (!email || !password) {
    return next(new Errorcreator(400, "please Enter your email and password"));
  }
  // as we have made false to select property of password ,we have to explicitly select password field too
  let user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new Errorcreator(401, "Invalid email or password"));
  }

  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new Errorcreator(401, "Invalid  Password"));
  }
  user = await User.findOne({ email });
  sendToken(user, 200, res, next);
});


//logout 
exports.logout = catchAsync(async (req, res, next) => {
  res.cookie("token", null, { expires: new Date(Date.now()), httpOnly: true });
  res.status(200).json({
    success: true,
    message: "Logged out",
  });
});

