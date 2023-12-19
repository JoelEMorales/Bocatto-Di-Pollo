
const { send } = require("emailjs-com");
const productModel = require("../schemas/schemas.js");
const path = require('path');


// HTML
const productHTML = (req, res) => {
    const filePath = path.join(__dirname, '../../', 'products.html');
    res.sendFile(filePath);
}

// Mostrar todos los productos
const products = (req, res) => {
    productModel.find({}).then(result => {
        res.send({
            result
        });
    }).catch(err => {
        // Manejar el error aquí
        console.error(err);
        res.status(500).send("Error interno del servidor");
    });
}

// Agregar un producto nuevo
const addProducts = (req, res) => {
    const data = req.body
    productModel.create(data).then(result => {
        res.send({ data: result })
    }).catch(err => {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    });
}

// Eliminar un producto nuevo
const deleteProducts = (req, res) => {
    const id = req.params.id;

    productModel.findByIdAndDelete(id).then((deletedProduct) => {
        res.status(200).json({ ok: true, data: deletedProduct })
    }).catch(() => {
        res.status(400).json({ ok: false, message: 'Producto no encontrado.' });
    });
}

const updateProducts = (req, res) => {
    const id = req.params.id;

    productModel.findByIdAndUpdate(id, req.body).then((update) => {
        res.status(200).json({ ok: true, data: update })

    }).catch(() => {
        res.status(400).json({ ok: false, message: 'Producto no encontrado.' });
    });
}



module.exports = {
    products, addProducts, productHTML, deleteProducts, updateProducts
};