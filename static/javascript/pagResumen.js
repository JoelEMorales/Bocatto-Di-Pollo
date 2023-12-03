//-----------------------------------------------------------------------------------------------------------------------------------------------------------

// CODIGO PARA TERMINAR COMPRA Y ENVIAR EMAIL

//-----------------------------------------------------------------------------------------------------------------------------------------------------------


// document.getElementById('checkout-btn').addEventListener('click', function () {
//     Swal.fire({
//         title: "Advertencia de pago!",
//         text: "Te informamos que se realizará la mitad del pago como seña a través de nuestra web. El restante lo podrás abonar al recoger tu pedido en nuestra tienda física. ¡Gracias por tu comprensión y confianza!",
//         icon: "warning",
//         showCancelButton: true,
//         confirmButtonColor: "#3085d6",
//         cancelButtonColor: "#d33",
//         confirmButtonText: "Seguir con el pago"
//     }).then((result) => {
//         if (result.isConfirmed) {
//             Swal.fire({
//                 title: "Deleted!",
//                 text: "Your file has been deleted.",
//                 icon: "success"
//             });
//         }
//     });
// });


// // Función para verificar el nombre y enviar el correo electrónico
    // function finalizarCompraClick() {
    //     var nameCliente = document.getElementById("namecliente");

    //     if (nameCliente.value.trim() === "") {
    //         alert("Por favor, ingrese su nombre para continuar.");
    //     } else {
    //         // Llama a las funciónes si el nombre no está en blanco
    //         generarPreferencia();
    //         enviar_email(); 

    //     }
    // }