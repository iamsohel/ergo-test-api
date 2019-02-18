const winston = require("winston");
const express = require("express");
const app = express();
var cors = require("cors");

app.use(cors());
require("./startup/routes")(app);
require("./startup/db")();
require("./startup/validation")();

const port = process.env.PORT || 3000;
const server = app.listen(port, () =>
  winston.info(`Listening on port ${port}...`)
);

module.exports = server;
