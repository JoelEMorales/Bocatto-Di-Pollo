
const express = require("express");

const indexRoutes = express.Router();

const indexControllers = require('../controllers/index.controllers');

const archivoPrincipal = indexControllers.archivoPrincipal;
const resumenHtml = indexControllers.resumenHtml;
const compraHtml = indexControllers.compraHtml;


indexRoutes.get("/", archivoPrincipal);

indexRoutes.get("/productos", archivoPrincipal);

indexRoutes.get("/galeria", archivoPrincipal);

indexRoutes.get("/compra", compraHtml);

indexRoutes.get("/resumen_compra", resumenHtml);

module.exports = indexRoutes;

