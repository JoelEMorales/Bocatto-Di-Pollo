
// ARCHIVO index.JS UBICADO EN : /home/joelmorles/Documents/PROYECTO-GITHUB/Bocatto-Di-Pollo/static/client/index.js


export { mostrardatosCliente,nameGlobal, telGlobal, intEspecialGlobal, datosCliente };
// import { obtenerProductosDesdeResumen } from "../javascript/enviarMail";

let intEspecialGlobal = "";
let nameGlobal = "";
let telGlobal = "";


// Inicialización de datosCliente desde localStorage
let datosCliente = JSON.parse(localStorage.getItem("datosCliente")) || {};

function mostrardatosCliente(nombre, telefono, instrucciones) {
    console.log("DATOS DEL CLIENTE: Nombre-" + nombre + ", Teléfono-" + telefono + ", Instrucciones-" + instrucciones);

    datosCliente = {nombre, telefono, instrucciones}
    localStorage.setItem("datosCliente", JSON.stringify(datosCliente));

    return datosCliente;
}


function obtenerProductosDesdeResumen() {

    let productos = [];
    const productosDivs = document.querySelectorAll(".filaResumen"); // Suponiendo que los productos se almacenan en elementos con la clase 'row'

    productosDivs.forEach(function (productoDiv) {
        var nombre = productoDiv.querySelector(".nombreProducto").textContent; // Suponiendo que el nombre se encuentra en un elemento con la clase 'nombreProducto'
        var cantidad = parseInt(
            productoDiv.querySelector(".cantidadProducto").textContent
        ); // Suponiendo que la cantidad se encuentra en un elemento con la clase 'cantidadProducto'
        var valor = productoDiv.querySelector(".valorProducto").textContent; // Suponiendo que el valor se encuentra en un elemento con la clase 'valorProducto'

        productos.push({
            nombre: nombre,
            cantidad: cantidad,
            valor: valor,
        });
    });

    // Guarda los productos en el localStorage
    localStorage.setItem("productosResumen", JSON.stringify(productos));

    let total = 0;
    // Imprime los datos usando un bucle
    console.log("DATOS GUARDADOS DEL RESUMEN:");
    productos.forEach(function (producto) {
        total += parseInt(producto.valor)
        console.log("Nombre:", producto.nombre);
        console.log("Cantidad:", producto.cantidad);
        console.log("Valor:", producto.valor);
        console.log("total:", total);
        console.log("------------------------");
    });

    return productos;
}


// Add SDK credentials
// REPLACE WITH YOUR PUBLIC KEY AVAILABLE IN: https://developers.mercadopago.com/panel
const mercadopago = new MercadoPago("MP_ACCESS_TOKEN", {
    locale: 'es-AR' // The most common are: 'pt-BR', 'es-AR' and 'en-US'
});



// Variable para sumar el precio total
let precioTotal = 0;



