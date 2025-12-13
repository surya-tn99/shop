const express = require("express");
const path = require("path");
const app = express();
// routes
const productRoute = require("./routes/product.js");

// template engine
app.set("view engine" , "ejs");
app.set("views" , "views");

// static files (css)
app.use("/css" ,
     express.static(
        path.join(
            path.dirname(require.main.filename) ,
            "css" )
        )
    )

app.use(productRoute);

app.listen(1234);