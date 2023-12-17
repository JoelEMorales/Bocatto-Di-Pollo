// import { preferences } from "mercadopago";

// const mp = new MercadoPago("YOUR_PUBLIC_KEY", {
//     locale: "es-AR",
// });

// document.getElementById("checkout-btn").addEventListener("click", async () => {
//     try {
//         const orderData = {
//             quantity: 1,
//             description: "Total a pagar",
//             price: precioTotal / 2,
//         };

//         const response = await fetch(`${window.location.origin}/create_preference`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body:JSON.stringify(orderData),
//         });

//         const preference = await response.json();
//         createCheckoutButton(preference.id)
//     } catch(error){
//         alert("error:(")
//     }
// })

// const createCheckoutButton = (preferenceId) => {
//     const bricksBuilder = mp.bricks();

//     const renderComponent = async (bricksBuilder) => {
//         console.log("Inicializando MercadoPago Bricks...");

//         await bricksBuilder.create("wallet","button-checkout",{
//                 initialization: {
//                     preferenceId: preferenceId,
//                 },
//                 callbacks: {
//                     onError: (error) => console.error(error),
//                     onReady: () => {
//                         // SweetAlert code
//                         Swal.fire({
//                             title: "Advertencia de pago!",
//                             text: "Te informamos que se realizará la mitad del pago como seña a través de nuestra web. El restante lo podrás abonar al recoger tu pedido en nuestra tienda física. ¡Gracias por tu comprensión y confianza!",
//                             icon: "warning",
//                             showCancelButton: true,
//                             confirmButtonColor: "#3085d6",
//                             cancelButtonColor: "#d33",
//                             confirmButtonText: "Seguir con el pago",
//                             cancelButtonText: "Cancelar"

//                         }).then((result) => {
//                             if (!result.isConfirmed) {
//                                 Swal.fire({
//                                     title: "Proceso de pago anulado!",
//                                     text: "Se lo redigirá a la pagina de inicio",
//                                     icon: "success"
//                                 }).then(() => {
//                                     // Cambiar la ubicación a la página de compra
//                                     window.location.href = '/';
//                                 });
//                             }
//                         });
//                     },
//                 },
//             }
//         );
//     };

//     renderComponent();

// }