window.cargar_resumen = function () {

    console.log("cargar_resumen: Iniciando...");

    const storedCart = JSON.parse(localStorage.getItem("carrito")) || [];

    // Objeto para rastrear la cantidad de cada producto
    const productosAgrupados = {};

    // Agrupa los productos y suma sus cantidades
    storedCart.forEach(function (producto) {
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

    // Actualizar el contenido dentro del div 'contenido_resumen'
    const contenidoDiv = document.getElementById("contenido_resumen");

    // Log para verificar si el elemento se encontró
    console.log("Elemento contenido_resumen:", contenidoDiv);

    if (!contenidoDiv) {
        console.error("No se encontró el elemento con id 'contenido_resumen'");
        return;
    } else {
        contenidoDiv.innerHTML = ""; // Limpia cualquier contenido previo
    }



    console.log("Datos de productosAgrupados:", productosAgrupados);


    // Recorre los productos agrupados y muestra la cantidad total
    for (const clave in productosAgrupados) {
        const producto = productosAgrupados[clave];
        const productoDiv = document.createElement("div");
        productoDiv.style.height = "100%";
        productoDiv.className = "row filaResumen";

        // Agrega la imagen
        const imgDiv = document.createElement("div");
        imgDiv.className = "col";
        const img = document.createElement("img");
        img.src = producto.imagen; // Utiliza la ruta de la imagen del producto desde el carrito
        // Agrega clases de Bootstrap para controlar el tamaño de la imagen
        img.className = "img-fluid"; // Esta clase hace que la imagen sea responsive y ocupe el 100% del ancho
        // Agrega clases específicas para pantallas grandes y medianas
        imgDiv.classList.add("col-lg-1"); // En pantallas grandes, la imagen ocupará el 50%
        imgDiv.appendChild(img);
        productoDiv.appendChild(imgDiv);

        // Agrega el campo de nombre y aclaración (si existe)
        const nombreDiv = document.createElement("div");
        nombreDiv.style.paddingTop = "10px"; // Ajusta el espaciado superior
        nombreDiv.className = "col";
        nombreDiv.innerHTML =
            '<p style="text-align: left;" class="nombreProducto">' +
            producto.nombre +
            (producto.aclaracion ? " | " + producto.aclaracion : "") +
            "</p>";
        productoDiv.appendChild(nombreDiv);

        // Agrega la cantidad del producto
        const cantidadDiv = document.createElement("div");
        cantidadDiv.style.paddingTop = "10px"; // Ajusta el espaciado superior
        cantidadDiv.className = "col";
        cantidadDiv.innerHTML =
            '<p><span class="cantidadProducto">' +
            producto.cantidad +
            "</span> kg</p>";
        productoDiv.appendChild(cantidadDiv);

        // Agrega la valor del producto
        const valorDiv = document.createElement("div");
        valorDiv.style.paddingTop = "10px"; // Ajusta el espaciado superior
        valorDiv.className = "col";

        // Utiliza parseFloat para convertir producto.valor en un número (asegurándote de que producto.valor sea una cadena)
        const valorNumerico = parseFloat(producto.valor);

        // Verifica si valorNumerico es un número válido (no es NaN)
        if (!isNaN(valorNumerico)) {
            // Si es un número válido, muestra el valor con el signo de "$" en el párrafo
            valorDiv.innerHTML =
                '<p>$<span class="valorProducto">' + valorNumerico + "</span></p>";
        } else {
            // Si no es un número válido, muestra un mensaje de error o un valor predeterminado
            valorDiv.innerHTML = '<p class="valorProducto">Valor no válido</p>';
        }

        productoDiv.appendChild(valorDiv);

        // Agrega un botón para quitar el producto
        const quitarDiv = document.createElement("div");
        quitarDiv.style.paddingTop = "10px"; // Ajusta el espaciado superior
        quitarDiv.className = "col";
        quitarDiv.innerHTML =
            "<p><button onclick=\"quitarProducto('" +
            clave +
            "')\">Quitar</button></p>";
        productoDiv.appendChild(quitarDiv);

        contenidoDiv.appendChild(productoDiv);

        // Agrega una línea horizontal después de cada producto
        const hr = document.createElement("hr");
        hr.style.backgroundColor = "gray";
        hr.style.height = "0.5px";
        contenidoDiv.appendChild(productoDiv);
        contenidoDiv.appendChild(hr);
    }

    // Fila para instrucciones, pago y recogida
    const divGlobal = document.createElement("div");
    divGlobal.className = "row";
    contenidoDiv.appendChild(divGlobal);

    // Columna para instrucciones especiales
    const colDivInstruccionesEspeciales = document.createElement("div");
    colDivInstruccionesEspeciales.className = "col";
    divGlobal.appendChild(colDivInstruccionesEspeciales);

    // Agrega un campo para instrucciones especiales
    const instruccionesLabel = document.createElement("p");
    instruccionesLabel.style.textAlign = "left";
    instruccionesLabel.textContent = "Instrucciones especiales";
    colDivInstruccionesEspeciales.appendChild(instruccionesLabel);

    const instruccionesTextarea = document.createElement("textarea");
    instruccionesTextarea.className = "form-control";
    instruccionesTextarea.style.width = "100%"; // Utilizamos el 100% del ancho disponible
    instruccionesTextarea.style.height = "100%"; // Utilizamos el 100% del alto disponible
    instruccionesTextarea.style.boxSizing = "border-box"; // Incluimos el padding y el borde en el ancho total
    instruccionesTextarea.id = "intEspecial";
    instruccionesTextarea.name = "text";
    instruccionesTextarea.placeholder =
        "Escribe aquí las instrucciones especiales";
    colDivInstruccionesEspeciales.appendChild(instruccionesTextarea);

    // Establecemos un tamaño de fuente relativo para que se ajuste mejor en pantallas más pequeñas
    instruccionesTextarea.style.fontSize = "16px"; // Puedes ajustar este valor según tus necesidades

    // Columna para precesar pedido
    const colDivProcesar = document.createElement("div");
    colDivProcesar.className = "col";
    divGlobal.appendChild(colDivProcesar);

    // Intrucciones de pago y recogida
    const fraseInformacion = document.createElement("p");
    fraseInformacion.style.textAlign = "right";
    fraseInformacion.style.paddingTop = "10px";
    fraseInformacion.textContent = "Segunda mitad del pago se realizara en el local fisico";
    colDivProcesar.appendChild(fraseInformacion);

    // Intrucciones de recogida
    const DivIntrucciones = document.createElement("div");
    DivIntrucciones.style =
        "border: black solid 1px; padding: 20px; display: flex; flex-direction: column; align-items: center; justify-content: center; width: 200px; height: 100px;";
    colDivProcesar.appendChild(DivIntrucciones);

    const divIcono = document.createElement("div");
    divIcono.innerHTML = '<i class="fa-solid fa-shop fa-2xl"></i>';
    DivIntrucciones.appendChild(divIcono);

    const divText = document.createElement("div");
    divText.style.paddingTop = "10px";
    divText.innerHTML = "Recogida en la tienda";
    DivIntrucciones.appendChild(divText);

    // Mas instrucciones
    const masInformacionHorario = document.createElement("p");
    masInformacionHorario.style.textAlign = "left";
    masInformacionHorario.style.paddingTop = "10px";
    masInformacionHorario.innerHTML =
        "- Dias de semana: entre las 7:30 a 14:30 y de 17:30 a 22:00<br>- Sabados: entre las 7:30 a 14:30 y de 17:30 a 22:00";
    colDivProcesar.appendChild(masInformacionHorario);

    // Ubicacion
    const masInformacionUbicacion = document.createElement("p");
    masInformacionUbicacion.style.textAlign = "left";
    masInformacionUbicacion.style.paddingTop = "10px";
    masInformacionUbicacion.innerHTML = "Balcarce, 803, San Luis, Argentina";
    colDivProcesar.appendChild(masInformacionUbicacion);

    function crearCampoEntrada(tipo, placeholder, pattern, title, required, id) {
        const input = document.createElement("input");
        input.style.paddingTop = "10px";
        input.style.marginTop = "10px";
        // Utilizamos el 100% del ancho disponible
        input.style.width = "100%";
        input.style.boxSizing = "border-box";
        input.type = tipo;
        input.placeholder = placeholder;
        input.pattern = pattern;
        input.title = title;
        input.required = required;
        input.id = id;
        input.style.fontSize = "16px";

        colDivProcesar.appendChild(input);
    }

    // Crear campo de nombre
    crearCampoEntrada("text", "Indique su nombre completo para preparar su pedido", "^\d+$", "Solo se permiten letras.", true, "namecliente");

    // Crear campo de número de teléfono
    crearCampoEntrada("text", "Indique su número de teléfono", "\d+", "Solo se permiten números.", true, "telCLiente");

    // Boton finalizar compra
    const procesar_mercadoPago = document.createElement("button");
    // procesar_mercadoPago.style.paddingTop = "5px";
    procesar_mercadoPago.style.marginTop = "30px";
    procesar_mercadoPago.className = "btn btn-primary btn-lg btn-block";
    procesar_mercadoPago.id = "checkout-btn";
    procesar_mercadoPago.innerHTML = "Finalizar pedido";
    colDivProcesar.appendChild(procesar_mercadoPago);

    // Verifica el nombre y telefono antes de enviar el correo electrónico
    function finalizarCompraClick() {
        nameGlobal = document.getElementById("namecliente").value;
        telGlobal = document.getElementById("telCLiente").value;
        intEspecialGlobal = document.getElementById("intEspecial").value;

        let mensaje = "";

        if (nameGlobal.trim() === "" && telGlobal.trim() === "") {
            mensaje += "Por favor, ingrese su nombre y telefono.";
            Swal.fire(mensaje);

        } else if (!/^[A-Za-z\s]+$/.test(nameGlobal.trim())) {
            mensaje += "Por favor, ingrese su nombre correctamente para continuar.";
            Swal.fire(mensaje);

        } else if (!/^\d+$/.test(telGlobal.trim())) {
            mensaje += "Por favor, ingrese su número de teléfono correctamente para continuar.";
            Swal.fire(mensaje);

        } else {

            console.log(nameGlobal, telGlobal, intEspecialGlobal);

            mostrardatosCliente(nameGlobal, telGlobal, intEspecialGlobal);

            obtenerProductosDesdeResumen();
            // Llama a las funciones si el nombre y teléfono son válidos
            generarPreferencia();
        }
    }

    // Asigna la función finalizarCompraClick como el manejador del evento onclick
    procesar_mercadoPago.onclick = finalizarCompraClick;

    // DIV MERCADO PAGO button-checkout
    const div_button_checkout = document.createElement("div");
    div_button_checkout.id = "button-checkout";
    colDivProcesar.appendChild(div_button_checkout);

    // DIV MERCADO PAGO button-checkout
    const div_wallet_container = document.createElement("div");
    div_wallet_container.id = "wallet_container";
    colDivProcesar.appendChild(div_wallet_container);




    console.log("cargar_resumen: Finalizado.");
}

// Código relacionado con Mercado Pago y Bricks aquí
function generarPreferencia() {
    const checkoutButton = document.getElementById("checkout-btn");

    // Manejar llamada al backend y generar preferencia.
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
};


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
                    onReady: () => {
                        // SweetAlert code
                        Swal.fire({
                            title: "Advertencia de pago!",
                            text: "Te informamos que se realizará la mitad del pago como seña a través de nuestra web. El restante lo podrás abonar al recoger tu pedido en nuestra tienda física. ¡Gracias por tu comprensión y confianza!",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Seguir con el pago",
                            cancelButtonText: "Cancelar"

                        }).then((result) => {
                            if (!result.isConfirmed) {
                                Swal.fire({
                                    title: "Proceso de pago anulado!",
                                    text: "Se lo redigirá a la pagina de inicio",
                                    icon: "success"
                                }).then(() => {
                                    // Redirige a la página principal después de mostrar el mensaje
                                    cargarPagina("principal");
                                });
                            }
                        });
                    },
                },
            }
        );
    };
    window.checkoutButton = renderComponent(bricksBuilder);
}




























