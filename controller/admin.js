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

// hanlde /admin/edit-product
exports.editProductPage = (req , res , next )=>{
    
    Product.fetchProductById(req.query.productID, product => {
        console.log(product);
        res.render("edit-product" , 
        {
            active : "edit-product",
            cssPaths : ["/css/nav.css" ,"/css/common.css" , "/css/add-product.css" ],
            product : product
        }
        );
    }) ;  
}

exports.productModification = (req , res , next) => {
    
    if(req.query.delete == "true"){
        Product.deleteProduct(req.query.productID  , ()=>{
            console.log("product deleted");
        });
    }
    res.redirect("/admin");
}

// TODO handle edit product req