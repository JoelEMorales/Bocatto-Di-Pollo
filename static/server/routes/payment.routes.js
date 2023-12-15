
const express = require("express");

const paymentRoutes = express.Router();

const paymentControllers = require('../controllers/payment.controllers');

const createPreference = paymentControllers.createPreference; 
const successRedirection = paymentControllers.success;
const configClientMercadopago = paymentControllers.configClientMercadopago;
const feedback = paymentControllers.feedback;
const receiveWebhook = paymentControllers.receiveWebhook




// Generar preferencia de pago
paymentRoutes.post("/create_preference", createPreference);

// Configuración de Mercado Pago en el lado del servidor para clave publica de client
paymentRoutes.get("/configuracion-mercadopago",configClientMercadopago);

paymentRoutes.get('/success', successRedirection);

paymentRoutes.get('/feedback', feedback);

paymentRoutes.post('/nofication', receiveWebhook);



// paymentRoutes.post('/webhook', (req, res) => res.send('receiveWebhook'));


module.exports = paymentRoutes;









