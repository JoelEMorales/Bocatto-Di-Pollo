// CARRITO DE COMPRA

var productIdCounter = 1; // Inicializar el contador


// Función para actualizar el ícono del carrito
function actualizarIconoCarrito() {
    var listaDeProductos = document.getElementById("div_lista_de_productos");
    var productosEnCarrito = listaDeProductos.querySelectorAll(".w3-row");

    // Verificar si el carrito contiene al menos un producto
    if (productosEnCarrito.length > 0) {
        // Cambiar el ícono a un ícono diferente (por ejemplo, un ícono de carrito lleno)
        document.getElementById("carrito-icono").classList.remove("fa-cart-shopping");
        document.getElementById("carrito-icono").classList.add("fa-cart-plus");
    } else {
        // Si el carrito está vacío, restaurar el ícono original (fa-shopping-cart)
        document.getElementById("carrito-icono").classList.remove("fa-cart-plus");
        document.getElementById("carrito-icono").classList.add("fa-cart-shopping");
    }
}

// Llamar a la función para actualizar el ícono del carrito cuando la página cargue
document.addEventListener("DOMContentLoaded", actualizarIconoCarrito);

// Llamar a la función para actualizar el ícono del carrito cada vez que se agregue o elimine un producto del carrito
document.getElementById("div_lista_de_productos").addEventListener("DOMNodeInserted", actualizarIconoCarrito);
document.getElementById("div_lista_de_productos").addEventListener("DOMNodeRemoved", function () {
    // Esperar un corto período de tiempo para asegurarnos de que el elemento se haya eliminado completamente
    setTimeout(actualizarIconoCarrito, 100);
});


// Función para agregar un producto al carrito
function agregarProductoALaLista() {

    // Obtener información del producto a agregar
    var nombreProducto = document.querySelector("#nameproducto").textContent;
    var cantidad_de_box = parseFloat(document.querySelector("#cant_box").value);

    // Validar si la cantidad es mayor que cero
    if (cantidad_de_box > 0) {

        // Obtener la opción seleccionada (solo si el producto es "Filet De Pechuga y Muslo")
        var opcionSeleccionada = "";
        if (nombreProducto === "Filet De Pechuga y Muslo") {
            var miaclaracion = document.getElementById("opcion_producto");
            opcionSeleccionada = miaclaracion.options[miaclaracion.selectedIndex].textContent;
        }

        // Buscar si el producto ya está en la lista
        var listaDeProductos = document.getElementById("div_lista_de_productos");
        var productos = listaDeProductos.querySelectorAll(".w3-row");
        var productoYaEnLista = false;

        for (var i = 0; i < productos.length; i++) {
            var nombreEnLista = productos[i].querySelector("#namecarrito").textContent;
            var opcionEnLista = productos[i].querySelector("#aclaracion").textContent;
            var cantidadEnLista = parseFloat(productos[i].querySelector("#cantidad_caja").textContent);

            if (nombreProducto === nombreEnLista && opcionSeleccionada === opcionEnLista) {
                productoYaEnLista = true;
                var cantidadAnterior = cantidadEnLista;
                var cantidadNueva = cantidadAnterior + cantidad_de_box;
                productos[i].querySelector("#cantidad_caja").textContent = cantidadNueva;
            }
        }

        // Si el producto no está en la lista, agregarlo
        if (!productoYaEnLista) {
            var nuevoProducto = crearNuevoProducto();
            listaDeProductos.appendChild(nuevoProducto);
            actualizarInfoProducto(nuevoProducto, opcionSeleccionada); // Pasa la opción seleccionada como argumento
        }
    } else {
        // Mostrar mensaje de error
        alert("Debes selecionar una cantidad.");
    }

    // Guardar la lista de productos en localStorage
    localStorage.setItem("listaDeProductos", listaDeProductos.innerHTML);
}



// Función para crear el nuevo elemento de producto
function crearNuevoProducto() {
    var nuevoProducto = document.createElement("div");
    nuevoProducto.innerHTML = obtenerHtmlProducto();
    actualizarInfoProducto(nuevoProducto);
    return nuevoProducto;
}

// Función para obtener el HTML del nuevo producto
function obtenerHtmlProducto() {
    var productId = productIdCounter++; // Obtener el valor actual del contador y luego incrementarlo
    return `
        <div class="w3-row w3-content" data-product-id="${productId}">
            <div style="max-width: 100px; max-height: 150px;" class="w3-padding-small w3-half">
                <img src="" style="width: 100%; height: 100%" id="imgproductocarrito"/>
            </div>
            <div class="w3-half">
                <a class="w3-left" id="namecarrito"></a>
                <br>
                <a class="w3-left" id="cantidadcarrito"></a>
                <br><br>
                <a class="w3-left" id="aclaracion"></a>
                <br><br>
                <a class="w3-left">Cant en kg: </a><a class="w3-left" id="cantidad_caja"> </a>
                <br><br>
                <a class="w3-left" id="valorunidad"></a>
                <button class="w3-button w3-text-white w3-right" type="button" onclick="eliminar_producto(this)">Quitar</button>
            </div>
        </div>`;
}

