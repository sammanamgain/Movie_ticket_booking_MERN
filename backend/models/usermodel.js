const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
    select: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  roles: {
    type: String,
    default:"user"
  },
  
  bookedTickets: [{ type: mongoose.Schema.ObjectId, ref: "Ticket" }],

}
  ,
);
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcryptjs.hash(this.password, 12);
});
userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRATION,
  });
};

userSchema.methods.comparePassword = async function (input_password) {
  return bcryptjs.compare(input_password, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
