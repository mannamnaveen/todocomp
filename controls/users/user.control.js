const mongoose = require("mongoose");
const { User, validateUser } = require("../../models");

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
  const result = validateUser(req.body);
  console.log(result.error.details[0].message);
  return;
  User.create(req.body)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(400).send(data);
    });
};

const getOne = function(req, res) {
  User.findById({ _id: req.params.id })
    .then(data => {
      res.send(data);
    })
    .catch(() => {
      res.status(400).send({ message: "user not found" });
    });
};

module.exports = {
  getAll,
  postAll,
  getOne
};
