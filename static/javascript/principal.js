//---------------------------------------------------------------------------------------------------------

// fUNCIONES PAGINA PRINCIPAL INDEX.HTML  -   MENU - CARRITO DESPEGABLE

//---------------------------------------------------------------------------------------------------------



//BARRA MENU SCROLL
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}



//---------------------------------------------------------------------------------------------------------

//MENU DESPEGABLE CARRITO NORMAL

const sidebar = document.getElementById("mySidebar");
const main = document.getElementById("main");

/* Establece el ancho de la barra lateral en 250 px y el margen izquierdo del contenido de la página en 250 px */
function openNav() {

  if (window.innerWidth > 768) {
    sidebar.style.width = "360px";
    main.style.marginRight = "300px";
  } else {
    sidebar.style.width = "75%";
    main.style.marginRight = "0";
  }

  // Agregar event listener para cerrar la barra lateral al hacer clic fuera de ella
  document.addEventListener("click", closeNavOutside);

  // Agregar event listener al botón para cerrar la barra lateral
  var btnResumen = document.getElementById("btn_resumen");
  btnResumen.addEventListener("click", closeNav);

  // Agregar event listener al botón para cerrar la barra lateral
  var btnComprar = document.getElementById("btn_comprar");
  btnComprar.addEventListener("click", closeNav);
}

/* Establece el ancho de la barra lateral en 0 y el margen izquierdo del contenido de la página en 0 */
function closeNav() {
  var sidebar = document.getElementById("mySidebar");
  var main = document.getElementById("main");

  sidebar.style.width = "0";
  main.style.marginRight = "0";

  // Remover el event listener al cerrar la barra lateral
  document.removeEventListener("click", closeNavOutside);
}

// Función para cerrar la barra lateral al hacer clic fuera de ella
function closeNavOutside(event) {
  // Verificar si el clic no ocurrió dentro de la barra lateral o el botón
  if (!sidebar.contains(event.target) && event.target.id !== "btn_resumen" && event.target.id !== "btn_comprar" && event.target.id !== "carrito-icono" && event.target.id !== "main") {
    closeNav();
  }
}

// Agregar un event listener para ajustar el diseño al cambiar el tamaño de la ventana
window.addEventListener("resize", function () {
  // Verificar si la barra lateral no está cerrada
  if (getComputedStyle(sidebar).width !== "0px") {
    openNav(); // Llamar a la función openNav() solo si la barra lateral no está cerrada
  }
});
// // Llamada inicial para establecer el diseño según el tamaño de la pantalla
// openNav();


function actualizar_cantidad() {
  const numero = document.getElementById("cant_box").value;
  document.getElementById("unidad").textContent = numero
}


//---------------------------------------------------------------------------------------------------------

//MENU DESPEGABLE SIDEBAR MOVILE



// Función para abrir el sidebar
function openSidebarMovile() {
  document.getElementById('sidebarMovile').style.left = '0';
  
  // Agregar un evento de clic al documento para cerrar el sidebar si se hace clic fuera de él
  document.addEventListener('click', closeSidebarOnOutsideClick);
}

// Función para cerrar el sidebar
function closeSidebarMovile() {
  document.getElementById('sidebarMovile').style.left = '-250px';
  
  // Eliminar el evento de clic del documento cuando el sidebar se cierra
  document.removeEventListener('click', closeSidebarOnOutsideClick);
}

// Función para cerrar el sidebar cuando se hace clic fuera de él
function closeSidebarOnOutsideClick(event) {
  const sidebar = document.getElementById('sidebarMovile');
  
  // Verificar si el clic ocurrió fuera del sidebar y sus enlaces
  if (!sidebar.contains(event.target) && event.target.closest('a') === null) {
      closeSidebarMovile();
  }
}

function closeSidebarAndRedirect(url) {
  closeSidebarMovile();
  
  // Agregar un retraso de 300 milisegundos (puedes ajustar el valor según sea necesario)
  setTimeout(function() {
      window.location.href = url;
  }, 300);
}