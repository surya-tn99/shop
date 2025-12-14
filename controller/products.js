
const Product = require("../model/product.js");

exports.shopPage =  (req , res  , next) => {
    
    Product.fetchAllProductDetails(products => {
        res.render("product" , 
        {
            active : "shop",
            cssPaths : ["/css/nav.css" ,"/css/common.css" , "/css/products.css" ],
            products : products
        }
        );
    }) ;  
}

exports._404 = (req, res, next) =>{
    
    res
        .status(404)
        .render("404" ,{
            cssPaths : ["/css/nav.css" ,"/css/common.css" , "/css/404.css"]
        });
}
