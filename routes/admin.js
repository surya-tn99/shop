const express = require("express");
const router = express.Router();

const admin = require("../controller/admin.js");

router.get("/" , admin.viewAdminPage);

router.use( (req , res , next )=> {
    res.status(404).redirect("/404");
});
module.exports = router;