// document.addEventListener("DOMContentLoaded", function () {
//     if (window.location.href.includes("http://localhost:5000/success")) {
//         // Realiza la solicitud al servidor solo si la URL contiene "/success"
//         fetch('http://localhost:5000/success')
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 // Realizar acciones en el cliente según la respuesta del servidor
//                 if (data.success) {
//                     // Redirección
//                     window.location.href = 'http://localhost:5000';

//                     // Notificar al cliente sobre el éxito del pago aquí
//                     Swal.fire({
//                         position: "center",
//                         title: "¡Pago exitoso!",
//                         text: "Gracias por tu compra.",
//                         icon: "success",
//                         showConfirmButton: false,
//                         timer: 3000
//                     });

//                     // Enviar un correo electrónico al vendedor
//                     enviar_email();

//                     // Limpiar el localStorage
//                     localStorage.clear();
//                 }
//             })
//             .catch(error => {
//                 console.error('Error:', error);
//                 // Puedes manejar el error de manera apropiada, por ejemplo, mostrando un mensaje al usuario
//                 Swal.fire({
//                     position: "center",
//                     title: "Error",
//                     text: "Ocurrió un error al procesar el pago.",
//                     icon: "error",
//                     showConfirmButton: true
//                 });
//             });
//     }
// });



