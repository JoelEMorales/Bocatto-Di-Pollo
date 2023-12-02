// Add SDK credentials
// REPLACE WITH YOUR PUBLIC KEY AVAILABLE IN: https://developers.mercadopago.com/panel
const mercadopago = new MercadoPago("TEST-ebbfc610-588c-4441-b04b-b8967957220e", {
    locale: 'es-AR' // The most common are: 'pt-BR', 'es-AR' and 'en-US'
});


// Recupera el carrito del LocalStorage

// const storedCart = JSON.parse(localStorage.getItem("carrito")) || [];



// CODIGO DE LA PAGINA RESUMEN_COMPRA.HTML
// PAGINA FINAL - RESUMEN COMPRA




// Variable para sumar el precio total
let precioTotal = 0;


function cargar_resumen() {

    console.log("cargar_resumen: Iniciando...");

    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    // Objeto para rastrear la cantidad de cada producto
    const productosAgrupados = {};

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
    instruccionesTextarea.id = "special";
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
    fraseInformacion.textContent = "Pago realizado en el local fisico";
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

    // Ubicacion
    const masInformacion = document.createElement("p");
    masInformacion.style.textAlign = "left";
    masInformacion.style.paddingTop = "10px";
    masInformacion.innerHTML = "Balcarce, 803, San Luis, Argentina";
    colDivProcesar.appendChild(masInformacion);

    // Nombre del comprador
    const name = document.createElement("input");
    name.style.paddingTop = "10px";
    name.style.width = "100%"; // Utilizamos el 100% del ancho disponible
    name.style.boxSizing = "border-box"; // Incluimos el padding y el borde en el ancho total
    name.type = "text";
    name.placeholder = "Indique su nombre completo para preparar su pedido";
    name.id = "namecliente";
    colDivProcesar.appendChild(name);

    // Establecemos un tamaño de fuente relativo para que se ajuste mejor en pantallas más pequeñas
    name.style.fontSize = "16px"; // Puedes ajustar este valor según tus necesidades

    // Agregar un evento de escucha al campo de entrada del nombre
    name.addEventListener("blur", function () {
        if (name.value.trim() === "") {
            alert("Por favor, ingrese su nombre para continuar.");
        }
    });

    // Numero de telefono del comprador
    const tel = document.createElement("input");
    tel.style.paddingTop = "10px";
    tel.style.marginTop = "10px";
    tel.style.width = "100%"; // Utilizamos el 100% del ancho disponible
    tel.style.boxSizing = "border-box"; // Incluimos el padding y el borde en el ancho total
    tel.type = "text";
    tel.placeholder = "Indique su número de teléfono";
    tel.id = "telefono";
    colDivProcesar.appendChild(tel);

    // Establecemos un tamaño de fuente relativo para que se ajuste mejor en pantallas más pequeñas
    tel.style.fontSize = "16px"; // Puedes ajustar este valor según tus necesidades

    // Agregar un evento de escucha al campo de entrada de telefono
    tel.addEventListener("blur", function () {
        if (tel.value.trim() === "") {
            alert("Por favor, ingrese su telefono para continuar.");
        }
    });

    // Boton finalizar compra
    const procesar_mercadoPago = document.createElement("button");
    // procesar_mercadoPago.style.paddingTop = "5px";
    procesar_mercadoPago.style.marginTop = "30px";
    procesar_mercadoPago.className = "btn btn-primary btn-lg btn-block";
    procesar_mercadoPago.id = "checkout-btn";
    procesar_mercadoPago.innerHTML = "Finalizar pedido";
    colDivProcesar.appendChild(procesar_mercadoPago);

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
    // Asigna la función finalizarCompraClick como el manejador del evento onclick
    procesar_mercadoPago.onclick = generarPreferencia;

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


function generarPreferencia() {

    // Código relacionado con Mercado Pago y Bricks aquí

    // Obtener el botón de pago fuera del bucle
    const checkoutButton = document.getElementById("checkout-btn");

    if (checkoutButton) {

        // Manejar llamada al backend y generar preferencia.
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

    } else {
        console.error('No se pudo encontrar el botón de checkout');
    }

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
                    onReady: () => { },
                },
            }
        );
    };
    window.checkoutButton = renderComponent(bricksBuilder);
}