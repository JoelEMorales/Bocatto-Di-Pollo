const express = require("express");
const path = require("path");

const productRoutes = express.Router();

const exportProductsControllers = require('../controllers/product.controllers');

const jwt = require('jsonwebtoken');
const app = express();
const cookieParser = require('cookie-parser');



productRoutes.get('/stockControl', exportProductsControllers.stockControl);

productRoutes.get('/allProducts', exportProductsControllers.productHTML);

productRoutes.get('/showProducts', exportProductsControllers.products);

// Middleware para verificar y validar el token
const verifyToken = (req, res, next) => {
    // Obtener el token del encabezado de autorización
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Token de acceso no proporcionado' });
    }

    try {
        // Verificar el token utilizando la clave secreta
        const validPayload = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = validPayload; // Agregar el usuario decodificado a la solicitud para su uso posterior
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Token de acceso no válido' });
    }
};

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Credentials', true);
    next();
});
app.use(cookieParser());




productRoutes.post('/addProduct', verifyToken, exportProductsControllers.addProduct);

productRoutes.delete('/deleteProduct/:id', verifyToken, exportProductsControllers.deleteProduct);

productRoutes.put('/updateProduct/:id', verifyToken, exportProductsControllers.updateProduct);

module.exports = productRoutes;