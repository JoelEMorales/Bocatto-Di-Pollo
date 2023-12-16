

if (process.env.NODE_ENV !== 'production') {
    // En entorno de desarrollo, carga las variables de entorno desde el archivo .env
    require('dotenv').config({ path: '../../../.env' });
}

const path = require("path");
const mercadopago = require("mercadopago");
const nodemailer = require('nodemailer');


// Recuperar datos del cliente desde la solicitud
let cliente = {};



// // Eliminar resumen una vez enviado el mail
// function borrarProductos() {

//     // Borrar contenido de "carrito", "datosCliente" y "productosResumen" en localStorage
//     localStorage.removeItem("carrito");
//     localStorage.removeItem("datosCliente");
//     localStorage.removeItem("productosResumen");
// }



const createPreference = (req, res) => {

    const orderData = req.body.orderData || {};
    cliente = req.body.datosCliente || {};

    mercadopago.configure({
        access_token: process.env.MP_ACCESS_TOKEN
    });

    let preference = {
        items: [
            {
                title: orderData.description,
                unit_price: Number(orderData.price),
                quantity: Number(orderData.quantity),
            }
        ],
        back_urls: {
            "success": `${res.locals.baseUrl}/success`,
            "failure": res.locals.baseUrl,
            "pending": res.locals.baseUrl,
        },
        notification_url: "https://bocatto-di-pollo.onrender.com/notification",
        auto_return: "approved", // Auto regreso si el pago fue exitoso
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



const receiveWebhook = async (req, res) => {
    const payment = req.query;

    try {
        if (payment.type === "payment") {
            const data = await mercadopago.payment.findById(payment['data.id']);
            console.log("DATOS DE LA VENTA: ", data);

            // Configuración del transporte de correo electrónico
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.MY_GMAIL, // Reemplaza con tu dirección de correo electrónico
                    pass: process.env.KEY_APP_GMAIL // Reemplaza con tu contraseña
                }
            });

            // Extraer datos necesarios de la respuesta de Mercado Pago
            const venta = {
                idCompra: data.body.id,
                nombre: data.body.payer.first_name,
                apellido: data.body.payer.last_name,
                email: data.body.payer.email,
                productos: data.body.description,
                montoPagado: data.body.transaction_amount,
                tipoPago: data.body.payment_type_id
            };

            let nameCliente = venta.nombre;

            if (nameCliente === null){
                nameCliente = cliente.nombre
            }
            // Crear el cuerpo del correo electrónico con los datos extraídos
            const cuerpoCorreo = `
            <b>ID de Compra:</b> ${venta.idCompra}<br><br>

            <b>Nombre del cliente:</b> ${nameCliente}<br><br>
            
            <b>Apellido del cliente:</b> ${venta.apellido}<br><br>

            <b>Telefono:<b> ${cliente.telefono}<br><br>

            <b>Email:</b> ${venta.email}<br><br>

            <b>Instrucciones:<b> ${cliente.instrucciones}<br><br>

            <b>Prodcutos:</b><br>
            ${venta.productos}<br><br>

            <b>Monto Pagado:</b> ${venta.montoPagado}<br><br>

            <b>Tipo de Pago:</b> ${venta.tipoPago}<br><br>`;


            // Configuración del correo electrónico
            const mailOptions = {
                from: `Bocatto DI Pollo ${process.env.MY_GMAIL}`, // Reemplaza con tu dirección de correo electrónico
                to: process.env.GMAIL_TO, // Reemplaza con la dirección de correo electrónico del destinatario
                subject: 'Nuevo pedido recibido de Bocatto Di Pollo',
                text: `<h1>Hola Claudia, tienes un nuevo pedido</h1>\n`,
                html: `
                <h1>Se ha recibido un nuevo pago con los siguientes detalles:</h1>
                <h3>Detalles del depido:</h3>\n${cuerpoCorreo}`,


            };

            // Envío del correo electrónico
            await transporter.sendMail(mailOptions);
            console.log('Correo electrónico enviado');
        }

        res.sendStatus("200");
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: error.message });
    }
}


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
    feedback,
    receiveWebhook
};
