const fs =  require("fs");
const path =  require("path");
const rootDir = require("../utils/path.js");
const Product = require("./product.js");
const cartFilePath = path.join(rootDir, "data" ,"cart.json");

module.exports = class Cart{
    
    static listCartItems(callback) {

        fs.readFile(cartFilePath , async (error , fileContent)=>{

            let cart = { products : [] ,totalPrice : 0};
            
            if(!error){
                cart = JSON.parse(fileContent);
            }
            callback(cart);
        })
    }

    static FetchCartProductDetails(callback){
        Cart.listCartItems(cart => {
            
            const cartProductDetails = [];
            let productCount = cart.products.length;
            
            if(productCount == 0){
                callback(cart);
            }
            
            for(let prod of cart.products){

                Product.fetchProductById(prod.id , (product)=>{
                
                    if(product){
                        product = {...product , quantity :  prod.quantity};
                        cartProductDetails.push(product);
                    }     
                    productCount -- ;

                    if(productCount === 0){
                        callback(cartProductDetails , cart.totalPrice);
                    }
                });  

            }
        })
    }

    static updateTotalPrice() {
        Cart.FetchCartProductDetails((cartProductDetails , totalPrice) => {
            totalPrice = 0;
            let products = [];
            for(let prod of cartProductDetails) {                
                
                products.push({
                    id: prod.id,
                    quantity: prod.quantity
                });

                totalPrice += prod.price * prod.quantity;
            }
    
            const cart = {
                products : products , 
                totalPrice : totalPrice
            } ;

            fs.writeFile(cartFilePath , JSON.stringify(cart , null , 2) , (error) => {
                if(error){
                    console.error(error);
                }            
            } );

        });
    }

    static  addProduct(id , price) {

        fs.readFile(cartFilePath , (error , fileContent)=>{

            let cart = { products : [] ,totalPrice : 0};
            
            if(!error){
                cart = JSON.parse(fileContent);
            }

            const existingProductIndex = cart.products.findIndex((prod)=>{
                return prod.id === id;
            });
            const existingProduct = cart.products[existingProductIndex];


            if(existingProduct){
                // increasing the count for the product already on the cart
                existingProduct.quantity += 1;
                cart.products[existingProductIndex] = existingProduct;
            }
            else{
                // new to the cart
                const newProduct = { id : id  , quantity : 1};
                cart.products.push(newProduct);
            }

            cart.totalPrice += +price;

            fs.writeFile(cartFilePath , JSON.stringify(cart , null , 2) , (error) => {
                if(error){
                    console.error(error);
                }
            
            } );
        })

    }
}
