
// ARCHIVO enviarMail.JS UBICADO EN : /joelmorles/Documents/PROYECTO-GITHUB/Bocatto-Di-Pollo/static/javascript/enviarMail.js


//-----------------------------------------------------------------------------------------------------------------------------------------------------------

// CODIGO PARA TERMINAR COMPRA Y ENVIAR EMAIL

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

// Variable para credenciales de Email.js
let CREDENCIALES_EMAILJS;
let service;
let template;

fetch("/credenciales-emailjs").then(response => response.json()).then(config => {
    CREDENCIALES_EMAILJS = config.credencialEmail
    service = config.serviceID
    template = config.templateID
});



// // Exporto la funcion para utilizarla en otros archivos
// function Email() {

//     //recupero los datos del localstorage
//     const cliente = JSON.parse(localStorage.getItem("datosCliente")) || {};
//     const productosGuardados = JSON.parse(localStorage.getItem("productosResumen")) || [];

//     // Precio total de la compra
//     let total = 0;

//     // Configura Email.js con tus credenciales
//     emailjs.init(CREDENCIALES_EMAILJS);



//     // Prepara el contenido del correo
//     let correoContenido = "Nombre del comprador: " + cliente.nombre + "\n\n";

//     correoContenido += "Telefono del cliente: " + cliente.telefono + "\n\n";

//     correoContenido += "Aclaracion: " + cliente.instrucciones + "\n\n";

//     productosGuardados.forEach(function (product) {
//         correoContenido += "Producto: " + product.nombre + "\n";
//         correoContenido += "Cantidad: " + product.cantidad + "\n";
//         correoContenido += "Precio: $ " + product.valor + "\n\n\n";
//         total += parseInt(product.valor);
//     });

//     correoContenido += "MITAD DEL PRECIO TOTAL: $ " + total / 2 + "\n\n";

//     // Configura el mensaje del correo
//     const email = {
//         to: "joelelianmorales@gmail.com",
//         subject: "Nuevo pedido de Bocatto Di Pollo",
//         message: correoContenido,
//     };

//     // Envía el correo
//     emailjs.send("service_3s9yg03", "template_Bocatto", email).then(
//         function (response) {
//             borrarProductos();
//         },
//         function (error) {
//             alert("Error al enviar el correo: " + error);
//         }
//     );
// }


// // Eliminar resumen una vez enviado el mail
// function borrarProductos() {

//     // Borrar contenido de "carrito", "datosCliente" y "productosResumen" en localStorage
//     localStorage.removeItem("carrito");
//     localStorage.removeItem("datosCliente");
//     localStorage.removeItem("productosResumen");

//     // // Borra los productos del carrito en la página
//     // var carritoDiv = document.getElementById("contenido_resumen");
//     // carritoDiv.innerHTML = ""; // Limpia el contenido del carrito en la página

//     // Opcional: Actualiza cualquier otro estado relacionado con el carrito que puedas tener en tu aplicación
// }



// Enviar email de consulta
const btn = document.getElementById("boton_enviar");

if (!window.location.href.includes("/success")) {
    document.getElementById("form").addEventListener("submit", function (event) {
        event.preventDefault();
        btn.innerHTML = "Cargando...";

        // Configura Email.js con tus credenciales
        emailjs.init(CREDENCIALES_EMAILJS);

        const serviceID = service;
        const templateID = template;

        emailjs.sendForm(serviceID, templateID, this).then(
            () => {
                btn.innerHTML = "Enviar";
                Swal.fire({
                    title: "¡Consulta enviada!",
                    text: "Gracias por su mensaje, nos pondremos en contacto.",
                    icon: "success"
                }).then((result) => {
                    if (result.isConfirmed) {

                        this.reset(); // Esto restablece los campos del formulario

                        // Cierra el modal 
                        setTimeout(() => {
                            // Redirige a la página de inicio
                            window.location.href = '/';
                        }, 500);
                    }
                });
            },
            (err) => {
                btn.innerHTML = "Enviar";
                alert(JSON.stringify(err));
            }
        );
    });
}




