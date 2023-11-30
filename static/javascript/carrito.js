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

// CODIGO DE LA PAGINA RESUMEN_COMPRA.HTML
// PAGINA FINAL - RESUMEN COMPRA

function redirigir_resumen() {
  // cargar el HTML dentro de la etiqueta main para resumen de compra
  cargarPagina("resumen");

  // Luego de cargar la página, ejecutar el script para manipular los elementos
  cargar_resumen();
}

function cargar_resumen() {
  // Recupera el carrito del LocalStorage
  var carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  // Objeto para rastrear la cantidad de cada producto
  var productosAgrupados = {};

  // Agrupa los productos y suma sus cantidades
  carrito.forEach(function (producto) {
    var clave = producto.nombre + (producto.aclaracion || ""); // Usamos una clave única basada en el nombre y aclaración (si existe)
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
  });

  // Actualizar el contenido dentro del div 'contenido_resumen'
  var contenidoDiv = document.getElementById("contenido_resumen");
  contenidoDiv.innerHTML = ""; // Limpia cualquier contenido previo

  // Recorre los productos agrupados y muestra la cantidad total
  for (var clave in productosAgrupados) {
    var producto = productosAgrupados[clave];
    var productoDiv = document.createElement("div");
    productoDiv.style.height = "100%";
    productoDiv.className = "row filaResumen";

    // Agrega la imagen
    var imgDiv = document.createElement("div");
    imgDiv.className = "col";
    var img = document.createElement("img");
    img.src = producto.imagen; // Utiliza la ruta de la imagen del producto desde el carrito
    // Agrega clases de Bootstrap para controlar el tamaño de la imagen
    img.className = "img-fluid"; // Esta clase hace que la imagen sea responsive y ocupe el 100% del ancho
    // Agrega clases específicas para pantallas grandes y medianas
    imgDiv.classList.add("col-lg-1"); // En pantallas grandes, la imagen ocupará el 50%
    imgDiv.appendChild(img);
    productoDiv.appendChild(imgDiv);

    // Agrega el campo de nombre y aclaración (si existe)
    var nombreDiv = document.createElement("div");
    nombreDiv.style.paddingTop = "10px"; // Ajusta el espaciado superior
    nombreDiv.className = "col";
    nombreDiv.innerHTML =
      '<p style="text-align: left;" class="nombreProducto">' +
      producto.nombre +
      (producto.aclaracion ? " | " + producto.aclaracion : "") +
      "</p>";
    productoDiv.appendChild(nombreDiv);

    // Agrega la cantidad del producto
    var cantidadDiv = document.createElement("div");
    cantidadDiv.style.paddingTop = "10px"; // Ajusta el espaciado superior
    cantidadDiv.className = "col";
    cantidadDiv.innerHTML =
      '<p><span class="cantidadProducto">' +
      producto.cantidad +
      "</span> kg</p>";
    productoDiv.appendChild(cantidadDiv);

    // Agrega la valor del producto
    var valorDiv = document.createElement("div");
    valorDiv.style.paddingTop = "10px"; // Ajusta el espaciado superior
    valorDiv.className = "col";

    // Utiliza parseFloat para convertir producto.valor en un número (asegurándote de que producto.valor sea una cadena)
    var valorNumerico = parseFloat(producto.valor);

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
    var quitarDiv = document.createElement("div");
    quitarDiv.style.paddingTop = "10px"; // Ajusta el espaciado superior
    quitarDiv.className = "col";
    quitarDiv.innerHTML =
      "<p><button onclick=\"quitarProducto('" +
      clave +
      "')\">Quitar</button></p>";
    productoDiv.appendChild(quitarDiv);

    contenidoDiv.appendChild(productoDiv);

    // Agrega una línea horizontal
    var hr = document.createElement("hr");
    hr.style.backgroundColor = "gray";
    hr.style.height = "0.5px";
    contenidoDiv.appendChild(hr);
  }

  // Fila para instrucciones, pago y recogida
  var divGlobal = document.createElement("div");
  divGlobal.className = "row";
  contenidoDiv.appendChild(divGlobal);

  // Columna para instrucciones especiales
  var colDivInstruccionesEspeciales = document.createElement("div");
  colDivInstruccionesEspeciales.className = "col";
  divGlobal.appendChild(colDivInstruccionesEspeciales);

  // Agrega un campo para instrucciones especiales
  var instruccionesLabel = document.createElement("p");
  instruccionesLabel.style.textAlign = "left";
  instruccionesLabel.textContent = "Instrucciones especiales";
  colDivInstruccionesEspeciales.appendChild(instruccionesLabel);

  var instruccionesTextarea = document.createElement("textarea");
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
  var colDivProcesar = document.createElement("div");
  colDivProcesar.className = "col";
  divGlobal.appendChild(colDivProcesar);

  // Intrucciones de pago y recogida
  var fraseInformacion = document.createElement("p");
  fraseInformacion.style.textAlign = "right";
  fraseInformacion.style.paddingTop = "10px";
  fraseInformacion.textContent = "Pago realizado en el local fisico";
  colDivProcesar.appendChild(fraseInformacion);

  // Intrucciones de recogida
  var DivIntrucciones = document.createElement("div");
  DivIntrucciones.style =
    "border: black solid 1px; padding: 20px; display: flex; flex-direction: column; align-items: center; justify-content: center; width: 200px; height: 100px;";
  colDivProcesar.appendChild(DivIntrucciones);

  var divIcono = document.createElement("div");
  divIcono.innerHTML = '<i class="fa-solid fa-shop fa-2xl"></i>';
  DivIntrucciones.appendChild(divIcono);

  var divText = document.createElement("div");
  divText.style.paddingTop = "10px";
  divText.innerHTML = "Recogida en la tienda";
  DivIntrucciones.appendChild(divText);

  // Instrucciones para el clietne
  var textclient = document.createElement("p");
  textclient.style.textAlign = "left";
  textclient.style.paddingTop = "10px";
  textclient.innerHTML = "Recoge tu pedido en Bocatto Di Pollo";
  colDivProcesar.appendChild(textclient);

  // Mas instrucciones
  var masInformacion = document.createElement("p");
  masInformacion.style.textAlign = "left";
  masInformacion.style.paddingTop = "10px";
  masInformacion.innerHTML =
    "- Dias de semana: entre las 7:30 a 14:30 y de 17:30 a 22:00<br>- Sabados: entre las 7:30 a 14:30 y de 17:30 a 22:00";
  colDivProcesar.appendChild(masInformacion);

  // Ubicacion
  var masInformacion = document.createElement("p");
  masInformacion.style.textAlign = "left";
  masInformacion.style.paddingTop = "10px";
  masInformacion.innerHTML = "Balcarce, 803, San Luis, Argentina";
  colDivProcesar.appendChild(masInformacion);

  // Nombre del comprador
  var name = document.createElement("input");
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
  var tel = document.createElement("input");
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
  var finalizarCompra = document.createElement("button");
  finalizarCompra.style.paddingTop = "5px";
  finalizarCompra.style.marginTop = "30px";
  finalizarCompra.style.backgroundColor = "green";
  finalizarCompra.style.width = "200px";
  finalizarCompra.innerHTML = "<p>Finalizar pedido</p";
  colDivProcesar.appendChild(finalizarCompra);

  // Función para verificar el nombre y enviar el correo electrónico
  function finalizarCompraClick() {
    var nameCliente = document.getElementById("namecliente");

    if (nameCliente.value.trim() === "") {
      alert("Por favor, ingrese su nombre para continuar.");
    } else {
      enviar_email(); // Llama a la función enviar_email si el nombre no está en blanco
    }
  }

  // Asigna la función finalizarCompraClick como el manejador del evento onclick
  finalizarCompra.onclick = finalizarCompraClick;
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------
