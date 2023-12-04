const express = require("express");
const app = express();
const cors = require("cors");
const mercadopago = require("mercadopago");


require('dotenv').config({ path: '/home/joelmorles/Documents/PROYECTO-GITHUB/Bocatto-Di-Pollo/.env' });





mercadopago.configure({
  access_token: process.env.MP_ACCESS_TOKEN
});

// app.use((req, res, next) => {
//   res.setHeader("Content-Security-Policy", "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net https://sdk.mercadopago.com https://http2.mlstatic.com;");
//   next();
// });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/static', express.static("/home/joelmorles/Documents/PROYECTO-GITHUB/Bocatto-Di-Pollo/static"));
app.use(express.static("/home/joelmorles/Documents/PROYECTO-GITHUB/Bocatto-Di-Pollo/static"));
app.use(cors());
app.get("/", function (req, res) {
  res.status(200).sendFile("/home/joelmorles/Documents/PROYECTO-GITHUB/Bocatto-Di-Pollo/index.html");
});

app.post("/create_preference", (req, res) => {

  let preference = {
    items: [
      {
        title: req.body.description,
        unit_price: Number(req.body.price),
        quantity: Number(req.body.quantity),
      }
    ],
    back_urls: {
      "success": "http://localhost:5000",
      "failure": "http://localhost:5000",
      "pending": "http://localhost:5000"
    },
    auto_return: "approved",
  };

  mercadopago.preferences.create(preference)
    .then(function (response) {
      res.json({
        id: response.body.id
      });
    }).catch(function (error) {
      console.log(error);
    });
});

app.get('/feedback', function (req, res) {
  res.json({
    Payment: req.query.payment_id,
    Status: req.query.status,
    MerchantOrder: req.query.merchant_order_id
  });
});

app.listen(5000, () => {
  console.log("The server is now running on Port 5000");
});