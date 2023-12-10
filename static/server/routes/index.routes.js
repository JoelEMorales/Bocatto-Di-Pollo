
const express = require("express");

const indexRoutes = express.Router();

const archivoPrincipal = require('../controllers/index.controllers');

indexRoutes.get("/", archivoPrincipal);

module.exports = indexRoutes;

