const express = require("express");
const router = express.Router();

const product = require("../controller/manageProduct.js");

router.get("/product" , product.viewProducts);

router.get("/product/add" , product.viewAddProductForm);

router.post("/product/add-product" , product.addProduct);

router.get("/product/:productID" , product.getProductDetails);


module.exports = router;
