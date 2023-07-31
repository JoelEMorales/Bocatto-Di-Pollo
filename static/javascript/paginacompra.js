/*PAGINA COMPRA*/


//galeria de imagen producto compra
function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
    }
    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " w3-opacity-off";
}

//MENU DESPEGABLE CARRITO

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    var sidebar = document.getElementById("mySidebar");
    var main = document.getElementById("main");

    sidebar.style.width = "300px";
    main.style.marginRight = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    var sidebar = document.getElementById("mySidebar");
    var main = document.getElementById("main");

    sidebar.style.width = "0";
    main.style.marginRight = "0";
}


function actilizar_cantidad() {
    const numero = document.getElementById("cant_box").value;
    document.getElementById("unidad").textContent = numero
}