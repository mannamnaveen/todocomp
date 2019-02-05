require("dotenv").config();
const mongoose = require("mongoose");
const url = process.env.DB_URI;
const User = require("./users/user.model");

mongoose.Promise = global.Promise;

const connect = mongoose.connect(url, {
  useNewUrlParser: true,
  useCreateIndex: true
});

module.exports = { connect, User };
