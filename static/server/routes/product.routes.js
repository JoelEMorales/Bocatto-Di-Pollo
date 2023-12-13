const express = require("express");
const path = require("path");

const productRoutes = express.Router();

const products = require('../controllers/product.controllers');


productRoutes.get('/productosPrice', products);

module.exports = productRoutes;