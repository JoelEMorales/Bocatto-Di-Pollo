
if (process.env.NODE_ENV !== 'production') {
  // En entorno de desarrollo, carga las variables de entorno desde el archivo .env
  require('dotenv').config({ path: '../../.env' });
}

const express = require("express");
const paymentRoutes = require('./routes/payment.routes.js');
const indexRoutes = require('./routes/index.routes.js');
const emailsRoutes = require('./routes/emails.routes.js');
const productRoutes = require('./routes//product.routes.js');
const morgan = require('morgan');
const mongoose = require('mongoose');

const PORT = process.env.PORT;
const path = require("path");
const cors = require("cors");
const app = express();

mongoose.connect(process.env.MONGODB_URL)
.then(() => {
  console.log("Conexcion exitosa con la BBDD!");
})
.catch((err) => 
console.log("Hubo un error al conectarnos a la BBDD", { err })
);

const corsOptions = {
  origin: ['https://bocatto-di-pollo.onrender.com', 'http://localhost:5000', 'https://events.mercadopago.com', 'https://www.mercadolibre.com'], // Reemplaza con el dominio correcto de tu aplicación
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Habilita el intercambio de cookies a través de las solicitudes CORS
  optionsSuccessStatus: 204,
};


app.use(morgan('dev'));

// Middleware para configurar las URLs de retorno
app.use((req, res, next) => {
  res.locals.baseUrl = `${req.protocol}://${req.get('host')}`;
  next();
});


app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Configuración para servir archivos estáticos desde la carpeta "static"
app.use('/static', express.static(path.join(__dirname, "../")));
app.use(express.static(path.join(__dirname, "/static")));

app.use(indexRoutes);
app.use(emailsRoutes);
app.use(paymentRoutes);
app.use(productRoutes);




app.listen(PORT, () => {
  console.log("El servidor esta corriendo en el puerto", PORT);
});