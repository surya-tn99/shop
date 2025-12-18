require("dotenv").config();

const db = require("./utils/sql");

let sql  = '' ;

db.execute("SELECT * FROM products")
  .then(([rows, fields]) => {
    console.log(rows);
    db.end();
})
  .catch(err => {
    console.error(err);
  });
