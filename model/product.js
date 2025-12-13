const products = [
    {
        title : "chair",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, laboriosam.",
        price : 500
    },
    {
        title : "cooker",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, laboriosam.",
        price : 1500
    },
    {
        title : "crown",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, laboriosam.",
        price : 150000
    }
]

module.exports = class Product{

    constructor(title , desc , price){
        this.title = title
        this.description = desc
        this.price = price
    }

    addProduct(){
        products.push(this);
    }

    static allProductDetails(){
        return products;
    }
}