const express = require("express");
const router = express.Router();

const cartController = require("../controller/cart.js");
router.get("/cart" ,cartController.viewCart);

module.exports = router;