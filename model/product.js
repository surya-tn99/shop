const getDb = require("../utils/mongo").getDb;

module.exports = class Product{

    constructor(title , desc , price){
        // 0.12345 * (10**5) floor
        this.id = Math.floor(Math.random() * 10000)
        this.title = title
        this.description = desc
        this.price = price
    }

    addProduct() {
        const db = getDb();

        db.collection("products").insertOne(this)
        .then(res => console.log(res))
        .catch(e => console.error(e));
    }

    static fetchProductById(id , callBackFunction) {
            console.log(id);

            const db = getDb(); 

            db.collection("products").findOne({id : Number(id)} , (err , product) => {
                if(!err){
                    console.log(product);
                    return callBackFunction(product);
                }

                console.error(err);
                return callBackFunction(null);
            });

            console.log("---------------------");
        }
    

    static editProduct(newProduct , callBackFunction){

        const db = getDb();
        db.collection("products").updateOne({id : newProduct.id} , {$set : newProduct})
        .then(res => {
            callBackFunction(res);
        })
        .catch(e => {
            console.error(e);
        });
    }

    static deleteProduct(productID , callBackFunction) {
        const db = getDb();
        db.collection("products").deleteOne({id : productID})
        .then(result => {
            callBackFunction(result);
        })
        .catch(e => {
            console.error(e);
        });
    }

    static fetchAllProductDetails(callBackFunction) {
        const db = getDb();
        db.collection("products").find().toArray()
        .then(products => {
            callBackFunction(products);
        })
        .catch(e => console.error(e));
    }    
}