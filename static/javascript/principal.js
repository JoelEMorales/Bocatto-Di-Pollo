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

//MENU DESPEGABLE CARRITO

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  var sidebar = document.getElementById("mySidebar");
  var main = document.getElementById("main");

  sidebar.style.width = "300px";
  main.style.marginRight = "250px";

  // Agregar event listener para cerrar la barra lateral al hacer clic fuera de ella
  document.addEventListener("click", closeNavOutside);

  // Agregar event listener al botón para cerrar la barra lateral
  var btnResumen = document.getElementById("btn_resumen");
  btnResumen.addEventListener("click", closeNav);
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
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
  var sidebar = document.getElementById("mySidebar");
  var main = document.getElementById("main");

  // Verificar si el clic no ocurrió dentro de la barra lateral o el botón
  if (!sidebar.contains(event.target) && event.target.id !== "btn_resumen" && event.target.id !== "carrito-icono") {
    closeNav();
  }
}

// Agregar event listener para abrir la barra lateral al hacer clic en el icono del carrito
var carritoIcono = document.getElementById("carrito-icono");
carritoIcono.addEventListener("click", openNav);


function actualizar_cantidad() {
  const numero = document.getElementById("cant_box").value;
  document.getElementById("unidad").textContent = numero
}


//---------------------------------------------------------------------------------------------------------




//-----------------------------------------------------------------------------------------------------------------------------------------------------------

// FUNCION PARA REDIRIGIR A PAGINA RESUMEN

//-----------------------------------------------------------------------------------------------------------------------------------------------------------


