//-----------------------------------------------------------------------------------------------------------------------------------------------------------

// CODIGOS PARA AGREGAR PRODUCTO AL CARRITO, GUARDAR EN EL LOCALSTORAGE Y CAMBIAR ICONO DE CARRITO

//-----------------------------------------------------------------------------------------------------------------------------------------------------------


// Declarar una variable global para el carrito
let carritoG = [];



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
    alert("Debes seleccionar una cantidad.");
  }

  // Actualizar el carrito en localStorage y mostrar productos
  actualizarCarrito(carritoG);
  mostrarProductosEnCarrito(carritoG);
  // Llamar a actualizarIconoCarrito sin retraso
  actualizarIconoCarrito();
}


// Función para actualizar el carrito en localStorage y en la variable global
function actualizarCarrito(carritoG) {
  localStorage.setItem("carrito", JSON.stringify(carritoG));
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
console.log("Productos en el carrito después de la actualización:", carritoG);




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
      <button class="w3-button w3-text-white" type="button" onclick="quitarProductoDeProductoHTML(this)">Quitar</button>
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
  console.log("Actualizando el ícono del carrito...");
  var productosEnCarrito = carritoG.length;

  console.log("Número de productos en el carrito:", productosEnCarrito);
  console.log("Contenido del carrito:", carritoG);

  // Verificar si el carrito contiene al menos un producto
  if (productosEnCarrito > 0) {
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
document.addEventListener("DOMContentLoaded", function () {
  inicializarCarrito();
  actualizarIconoCarrito();
});





//-----------------------------------------------------------------------------------------------------------------------------------------------------------

// CODIGOS PARA ELIMINAR PRODUCTO DEL LOCAL STORAGE

//-----------------------------------------------------------------------------------------------------------------------------------------------------------


// Función para obtener el carrito desde Local Storage o crear uno nuevo
function obtenerCarrito() {
  const carritoJSON = localStorage.getItem("carrito");

  if (carritoJSON) {
    try {
      const carrito = JSON.parse(carritoJSON);
      return carrito;
    } catch (error) {
      console.error("Error al analizar el JSON del carrito:", error);
      return [];
    }
  } else {
    return [];
  }
}

// FUNCION - Borrar producto desde pagina pagina_compra.html
function quitarProductoDeProductoHTML(boton) {
  // Obtener el producto
  const productoAEliminar = boton.closest(".w3-row");

  // Obtener el nombre del producto
  const nombreProducto = productoAEliminar.querySelector("#namecarrito").textContent;

  // Eliminar el elemento del producto del DOM
  productoAEliminar.remove();

  quitarProducto(nombreProducto);

  actualizarIconoCarrito();
}

function quitarProducto(nombreProducto) {
  // Obtener el carrito del localStorage
  let obtengoCarrito = obtenerCarrito();

  // Filtrar el carrito para excluir el producto a eliminar
  obtengoCarrito = obtengoCarrito.filter(producto => producto.nombre !== nombreProducto);

  // Guardar el carrito actualizado en el localStorage
  guardarCarritoEnLocalStorage(obtengoCarrito);


  // Busca el índice del producto a eliminar
  let indice = -1;
  for (let i = 0; i < obtengoCarrito.length; i++) {
    if (obtengoCarrito[i].nombre === nombreProducto) {
      indice = i;
      break;
    }
  }

  // Si se encontró el producto, lo elimina del carrito
  if (indice !== -1) {
    obtengoCarrito.splice(indice, 1);

    // Actualiza el carrito en el LocalStorage
    localStorage.setItem("carrito", JSON.stringify(obtengoCarrito));

  }
  // Recarga la página de resumen para reflejar los cambios
  cargar_resumen();
}

function guardarCarritoEnLocalStorage(carrito) {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}




// // function quitarProducto(nombreProducto) {
// //   // Recupera el carrito del LocalStorage
// //   var carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// }

// // FUNCION COMUN PARA LA ELIMINACION DE PRODUCTO
// function eliminarProductoDelCarrito(nombreProducto) {
//   var carrito = obtenerCarrito();

//   // Busca el índice del producto a eliminar
//   var indice = -1;
//   for (var i = 0; i < carrito.length; i++) {
//     if (carrito[i].nombre === nombreProducto) {
//       indice = i;
//       break;
//     }
//   }

//   // Si se encontró el producto, lo elimina del carrito
//   if (indice !== -1) {
//     carrito.splice(indice, 1);

//     // Actualiza el carrito en el LocalStorage
//     localStorage.setItem("carrito", JSON.stringify(carrito));
//   }
// }



//-----------------------------------------------------------------------------------------------------------------------------------------------------------

// FUNCION PARA REDIRIGIR A PAGINA RESUMEN

//-----------------------------------------------------------------------------------------------------------------------------------------------------------



function redirigir_resumen() {
  // Guardar la última modificación en el localStorage
  actualizarCarrito(carritoG);
  console.log("redirigir_resumen: Iniciando...");
  // console.log("Contenido del LocalStorage (carrito):", storedCart);

  cargarPagina("resumen");

  if (carritoG.length > 0) {
    cargar_resumen();
  } else {
    console.log("redirigir_resumen: No hay contenido en el carrito. No se cargará el resumen.");
  }

  console.log("redirigir_resumen: Finalizado.");
}

