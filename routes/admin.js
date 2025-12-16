const express = require("express");
const router = express.Router();

const admin = require("../controller/admin.js");

router.get("/admin" , admin.viewAdminPage);

router.get("/admin/edit-product" , admin.editProductPage);

router.use("/admin/modify" , admin.productModification);

module.exports = router;
