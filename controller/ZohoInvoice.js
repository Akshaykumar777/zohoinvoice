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
          "Zoho-oauthtoken 1000.a1e2d1711d1e3acc92c7eede0ea87318.374f360e2d2fbb72ad8c89092ea6bed1",
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
