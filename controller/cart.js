const Product = require("../model/product.js");
const Cart = require("../model/cart.js");

exports.viewCart = (req , res, next) =>{
    
    Cart.FetchCartProductDetails((products , totalPrice ) => {
        res.render("cart" , 
        {
            active : "cart",
            cssPaths : ["/css/nav.css" ,"/css/common.css" , "/css/products.css" ],
            products : products,
            totalPrice : totalPrice
        }
        );
    });

}

exports.addProductToCart = (req , res, next) =>{
   
    Cart.addProduct(req.body.id);
    res.redirect("/cart");
}

exports.updateQuantity = (req , res , next) => {
    Cart.updateQuantity(req.query.productID , req.query.value , ()=>{
        res.redirect("/cart");
    });
    
}
