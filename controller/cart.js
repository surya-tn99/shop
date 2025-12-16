const Product = require("../model/product.js");
const Cart = require("../model/cart.js");

exports.viewCart = (req , res, nest) =>{
    
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

exports.addProductToCart = (req , res, nest) =>{
    console.log(req.body.id);
    console.log(req.body.price);
    Cart.addProduct(req.body.id , req.body.price);
    res.redirect("/cart");
}

// TODO increase and descrese quantity
