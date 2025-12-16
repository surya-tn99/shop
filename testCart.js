const Cart = require("./model/cart.js");

Cart.FetchCartProductDetails(cart => {
    console.log("callback : ",cart[0]);
})
