

const path = require("path");

const archivoPrincipal = (req, res, contenido) => {
    const filePath = path.join(__dirname, '../../', 'index.html');
    res.sendFile(filePath);
}

const compraHtml = (req, res) => {
    const filePath = path.join(__dirname, '../../', 'compra.html');
    res.sendFile(filePath);
}

const resumenHtml = (req, res) => {
    const filePath = path.join(__dirname, '../../', 'resumen.html');
    res.sendFile(filePath);
}

const productsHTML = (req, res) => {
    const filePath = path.join(__dirname, '../../', 'products.html');
    res.sendFile(filePath);
}

module.exports = {
    archivoPrincipal,
    resumenHtml,
    compraHtml,
    productsHTML,
};