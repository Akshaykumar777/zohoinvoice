const axios = require("axios");
const { parse, stringify } = require("flatted/cjs");
var fs = require('fs');

Invoice = (req, res) => {
  console.log("getting invoice");
  //   res.send("getting invoice");
  axios
    .get("https://invoice.zoho.com/api/v3/invoices", {
      headers: {
        Authorization:
          "Zoho-oauthtoken 1000.c1f88dc2da0dd92c57962260ee6001e6.4f8277053f3de88ed1da78eded6a6005",
        "X-com-zoho-invoice-organizationid": "712479117",
        "Content-Type": "multipart/form-data",
      },
    })
    .then((result) => {
      console.log(result.data.invoices);
        var data = [];

      result.data.invoices.map(invoices => {
        data = [...data, {date: invoices.date, client: invoices.company_name, status: invoices.status}]
      })

      res.send(data);
      
    })
};

module.exports = { Invoice };