// Función para actualizar la información del nuevo producto
function actualizarInfoProducto(nuevoProducto, opcionSeleccionada) {

    if (document.querySelector("#nameproducto").textContent == "Filet De Pechuga y Muslo") {
        var miaclaracionProducto = nuevoProducto.querySelector("#aclaracion");

        var miproductocarrito = nuevoProducto.querySelector("#namecarrito");
        var miproducto = document.querySelector("#nameproducto");
        var micantidadcarrito = nuevoProducto.querySelector("#cantidadcarrito");
        var micantidad = document.querySelector("#unidad");
        var micantidad_cajas_carrito = nuevoProducto.querySelector("#cantidad_caja");
        var micantidad_cajas = document.querySelector("#cant_box");
        var mivalornidadcarrito = nuevoProducto.querySelector("#valorunidad");
        var mivalorunidad = document.querySelector("#precio");
        var miimgcarrito = nuevoProducto.querySelector("#imgproductocarrito");
        var miimg = document.getElementById("img2_principal");
        var miimgsrc = miimg.getAttribute("src");

        // Comprobar que existen
        // Asigna la opción seleccionada al elemento correspondiente solo si es "Filet De Pechuga y Muslo"
        if (miaclaracionProducto && opcionSeleccionada) {
            miaclaracionProducto.textContent = opcionSeleccionada;
        }
        if (miproductocarrito && miproducto) {
            miproductocarrito.textContent = miproducto.textContent;
        }
        if (micantidad_cajas_carrito && micantidad_cajas) {
            micantidad_cajas_carrito.textContent = micantidad_cajas.value;
        }
        if (micantidadcarrito && micantidad) {
            micantidadcarrito.textContent = micantidad.textContent;
        }
        if (mivalornidadcarrito && mivalorunidad) {
            mivalornidadcarrito.textContent = parseFloat(mivalorunidad.textContent) * parseFloat(micantidad_cajas.value);
        }
        if (miimgcarrito) {
            miimgcarrito.setAttribute("src", miimgsrc);
        }

        // Guardar la lista de productos en localStorage
        var listaDeProductos = document.getElementById("div_lista_de_productos");
        localStorage.setItem("listaDeProductos", listaDeProductos.innerHTML);

    } else {
        var miproductocarrito = nuevoProducto.querySelector("#namecarrito");
        var miproducto = document.querySelector("#nameproducto");
        var micantidadcarrito = nuevoProducto.querySelector("#cantidadcarrito");
        var micantidad = document.querySelector("#unidad");
        var micantidad_cajas_carrito = nuevoProducto.querySelector("#cantidad_caja");
        var micantidad_cajas = document.querySelector("#cant_box");
        var mivalornidadcarrito = nuevoProducto.querySelector("#valorunidad");
        var mivalorunidad = document.querySelector("#precio");
        var miimgcarrito = nuevoProducto.querySelector("#imgproductocarrito");
        var miimg = document.getElementById("img2_principal");
        var miimgsrc = miimg.getAttribute("src");

        // Comprobar que existen
        if (miproductocarrito && miproducto) {
            miproductocarrito.textContent = miproducto.textContent;
        }
        if (micantidad_cajas_carrito && micantidad_cajas) {
            micantidad_cajas_carrito.textContent = micantidad_cajas.value;
        }
        if (micantidadcarrito && micantidad) {
            micantidadcarrito.textContent = micantidad.textContent;
        }
        if (mivalornidadcarrito && mivalorunidad) {
            mivalornidadcarrito.textContent = parseFloat(mivalorunidad.textContent) * parseFloat(micantidad_cajas.value);
        }
        if (miimgcarrito) {
            miimgcarrito.setAttribute("src", miimgsrc);
        }

        // Guardar la lista de productos en localStorage
        var listaDeProductos = document.getElementById("div_lista_de_productos");
        localStorage.setItem("listaDeProductos", listaDeProductos.innerHTML);
    }
}




// Función para eliminar un producto del carrito
function eliminar_producto(boton) {
    // Obtener el elemento del producto que se va a eliminar
    var productoAEliminar = boton.closest(".w3-row");

    // Eliminar el elemento del producto del DOM
    productoAEliminar.remove();

    // Obtener la lista de productos actualizada
    var listaDeProductos = document.getElementById("div_lista_de_productos");

    // Guardar la lista de productos en localStorage
    localStorage.setItem("listaDeProductos", listaDeProductos.innerHTML);
}

// Obtener la lista de productos del localStorage y mostrarla en el carrito
var listaDeProductosGuardada = localStorage.getItem("listaDeProductos");
if (listaDeProductosGuardada) {
    var listaDeProductos = document.getElementById("div_lista_de_productos");
    listaDeProductos.innerHTML = listaDeProductosGuardada;
}



// PAGINA FINAL CARRITO
function añadir() {
    console.log("Button 'Proceso de pago' clicked");
    var productosEnCarrito = document.querySelectorAll(".w3-row");

    var productos = [];
    productosEnCarrito.forEach(function (producto) {
        var nombreElement = producto.querySelector("#namecarrito");
        var cantidadCajaElement = producto.querySelector("#cantidad_caja");
        var aclaracionElement = producto.querySelector("#aclaracion");

        if (nombreElement && cantidadCajaElement && aclaracionElement) {
            var nombre = nombreElement.textContent;
            var cantidadCaja = cantidadCajaElement.textContent;
            var aclaracion = aclaracionElement.textContent;

            productos.push({
                nombre: nombre,
                cantidadCaja: cantidadCaja,
                aclaracion: aclaracion
            });
        } else {
            console.error("Algunos elementos son nulos");
        }
    });

    // Realizar la solicitud POST al servidor
    fetch('/buy', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(productos)
    })
        .then(response => response.json())
        .then(data => {
            // Redireccionar al usuario a la página de carrito una vez que se complete la inserción
            window.location.href = '/su_carrito';
        })
        .catch(error => {
            console.error('Error al enviar la solicitud:', error);
        });
}