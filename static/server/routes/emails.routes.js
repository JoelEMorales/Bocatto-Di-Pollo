const express = require("express");
const path = require("path");

const emailsRoutes = express.Router();

const emailsCredenciales = require('../controllers/emails.controllers');


// Endpoint para obtener credenciales de Email.js
emailsRoutes.get("/credenciales-emailjs", emailsCredenciales);

module.exports = emailsRoutes;