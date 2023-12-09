
//-----------------------------------------------------------------------------------------------------------------------------------------------------------

// CODIGO PARA PAGINA success.js

//-----------------------------------------------------------------------------------------------------------------------------------------------------------




// Importa la función desde enviarMail.js
import { Email } from '/static/javascript/enviarMail.js';

if (window.location.href.includes("/success")) {

    // Puedes notificar al cliente sobre el éxito del pago aquí
    Swal.fire({
        position: "center",
        title: "¡Pago exitoso!",
        text: "Gracias por tu compra.",
        icon: "success",
        showConfirmButton: true
    }).then((result) => {
        if (result.isConfirmed) {

            // Envia email con los datos del comprador y de los productos
            Email();

            // Limpia el localStorage
            localStorage.clear();

            // Espera 3 segundos (1000 milisegundos) antes de redirigir
            setTimeout(() => {
                // Redirige a la página de inicio
                window.location.href = '/';
            }, 1000);
        }
    });
}






























// // Evento que se dispara después de un pago exitoso
// window.addEventListener('DOMContentLoaded', (event) => {
//     // Verifica si la URL actual contiene "/success" para determinar si el pago fue exitoso
//     if (window.location.href.includes("/success")) {
//         enviar_email()
//         // Limpia el localStorage
//         localStorage.clear();
//     }
// });

// function volverALocalhost() {
//     // Redirige a la página principal
//     window.location.href = 'http://localhost:5000';
// }






