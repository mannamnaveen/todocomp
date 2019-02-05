const mongoose = require("mongoose");
const { User } = require("../../models");

const getAll = function(req, res) {
  User.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(400).send({ message: "Not found" });
    });
};

const postAll = function(req, res) {
  User.create(req.body)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(400).send(data);
    });
};

module.exports = {
  getAll,
  postAll
};
