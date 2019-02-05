const express = require("express");
const router = express.Router();

router
  .route("/user")
  .get((req, res) => {
    res.send("Get all users");
  })
  .post((req, res) => {
    res.send("Post all users");
  });

router
  .route("/user/:id")
  .get((req, res) => {
    res.send("Get single user");
  })
  .put((req, res) => {
    res.send("Put single user");
  })
  .delete((req, res) => {
    res.send("Delete a single user");
  });

module.exports = { userRouter: router };
