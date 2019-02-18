const express = require("express");
const users = require("../routes/users");
const restaurants = require("../routes/restaurants");
const error = require("../middleware/error");

module.exports = function (app) {
  app.use(express.json());
  app.use("/api/users", users);
  app.use("/api/restaurants", restaurants);
  app.use(error);
};
