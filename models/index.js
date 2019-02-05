require("dotenv").config();
const mongoose = require("mongoose");
const url = process.env.DB_URI;

mongoose.Promise = global.Promise;

const connect = mongoose.connect(url, {
  useNewUrlParser: true,
  useCreateIndex: true
});

module.exports = connect;
