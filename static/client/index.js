require('dotenv').config({ path: '/home/joelmorles/Documents/PROYECTO-GITHUB/Bocatto-Di-Pollo/.env' });



// Add SDK credentials
// REPLACE WITH YOUR PUBLIC KEY AVAILABLE IN: https://developers.mercadopago.com/panel
const mercadopago = new MercadoPago(process.env.MP_PUBLIC_KEY, {
    locale: 'es-AR' // The most common are: 'pt-BR', 'es-AR' and 'en-US'
});


// Recupera el carrito del LocalStorage
var carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Objeto para rastrear la cantidad de cada producto
const productosAgrupados = {};

// Variable para sumar el precio total
let precioTotal = 0;

// Agrupa los productos y suma sus cantidades
carrito.forEach(function (producto) {
    const clave = producto.nombre + (producto.aclaracion || ""); // Usamos una clave única basada en el nombre y aclaración (si existe)
    if (!productosAgrupados[clave]) {
        productosAgrupados[clave] = {
            nombre: producto.nombre,
            cantidad: producto.cantidad,
            aclaracion: producto.aclaracion,
            imagen: producto.imagen,
            valor: producto.total,
        };
    } else {
        productosAgrupados[clave].cantidad += producto.cantidad;
    }

    // Suma el precio total
    precioTotal += parseFloat(producto.total);
});

// Obtener el botón de pago fuera del bucle
const checkoutButton = document.getElementById("checkout-btn");

// Handle call to backend and generate preference.
checkoutButton.addEventListener("click", function () {

    console.log("Botón de pago clickeado");
    checkoutButton.remove();

    const orderData = {
        quantity: 1,
        description: "Total a pagar",
        price: precioTotal,
    };

    console.log("Datos del pedido:", orderData);

    fetch("http://localhost:5000/create_preference", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (preference) {
            console.log("Preferencia creada:", preference);
            createCheckoutButton(preference.id);
        })
        .catch(function (error) {
            console.error("Error en la solicitud:", error);
            alert("Unexpected error");
            checkoutButton.disabled = false;
        });
});

function createCheckoutButton(preferenceId) {
    // Initialize the checkout
    const bricksBuilder = mercadopago.bricks();

    const renderComponent = async (bricksBuilder) => {
        console.log("Inicializando MercadoPago Bricks...");

        // if (window.checkoutButton) window.checkoutButton.unmount();

        await bricksBuilder.create(
            "wallet",
            "button-checkout", // class/id where the payment button will be displayed
            {
                initialization: {
                    preferenceId: preferenceId,
                },
                callbacks: {
                    onError: (error) => console.error(error),
                    onReady: () => { },
                },
            }
        );
    };
    window.checkoutButton = renderComponent(bricksBuilder);
}