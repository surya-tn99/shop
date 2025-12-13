
const Product = require("../model/product.js");

module.exports =  (req , res  , next) => {
    res.render("product" , 
        {
            cssPaths : ["/css/nav.css" ,"/css/common.css" , "/css/products.css" ],
            products : Product.allProductDetails()
        }
    );
}
