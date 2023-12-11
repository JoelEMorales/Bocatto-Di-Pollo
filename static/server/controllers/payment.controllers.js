if (process.env.NODE_ENV !== 'production') {
    // En entorno de desarrollo, carga las variables de entorno desde el archivo .env
    require('dotenv').config({ path: '../../../.env' });
}

const path = require("path");
const mercadopago = require("mercadopago");




const createPreference = (req, res) => {

    mercadopago.configure({
        access_token: process.env.MP_ACCESS_TOKEN
    });

    let preference = {
        items: [
            {
                title: req.body.description,
                unit_price: Number(req.body.price),
                quantity: Number(req.body.quantity),
            }
        ],
        back_urls: {
            "success": `${res.locals.baseUrl}/success`,
            "failure": res.locals.baseUrl,
            "pending": res.locals.baseUrl,
        },
        // auto_return: "approved", // Auto regreso si el pago fue exitoso
    };

    mercadopago.preferences.create(preference)
        .then(function (response) {
            res.json({
                id: response.body.id
            });
        })
        .catch(function (error) {
            console.error('Error en la creación de preferencia:', error);
            res.status(500).json({ error: 'Error en la creación de preferencia' });
        });
};

// Configuración de Mercado Pago en el lado del servidor para clave publica de client
const configClientMercadopago = (req, res) => {
    // Puedes enviar la configuración necesaria al cliente
    res.json({
        publicKey: process.env.MP_PUBLIC_KEY, // Debes usar tu clave pública aquí
        locale: "es-AR",
    });
}

// Luego de pago realizado redirigir a success.html
const success = (req, res) => {
    res.sendFile(path.join(__dirname, "../../../", "success.html"));
}

const feedback = (req, res) => {
    res.json({
        Payment: req.query.payment_id,
        Status: req.query.status,
        MerchantOrder: req.query.merchant_order_id
    });
}





// Exportar todas las funciones
module.exports = {
    createPreference,
    configClientMercadopago,
    success,
    feedback
};

















// const createOrder = async (req, res) => {

//     mercadopago.configure({
//         access_token: process.env.MP_ACCESS_TOKEN
//     });

//     const result = await mercadopago.preferences.create({
//         items: [
//             {
//                 title: "compu",
//                 unit_price: 10,
//                 quantity: 1,
//                 currency_i: "ARG"
//             }
//         ],
//         back_urls: {
//             "success": 'http://localhost:5000/success',
//             "failure": 'http://localhost:5000',
//             "pending": 'http://localhost:5000',
//         },
//         notification_url: 'http://localhost:5000/webhook',
//     })

//     console.log(result);

//     res.send('creando orden');
// }












// const receiveWebhook = async (req, res) =>{

//     console.log(req.query);
//     res.send("webhook");
// }

