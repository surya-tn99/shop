const express = require("express");
const path = require("path");
const app = express();

// routes
const productViewRoute = require("./routes/productView.js");
const manageProduct = require("./routes/manageProduct.js");

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
app.use("/product" , manageProduct);
app.use(productViewRoute);

app.listen(1234);