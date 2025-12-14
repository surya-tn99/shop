const express = require("express");
const router = express.Router();

const product = require("../controller/manageProduct.js");

router.get("/view" , product.viewProducts);
router.get("/add" , product.viewAddProductForm);
router.post("/add-product" , product.addProduct);
router.get("/admin" , product.viewAdminPage);

router.use( (req , res , next )=> {
    res.status(404).redirect("/404");
});
module.exports = router;
