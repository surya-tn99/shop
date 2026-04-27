const Product = require("./product.js");
const getDb = require("../utils/mongo.js").getDb;

module.exports = class Cart{
    
    static listCartItems(callback) {
        const db = getDb();
        db.collection("cart").find().toArray()
        .then(res => {
            return callback(null , res);
        })
        .catch(e => {
            return console.error(e , null);
        });
    }

    static create_base_cart_db(callback){
        const db = getDb();
        const new_data = {
                products : [], 
                totalPrice : 0
            }
        db.collection("cart").insertOne(new_data)
        .then(res =>  callback(null , res))
        .catch(error => callback(error , null));
    }

    static FetchCartProductDetails(callback){
        Cart.listCartItems(cart => {
            
            const cartProductDetails = [];
            
            console.log(cart);
            cart = cart ?? [];
            console.log(cart);
            console.log(cart.length);

            if (cart.length == 0){
                Cart.create_base_cart_db((error , res)=>{
                    Cart.listCartItems(cart => callback(cart) )                    
                })
            }}
        )
    }
            // let productCount = cart.products.length;
            
            // if(productCount == 0){
            //     callback(cart);
            // }
            
            // for(let prod of cart.products){

            //     Product.fetchProductById(prod.id , (product)=>{
                
            //         if(product){
            //             product = {...product , quantity :  prod.quantity};
            //             cartProductDetails.push(product);
            //         }     
            //         productCount -- ;

            //         if(productCount === 0){
            //             callback(cartProductDetails , cart.totalPrice);
            //         }
            //     });  

            // }
    //     })
    // }

    // static updateTotalPrice() {

    //     Cart.FetchCartProductDetails((cartProductDetails , totalPrice) => {
    //         totalPrice = 0;
    //         let products = [];

    //         if(cartProductDetails.length > 0){

    //             for(let prod of cartProductDetails) {                
                    
    //                 products.push({
    //                     id: prod.id,
    //                     quantity: prod.quantity
    //                 });
    //                 totalPrice += prod.price * prod.quantity;
    //             }
    //         }

    //         const cart = {
    //             products : products , 
    //             totalPrice : totalPrice
    //         } ;

    //         console.log("update : " , cart);
            
    //         fs.writeFile(cartFilePath , JSON.stringify(cart , null , 2) , (error) => {
    //             if(error){
    //                 console.error(error);
    //             }            
    //         } );

    //     });
    // }

    // static  addProduct(id) {

    //     fs.readFile(cartFilePath , (error , fileContent)=>{

    //         let cart = { products : [] ,totalPrice : 0};
            
    //         if(!error){
    //             cart = JSON.parse(fileContent);
    //         }

    //         const existingProductIndex = cart.products.findIndex((prod)=>{
    //             return prod.id === id;
    //         });
    //         const existingProduct = cart.products[existingProductIndex];


    //         if(existingProduct){
    //             // increasing the count for the product already on the cart
    //             existingProduct.quantity += 1;
    //             cart.products[existingProductIndex] = existingProduct;
    //         }
    //         else{
    //             // new to the cart
    //             const newProduct = { id : id  , quantity : 1};
    //             cart.products.push(newProduct);
    //         }


    //         fs.writeFile(cartFilePath , JSON.stringify(cart , null , 2) , (error) => {
    //             if(error){
    //                 console.error(error);
    //             }
    //             Cart.updateTotalPrice();
    //         } );
    //     })

    // }

    
    // static  updateQuantity(id ,  value , callback) {

    //     fs.readFile(cartFilePath , (error , fileContent)=>{

    //         let cart = { products : [] ,totalPrice : 0};
            
    //         if(!error){
    //             cart = JSON.parse(fileContent);
    //         }

    //         const productIndex = cart.products.findIndex((prod)=>{
    //             return prod.id == id;
    //         });
            
    //         if(productIndex == -1){
    //             console.error("product not found . product id is " , id);

    //             callback();
    //             return;

    //         }

    //         cart.products[productIndex].quantity += Number(value);

            
    //         if(cart.products[productIndex].quantity < 1){
    //             cart.products.splice(productIndex , 1);
    //         }


    //         console.log(cart);

    //         fs.writeFile(cartFilePath , JSON.stringify(cart , null , 2) , (error) => {
    //             if(error){
    //                 console.error(error);
    //             }


    //             Cart.updateTotalPrice();
                
    //             callback();
    //         } );
    //     })

    // }
}
