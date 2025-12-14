const Product = require("../model/product.js");

// handle /admin
exports.viewAdminPage = (req , res  , next) => {
    
    Product.fetchAllProductDetails(products => {
        res.render("product" , 
        {
            active : "admin",
            cssPaths : ["/css/nav.css" ,"/css/common.css" , "/css/products.css" ],
            products : products
        }
        );
    }) ;  
}
