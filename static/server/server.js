if(process.env.NODE_ENV === 'production'){
  require('dotenv').config({ path: '../../.env' });
}

const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const mercadopago = require("mercadopago");
const PORT = process.env.PORT
const baseUrl = process.env.BASE_URL;


mercadopago.configure({
  access_token: process.env.MP_ACCESS_TOKEN
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Configuración para servir archivos estáticos desde la carpeta "static"
app.use('/static', express.static(path.join(__dirname, "../")));

app.use(express.static(path.join(__dirname, "/static")));
app.use(cors());

app.get("/", function (req, res) {
  const filePath = path.join(__dirname, "..", "..", "index.html");
  res.sendFile(filePath);
  // res.status(200).sendFile(path.join(__dirname, "../../index.html"));
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
      "success": baseUrl + '/success',
      "failure": baseUrl + '/',
      "pending": baseUrl + '/'
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

app.get('/success', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "success.html"));
});

app.get('/feedback', function (req, res) {
  res.json({
    Payment: req.query.payment_id,
    Status: req.query.status,
    MerchantOrder: req.query.merchant_order_id
  });
});

app.listen(PORT, () => {
  console.log("El servidor esta corriendo en el puerto", PORT);
});



















// app.use((req, res, next) => {
//   res.setHeader("Content-Security-Policy", "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net https://sdk.mercadopago.com https://http2.mlstatic.com;");
//   next();
// });