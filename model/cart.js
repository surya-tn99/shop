const fs =  require("fs");
const path =  require("path");
const rootDir = require("../utils/path.js");

const cartFilePath = path.join(rootDir, "data" ,"cart.json");

module.exports = class Cart{
    static  addProduct(id , price){

        fs.readFile(cartFilePath , async (error , fileContent)=>{

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

            await fs.writeFile(cartFilePath , JSON.stringify(cart , null , 2) , (error) => {
                console.log( error ? "write failed" : "write completed");
                if(error){
                    console.error(error);
                }
            
            } );
        })

    }
}
