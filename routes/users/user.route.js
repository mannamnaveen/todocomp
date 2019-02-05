const express = require("express");
const router = express.Router();
const { getAll, postAll } = require("../../controls");

router
  .route("/user")
  .get(getAll)
  .post(postAll);

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
