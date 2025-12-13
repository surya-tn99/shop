const express = require("express");
const route = express.Router();

const product = require("../controller/products.js");

route.get("/" , product.shopPage);
route.get("/404",product._404);
route.use((req , res , next )=>{
    res.redirect("/404");
})
module.exports = route;