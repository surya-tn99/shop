const Product = require("../model/product.js");

// handle /product/add GET 
exports.view = (req , res , next) => {
    res.render("add-product" , 
        {
            cssPaths : ["/css/nav.css" ,"/css/common.css" , "/css/add-product.css" ]
        }
    );
}
// handle /product/add POST
exports.add =  (req , res , next) => {

    const product = new Product(
        req.body.title , req.body.description??'' , req.body.price 
    )
    
    product.addProduct()
    
    console.log(product)

    console.log(Product.allProductDetails())
    
    res.redirect("/product/add");

}

exports.productPage = (req , res  , next) => {
    res.redirect("/404");
}

