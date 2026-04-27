const express = require("express");
const path = require("path");
const app = express();

// routes
const productViewRoute = require("./routes/productView.js");
const manageProduct = require("./routes/manageProduct.js");
const cartRouter = require("./routes/cart.js"); 
// const adminRouter = require("./routes/admin.js");

// database 
const mongodb = require("./utils/mongo.js");

// template engine
app.set("view engine" , "ejs");
app.set("views" , "views");

// static files (css)
app.use("/css" , express.static(path.join(__dirname ,"css" )))

app.use ( (req,res,next)=>{
    console.log(req.url);
    next();
})

app.use(express.urlencoded({extended : true}));

// routes middleware
app.use(cartRouter);
// app.use(adminRouter);
app.use(manageProduct);
app.use(productViewRoute);

mongodb.connectMongoDB((client)=>{
    app.listen(1234 , (error)=>{
        if(error){
            console.error(error);
        }
        console.log("listen at port 1234");
    });
})