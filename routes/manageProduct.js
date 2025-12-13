const express = require("express");
const router = express.Router();

const product = require("../controller/manageProduct.js");

router.get("/view" , product.productPage);
router.get("/add" , product.view);
router.post("/add" , product.add);

router.use( (req , res , next )=> {
    res.status(404).redirect("/404");
});
module.exports = router;
