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

exports.productModification = (req , res , next) => {
    console.log(req.query);
    if(req.query.delete == "true"){
        Product.deleteProduct(req.query.productID  , ()=>{
            console.log("product deleted");
        });
    }
    res.redirect("/admin");
}

// TODO handle edit product req