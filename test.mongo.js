const mongodb = require("./utils/mongo.js");
const Product = require("./model/product.js");

const pro = new Product("book","cobra",10);

mongodb.connectMongoDB((client)=>{
    // pro.addProduct();
    Product.fetchAllProductDetails(prods => {
        console.log(prods);
    });
    console.log("--------------------");
    Product.editProduct({
        id : 1299,
        title : "new cobra Book",
        description : "good book",
        price : 1234
    } , (
        res)=>{
        console.log(res);
    })
    console.log("--------------------");
    Product.fetchAllProductDetails(prods => {
        console.log(prods);
    });
    // Product.fetchAllProductDetails((products) => {
    //     console.log(products.forEach(prod => {
    //         console.log(prod.id);
    //         Product.deleteProduct(prod.id , (res)=>{
    //             console.log(res);
    //         })
    //     }));
    // });
    // Product.fetchProductById(3009 , (product) => {
    //     console.log(product);
    // })
    
})