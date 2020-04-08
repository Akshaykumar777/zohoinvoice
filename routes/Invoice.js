const express = require('express');
var router = express.Router();
var ZohoInvoice = require('../controller/ZohoInvoice')

router.get("/getlistinvoice",ZohoInvoice.Invoice)

module.exports = router;

