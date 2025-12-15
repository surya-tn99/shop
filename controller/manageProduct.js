const Product = require("../model/product.js");

// handle /product/add GET 
exports.viewAddProductForm = (req , res , next) => {

    console.log("called add product route GET");

    res.render("add-product" , 
        {
            active : "add-product",
            cssPaths : ["/css/nav.css" ,"/css/common.css" , "/css/add-product.css" ]
        }
    );
}

// handle /product/add-product POST
exports.addProduct =  (req , res , next) => {

    console.log("called add product route POST");

    const product = new Product(
        req.body.title , req.body.description??'' , req.body.price 
    )
    
    product.addProduct()
    
    res.redirect("/");
}

// handle /product/admin
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

// handle /product/
exports.viewProducts = (req , res  , next) => {
    
    Product.fetchAllProductDetails(products => {
        res.render("product" , 
        {
            active : "product",
            cssPaths : ["/css/nav.css" ,"/css/common.css" , "/css/products.css" ],
            products : products
        }
        );
    }) ;  

}

// handle /product/:productID
exports.getProductDetails = (req , res , next) => {
    const id = Number(req.params.productID);

    Product.fetchProductById( id , product => {
        console.log(product);
        res.render("product" , 
        {
            active : "product-detail",
            cssPaths : ["/css/nav.css" ,"/css/common.css" , "/css/products.css" ],
            products : product
        }
        );
    })
    
}
