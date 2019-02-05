const mongoose = require("mongoose");
const Joi = require("joi");

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

const validateUser = function(user) {
  const schema = {
    firstName: Joi.string()
      .min(2)
      .max(255)
      .lowercase()
      .trim()
      .required(),
    lastName: Joi.string()
      .min(2)
      .max(255)
      .lowercase()
      .trim()
      .required(),
    email: Joi.string()
      .min(4)
      .max(255)
      .email()
      .lowercase()
      .trim()
      .required(),
    password: Joi.string()
      .min(6)
      .max(255)
      .trim()
      .required()
  };

  return Joi.validate(user, schema);
};

const User = mongoose.model("user", userSchema);

module.exports = { User, validateUser };
