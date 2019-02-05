const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const helmet = require("helmet");
const { json, urlencoded } = require("body-parser");
const { connect } = require("./models");
const { userRouter } = require("./routes");

const app = express();

connect
  .then(() => console.log("Connection Success"))
  .catch(err => console.log("Error in connection ", err));

app.use(helmet());
app.use(cors());
app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Working");
});

app.use("/api", userRouter);

app.get("*", (req, res) => {
  res.status(404).send("404 Error, Page can not be found!!");
});

module.exports = app;
