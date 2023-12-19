const express = require("express");
const path = require("path");

const productRoutes = express.Router();

const exportProductsControllers = require('../controllers/product.controllers');

productRoutes.get('/productosP', exportProductsControllers.products);

productRoutes.post('/addProducts', exportProductsControllers.addProducts);

productRoutes.get('/allProducts', exportProductsControllers.productHTML);

productRoutes.delete('/deleteProduct/:id', exportProductsControllers.deleteProducts);

productRoutes.put('/updateProduct/:id', exportProductsControllers.updateProducts);

module.exports = productRoutes;