
const { token } = require("morgan");
const { productModel } = require("../schemas/schemas.js");
const path = require('path');

if (process.env.NODE_ENV !== 'production') {
    // En entorno de desarrollo, carga las variables de entorno desde el archivo .env
    require('dotenv').config({ path: '../../.env' });
}


// HTML products.html
const productHTML = (req, res) => {
    const filePath = path.join(__dirname, '../../', 'products.html');
    res.sendFile(filePath);
}

// HTML stockControl.html
const stockControl = (req, res) => {
    const filePath = path.join(__dirname, '../../', 'stockControl.html');
    res.sendFile(filePath);
}





// Mostrar todos los productos
const products = (req, res) => {
    productModel.find({})
        .then(result => {
            res.json({ result });

        }).catch(err => {
            // Manejar el error aquí
            console.error(err);
            res.status(500).json({ error: "Error interno del servidor" });
        });
};




// Agregar un producto nuevo
const addProduct = (req, res) => {
    const data = req.body
    productModel.create(data).then(result => {
        res.send({ data: result })
    }).catch(err => {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    });
}

// Eliminar un producto nuevo
const deleteProduct = (req, res) => {
    const id = req.params.id;

    productModel.findByIdAndDelete(id).then((deletedProduct) => {
        res.status(200).json({ ok: true, data: deletedProduct })
    }).catch(() => {
        res.status(400).json({ ok: false, message: 'Producto no encontrado.' });
    });
}

const updateProduct = (req, res) => {
    const id = req.params.id;

    productModel.findByIdAndUpdate(id, req.body).then((update) => {
        res.status(200).json({ ok: true, data: update })

    }).catch(() => {
        res.status(400).json({ ok: false, message: 'Producto no encontrado.' });
    });
}



module.exports = {
    products, addProduct, productHTML, deleteProduct, updateProduct, stockControl
};