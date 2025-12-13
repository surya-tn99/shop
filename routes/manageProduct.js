const express = require("express");
const router = express.Router();

const product = require("../controller/manageProduct.js");

router.get("/add" , product.view);
router.post("/add" , product.add);
module.exports = router;
