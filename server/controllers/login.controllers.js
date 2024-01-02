const emailAndPassword = require("./login.js")
const { usersModel } = require("../../server/schemas/schemas.js");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { use } = require("../routes/payment.routes.js");

if (process.env.NODE_ENV !== 'production') {
    // En entorno de desarrollo, carga las variables de entorno desde el archivo .env
    require('dotenv').config({ path: '../../.env' });
}

const authenticateUser = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) return res.sendStatus(400);

    try {
        const user = await emailAndPassword(email, password);

        const tokenPayload = {
            _id: user._id,
            name: user.name,
            email: user.email
        };

        const token = jwt.sign(tokenPayload, process.env.JWT_SECRET_KEY);

        res.cookie('jwt', token)

        return res.status(200).json({ success: true, data: tokenPayload });

    } catch (err) {
        return res.status(401).json({ success: false, error: err.message });
    }
};



// // Agregar un producto nuevo
// const addUser = (req, res) => {
//     const data = req.body
//     usersModel.create(data).then(result => {
//         res.send({ data: result })
//     }).catch(err => {
//         console.error(err);
//         res.status(500).send("Error interno del servidor");
//     });
// }

// Agregar un usuario nuevo
const addUser = async (req, res) => {
    try {
        const data = req.body;
        const user = new usersModel(data);
        await user.save();
        res.send({ data: user });
    } catch (error) {
        console.error(error);
        res.status(500).send("Error interno del servidor");
    }
};



// Mostrar todos los productos
const users = (req, res) => {
    usersModel.find({}).then(result => {
        res.send({
            result
        });
    }).catch(err => {
        // Manejar el error aquí
        console.error(err);
        res.status(500).send("Error interno del servidor");
    });
}

module.exports = { authenticateUser, addUser, users };




