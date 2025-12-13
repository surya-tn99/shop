const express = require("express");
const router = express.Router();

const product = require("../controller/manageProduct.js");

router.get("/add" , product.view);
router.post("/add" , product.add);
router.use("/view" , product.productPage);
router.use( (req , res , next )=> {
    res.status(404).render("404" ,{
        cssPaths : ["/css/nav.css" ,"/css/common.css"]
    });
});
module.exports = router;
