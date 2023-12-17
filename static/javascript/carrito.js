//-----------------------------------------------------------------------------------------------------------------------------------------------------------

// CODIGOS PARA AGREGAR PRODUCTO AL CARRITO, GUARDAR EN EL LOCALSTORAGE Y CAMBIAR ICONO DE CARRITO

//-----------------------------------------------------------------------------------------------------------------------------------------------------------


// Declarar una variable global para el carrito
let carritoG = [];

// Actualiza el localstorage carrito con el contenido nuevo
function updateCarrito(update) {
  localStorage.setItem("carrito", JSON.stringify(update));
  // Actualizar la variable global carritoG
  carritoG = update;
}

// Función para obtener el carrito desde Local Storage o crear uno nuevo
function obtenerCarrito() {
  const carritoJSON = localStorage.getItem("carrito");

  // Verificar si la cadena JSON existe
  if (carritoJSON) {
    try {
      // Intentar analizar la cadena JSON y convertirla en un objetos
      const carrito = JSON.parse(carritoJSON);
      return carrito;

    } catch (error) {
      // Manejar errores si ocurren durante el análisis del JSON
      console.error("Error al analizar el JSON del carrito:", error);

      // En caso de error, devolver un arreglo vacío
      return [];
    }
  } else {
    // Si no hay cadena JSON, devolver un arreglo vacío
    console.error("No hay cadena JSON");
    return [];
  }
}


// Función para agregar un producto al carrito
function agregarProductoAlCarrito() {
  // Obtener información del producto a agregar
  var nombreProducto = document.querySelector("#nameproducto").textContent;
  var cantidadDeCajas = parseFloat(document.querySelector("#cant_box").value);
  var imagenProducto = document.querySelector("#img2_principal").getAttribute("src");
  var precio = parseFloat(localStorage.getItem("precio_transferir"));

  // Validar si la cantidad es mayor que cero
  if (cantidadDeCajas > 0) {
    // Obtener la opción seleccionada (solo si el producto es "Filet De Pechuga y Muslo")
    var opcionSeleccionada = "";
    if (nombreProducto === "Filet De Pechuga y Muslo") {
      var miaclaracion = document.getElementById("opcion_producto");
      opcionSeleccionada = miaclaracion.options[miaclaracion.selectedIndex].textContent;
    }

    // Buscar si el producto ya está en la lista
    var productoExistente = carritoG.find(producto => producto.nombre === nombreProducto && producto.aclaracion === opcionSeleccionada);

    if (productoExistente) {
      productoExistente.cantidad += cantidadDeCajas;
      productoExistente.total += precio * cantidadDeCajas;
    } else {
      // Agregar el producto al carrito de datos
      carritoG.push({
        nombre: nombreProducto,
        cantidad: cantidadDeCajas,
        aclaracion: opcionSeleccionada,
        imagen: imagenProducto,
        total: precio * cantidadDeCajas,
      });
    }
    
  } else {
    Swal.fire({
      text: "¡Debes seleccionar una cantidad!",
      icon: "warning"
    });
  }

  // Actualizar el carrito en localStorage y mostrar productos
  updateCarrito(carritoG);
  mostrarProductosEnCarrito(carritoG);
  // Llamar a actualizarIconoCarrito sin retraso
  actualizarIconoCarrito();
}




// Función para mostrar productos desde datos en lugar de HTML almacenado
function mostrarProductosEnCarrito(carritoG) {
  var carritoHTML = document.getElementById("div_lista_de_productos");
  carritoHTML.innerHTML = carritoG.map(crearNuevoProductoHTML).join('');
}


var listaDeProductosGuardada = localStorage.getItem("carrito");
if (listaDeProductosGuardada) {

  // Se convierte de formato JSON a un objeto JavaScript utilizando JSON.parse, y se asigna a la variable global carritoG.
  carritoG = JSON.parse(listaDeProductosGuardada);
  // Mostrar productos desde la variable global
  mostrarProductosEnCarrito(carritoG);
}




// Función para crear un nuevo elemento HTML para el producto
function crearNuevoProductoHTML(producto) {
  return obtenerHtmlProducto(producto.nombre, producto.cantidad, producto.aclaracion, producto.imagen, producto.total);
}

// Función para obtener el HTML del nuevo producto
function obtenerHtmlProducto(nombre, cantidad, aclaracion, imagen, total) {
  // Aquí puedes construir el HTML del producto de acuerdo a tu formato deseado
  // Puedes usar los parámetros nombre, cantidad, aclaracion, imagen y total para personalizar el HTML
  return `
    <div class="w3-row w3-content" style="padding-bottom: 30px;">
      <div style="max-width: 100px; max-height: 150px;" class="w3-padding-small w3-half">
        <img src="${imagen}" style="width: 100%; height: 100%" id="imgproductocarrito"/>
      </div>
      <div class="w3-half">
        <a class="w3-left-align" id="namecarrito">${nombre}</a>
        <br>
        <a class="w3-left" id="aclaracion">${aclaracion}</a>
        <br>
        <a class="w3-left">Cant en kg: </a><a class="w3-left" id="cantidad_caja">${cantidad}</a>
        <br>
        <a class="w3-left">Precio por kg: $</a><a class="w3-left" id="valorunidad">${total}</a>
      </div>
      <button class="w3-button w3-text-white" type="button" onclick="quitarProductoDelCarrito(this)">Quitar</button>
    </div>`;
}


