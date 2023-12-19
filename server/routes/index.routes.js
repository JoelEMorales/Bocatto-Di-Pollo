
const express = require("express");

const indexRoutes = express.Router();

const indexControllers = require('../controllers/index.controllers');


indexRoutes.get("/", indexControllers.archivoPrincipal);

// indexRoutes.get("/productos", archivoPrincipal);

indexRoutes.get("/galeria", indexControllers.archivoPrincipal);

indexRoutes.get("/compra", indexControllers.compraHtml);

indexRoutes.get("/resumen_compra", indexControllers.resumenHtml);

indexRoutes.get("/allProducts", indexControllers.productsHTML);

module.exports = indexRoutes;

