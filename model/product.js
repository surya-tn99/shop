const fs =  require("fs");
const path =  require("path");
const rootDir = require("../utils/path.js");

const productFilePath = path.join(rootDir, "data" ,"products.json");

const getJSONContent = callBackFunction => {
    // reading data
    fs.readFile(productFilePath , "utf8" , (error , fileContent) => {
        if(error){
            console.log("error bro while reading data");
            return callBackFunction([]);
        }
        else{

            if(!fileContent.trim()){
                // whether the file is empty file
                return callBackFunction([]);
            }
            return callBackFunction(JSON.parse(fileContent));
        }

    });
}

module.exports = class Product{

    constructor(title , desc , price){
        // 0.12345 * (10**5) floor
        this.id = Math.floor(Math.random() * 10000)
        this.title = title
        this.description = desc
        this.price = price
    }

    addProduct() {

        getJSONContent(products => {

            products.push(this);

            fs.writeFile(productFilePath , JSON.stringify(products , null , 2) , (error)=>{
                if(error){
                    console.log("error bro while writing data");
                }
            });
        })       

    }
    
    static deleteProduct(productID , callBackFunction) {
        getJSONContent(products => {

            const index = products.findIndex(prod => prod.id == productID);
            if(index != -1){
                products.splice(index , 1);
            }

            fs.writeFile(productFilePath , JSON.stringify(products , null , 2) , (error)=>{
                if(error){
                    console.log("error bro while writing data");
                }
            });
            
        })       
    }

    static fetchAllProductDetails(callBackFunction) {
        getJSONContent(callBackFunction);
    }

    static fetchProductById(id , callBackFunction) {
        getJSONContent(products => {
            const product = products.find( p => p.id == id);
        
            callBackFunction(product);
        })
    }
    
}