// ACTUALIZAR ICONO CARRITO DE COMPRA

function inicializarCarrito() {
  // Obtener el carrito del almacenamiento local
  var carritoAlmacenado = JSON.parse(localStorage.getItem("carrito"));

  // Si no hay un carrito almacenado, establecer uno vacío
  if (!carritoAlmacenado || carritoAlmacenado.length === 0) {
    localStorage.setItem("carrito", JSON.stringify([]));
  } else {
    // Si hay un carrito almacenado, usarlo en lugar de un carrito vacío
    carritoG = carritoAlmacenado;
    // Mostrar los productos del carrito al cargar la página
    mostrarProductosEnCarrito(carritoG);
  }
}

// Función para actualizar el ícono del carrito
function actualizarIconoCarrito() {
  var productosEnCarrito = carritoG.length;

  console.log("Número de productos en el carrito:", productosEnCarrito);

  
  // Verificar si el carrito contiene al menos un producto
  if (productosEnCarrito > 0) {
    // Cambiar la clase a una clase diferente (por ejemplo, una clase de carrito lleno)
    document.querySelectorAll(".carrito-icono").forEach(function (element) {
      element.classList.remove("fa-cart-shopping");
      element.classList.add("fa-cart-plus");
    });
  } else {
    // Si el carrito está vacío, restaurar la clase original (fa-shopping-cart)
    document.querySelectorAll(".carrito-icono").forEach(function (element) {
      element.classList.remove("fa-cart-plus");
      element.classList.add("fa-cart-shopping");
    });
  }
}

// Llamar a la función para actualizar el ícono del carrito cuando la página cargue
document.addEventListener("DOMContentLoaded", function () {
  inicializarCarrito();
  actualizarIconoCarrito();
});





//-----------------------------------------------------------------------------------------------------------------------------------------------------------

// CODIGOS PARA ELIMINAR PRODUCTO DEL LOCAL STORAGE

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

// FUNCION - Borrar producto desde pagina pagina_compra.html
function quitarProductoDelCarrito(remove) {

  // Obtener el producto
  const productoAEliminar = remove.closest(".w3-row");

  // Obtener el nombre del producto
  const nameProduct = productoAEliminar.querySelector("#namecarrito").textContent;

  // Obtener el carrito almacenado en el localStorage
  let localStorageCarrito = obtenerCarrito();

  // Filtrar el carrito para excluir el producto a eliminar
  localStorageCarrito = localStorageCarrito.filter(producto => producto.nombre !== nameProduct);

  // Guardar el carrito actualizado en el localStorage
  updateCarrito(localStorageCarrito);

  // Eliminar el elemento del producto del DOM
  productoAEliminar.remove();

  actualizarIconoCarrito();

  if (window.location.href === `${window.location.origin}/resumen_compra`) {
    // Recarga la página de resumen para reflejar los cambios
    cargar_resumen();
  };
}


function quitarProductoDelResumen(nombreProducto) {
  // Obtener el carrito almacenado en el localStorage
  let localSotorageCarrito = obtenerCarrito();

  // Filtrar el carrito para excluir el producto a eliminar
  localSotorageCarrito = localSotorageCarrito.filter(producto => producto.nombre !== nombreProducto);

  // Guardar el carrito actualizado en el localStorage
  updateCarrito(localSotorageCarrito);

  // Recarga la página de resumen para reflejar los cambios
  cargar_resumen();
  mostrarProductosEnCarrito(carritoG);
  actualizarIconoCarrito();
}


//-----------------------------------------------------------------------------------------------------------------------------------------------------------

// FUNCION PARA REDIRIGIR A PAGINA RESUMEN

//-----------------------------------------------------------------------------------------------------------------------------------------------------------



function redirigir_resumen() {
  // Guardar la última modificación en el localStorage
  updateCarrito(carritoG);

  // Redirigir a la página de resumen
  window.location.href = '/resumen_compra';
}




if (window.location.href === `${window.location.origin}/resumen_compra`) {
  // Este código se ejecutará en la página de resumen_compra después de que se cargue completamente
  document.addEventListener("DOMContentLoaded", function () {

    if (carritoG.length > 0) {
      cargar_resumen();
    } else {
      console.log("No hay contenido en el carrito. No se cargará el resumen.");
    }
  });
};



