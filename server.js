const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const helmet = require("helmet");
const { json, urlextended } = require("body-parser");
const { connect } = require("./models");

const app = express();

connect
  .then(() => console.log("Connection Success"))
  .catch(err => console.log("Error in connection ", err));

app.get("/", (req, res) => {
  res.send("Working");
});

app.get("*", (req, res) => {
  res.status(404).send("404 Error, Page can not be found!!");
});

module.exports = app;
