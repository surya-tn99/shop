const express = require("express");
const router = express.Router();

const admin = require("../controller/admin.js");

router.get("/admin" , admin.viewAdminPage);

router.use("/admin/modify" , admin.productModification);

module.exports = router;
