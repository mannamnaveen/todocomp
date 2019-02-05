const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 255,
      lowercase: true,
      trim: true
    },
    lastName: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 255,
      lowercase: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      minlength: 4,
      maxlength: 255,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 255,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
