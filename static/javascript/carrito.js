//-----------------------------------------------------------------------------------------------------------------------------------------------------------

// CODIGOS PARA ELIMINAR PRODUCTO DEL LOCAL STORAGE

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
  var productoAEliminar = boton.closest(".w3-row");

  // Obtener el nombre del producto
  var nombreProducto =
    productoAEliminar.querySelector("#namecarrito").textContent;

  // Eliminar el elemento del producto del DOM
  productoAEliminar.remove();

  eliminarProductoDelCarrito(nombreProducto);

  actualizarIconoCarrito();

  // Actualiza la vista del carrito en la página de productos
  actualizarContenidoCarrito();
}

function quitarProducto(nombreProducto) {
  // Recupera el carrito del LocalStorage
  var carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  // Busca el índice del producto a eliminar
  var indice = -1;
  for (var i = 0; i < carrito.length; i++) {
    if (carrito[i].nombre === nombreProducto) {
      indice = i;
      break;
    }
  }

  // Si se encontró el producto, lo elimina del carrito
  if (indice !== -1) {
    carrito.splice(indice, 1);

    // Actualiza el carrito en el LocalStorage
    localStorage.setItem("carrito", JSON.stringify(carrito));

    // Recarga la página de resumen para reflejar los cambios
    cargar_resumen();
  }
}

// FUNCION COMUN PARA LA ELIMINACION DE PRODUCTO
function eliminarProductoDelCarrito(nombreProducto) {
  var carrito = obtenerCarrito();

  // Busca el índice del producto a eliminar
  var indice = -1;
  for (var i = 0; i < carrito.length; i++) {
    if (carrito[i].nombre === nombreProducto) {
      indice = i;
      break;
    }
  }

  // Si se encontró el producto, lo elimina del carrito
  if (indice !== -1) {
    carrito.splice(indice, 1);

    // Actualiza el carrito en el LocalStorage
    localStorage.setItem("carrito", JSON.stringify(carrito));

    // Actualiza el contenido del carrito en la página de productos
    actualizarContenidoCarrito(); // Implementa esta función para actualizar el contenido del carrito en la página de productos
  }
}

//--------------------------------------------------------------------------------------------------------------------------------------------------------------

// CODIGO PARA TERMINAR COMPRA Y ENVIAR EMAIL

function enviar_email() {
  alert("Enviando el pedido");

  // Configura Email.js con tus credenciales
  emailjs.init(process.env.CREDENCIALES_EMAILJS);

  // Recopila los datos del comprador
  var nombreCliente = document.getElementById("namecliente").value;

  // Recopila los intrucciones especiales
  var special_instructions = document.getElementById("special").value;

  // Recopila los intrucciones especiales
  var telefono = document.getElementById("telefono").value;

  // Recopila los datos de productos desde el resumen_compra
  var productos = obtenerProductosDesdeResumen();

  // Prepara el contenido del correo
  var correoContenido = "Nombre del comprador: " + nombreCliente + "\n\n";

  correoContenido += "Telefono del cliente: " + telefono + "\n\n";

  correoContenido += "Aclaracion: " + special_instructions + "\n\n";

  productos.forEach(function (producto) {
    correoContenido += "Producto: " + producto.nombre + "\n";
    correoContenido += "Cantidad: " + producto.cantidad + "\n";
    correoContenido += "Precio: $ " + producto.valor + "\n\n\n";
  });

  // Configura el mensaje del correo
  var email = {
    to: "joelelianmorales@gmail.com",
    subject: "Nuevo pedido de Bocatto Di Pollo",
    message: correoContenido,
  };

  // Envía el correo
  emailjs.send("service_3s9yg03", "template_Bocatto", email).then(
    function (response) {
      alert("Correo enviado con éxito");

      // Aquí puedes agregar el código para borrar los productos del Local Storage y del carrito
      borrarProductos();
    },
    function (error) {
      alert("Error al enviar el correo: " + error);
    }
  );

  // Aquí puedes agregar el código para borrar los productos del local estore y del carrito
  // ...

  // Recarga la página de resumen para reflejar los cambios
  cargar_resumen();
}

function borrarProductos() {
  // Borra los productos del Local Storage
  localStorage.removeItem("carrito");

  // Borra los productos del carrito en la página
  var carritoDiv = document.getElementById("contenido_resumen");
  carritoDiv.innerHTML = ""; // Limpia el contenido del carrito en la página

  // Opcional: Actualiza cualquier otro estado relacionado con el carrito que puedas tener en tu aplicación
}

function obtenerProductosDesdeResumen() {
  var productos = [];
  var productosDivs = document.querySelectorAll(".filaResumen"); // Suponiendo que los productos se almacenan en elementos con la clase 'row'

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

  return productos;
}

//----------------------------------------------------------------------------------------------------------------------------------------------------------





//-----------------------------------------------------------------------------------------------------------------------------------------------------------
