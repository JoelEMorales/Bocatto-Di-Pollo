// CARRITO DE COMPRA

// Función para agregar un producto al carrito
function agregarProductoALaLista() {

    // Obtener información del producto a agregar
    var nombreProducto = document.querySelector("#nameproducto").textContent;
    var cantidad_de_box = parseFloat(document.querySelector("#cant_box").value);

    // Validar si la cantidad es mayor que cero
    if (cantidad_de_box > 0) {
        // Buscar si el producto ya está en la lista
        var listaDeProductos = document.getElementById("div_lista_de_productos");
        var productos = listaDeProductos.querySelectorAll(".w3-row");
        var productoYaEnLista = false;

        for (var i = 0; i < productos.length; i++) {
            var nombreEnLista = productos[i].querySelector("#namecarrito").textContent;
            var cantidadEnLista = parseFloat(productos[i].querySelector("#cantidad_caja").textContent);

            if (nombreProducto === nombreEnLista) {
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
    return `
        <div class="w3-row w3-content">
            <div style="max-width: 100px; max-height: 150px;" class="w3-padding-small w3-half">
                <img src="" style="width: 100%; height: 100%" id="imgproductocarrito"/>
            </div>
            <div class="w3-half">
                <a class="w3-left" id="namecarrito"></a>
                <br>
                <a class="w3-left" id="cantidadcarrito"></a>
                <br><br>
                <a class="w3-left">Cant en kg: </a><a class="w3-left" id="cantidad_caja"></a>
                <br><br>
                <a class="w3-left" id="valorunidad"></a>
                <button class="w3-button w3-text-white w3-right" type="button" onclick="eliminar_producto(this)">Quitar</button>
            </div>
        </div>`;
}

// Función para actualizar la información del nuevo producto
function actualizarInfoProducto(nuevoProducto) {
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
