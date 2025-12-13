const express = require("express");
const route = express.Router();

const product = require("../controller/products.js");

route.use("/" , product);

module.exports = route;