const Product = require("../model/product.js");

exports.viewCart = (req , res, nest) =>{
    res.render("cart" , 
    {
        active : "cart",
        cssPaths : ["/css/nav.css" ,"/css/common.css" , "/css/products.css" ]
    }
    );
}

exports.addProductToCart = (req , res, nest) =>{
    console.log(req.body.id);
    res.redirect("/cart");
}

