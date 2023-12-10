const path = require("path");

const archivoPrincipal = (req, res) => {
    const filePath = path.join(__dirname, '../../../', 'index.html');
    res.sendFile(filePath);
}

module.exports = archivoPrincipal;