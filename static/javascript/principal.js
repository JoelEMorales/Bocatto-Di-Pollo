//PAGINA PRINCIPAL


//welcome
document.addEventListener('DOMContentLoaded', function () {

    // Verificar si la URL coincide con la página principal
    if (window.location.pathname === '/') {

        // Obtén el elemento con la clase 'bg-image'
        // Establece la imagen de fondo utilizando JavaScript
        const bgImage = document.querySelector('.bg-image');
        bgImage.style.backgroundImage = `url("${static_url}fotosalfajores/baner-bocatto.png")`;
    }
});


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


//BOTON COMPRA PRODUCTO 1
function abrir_pagina_producto1() {

    // Obtener el título del producto de la página principal
    var div_producto1 = document.getElementById("producto1");
    var titulo = div_producto1.querySelector("h3");
    var contenido_titulo = titulo.textContent;

    // Obtener el precio del producto de la página principal
    var precio = div_producto1.querySelector("p");
    var contenido_precio = precio.textContent;
    var nombre_cantidad = "Milanesas:";
    var descripcion_producto1 = "La milanesa de pollo es un plato sabroso y versátil que se prepara a partir de filetes de pechuga de pollo finamente empanizados y fritos hasta obtener una textura crujiente por fuera y jugosa por dentro.Su deliciosa base está compuesta por la tierna carne de pollo, que es sazonada con una combinación de especias y hierbas para realzar su sabor. Luego, se sumerge en una mezcla de huevo batido que le aporta un toque de suavidad y adherencia. <br>La milanesa de pollo casera destaca por su versatilidad, ya que se puede servir como plato principal acompañada de ensaladas, arroz o papas, o incluso como un delicioso sándwich en pan fresco con ingredientes como lechuga, tomate y mayonesa.Su exquisito relleno de pollo y su textura crujiente hacen que sea una opción popular y apetitosa para disfrutar en diversas ocasiones y con diferentes acompañamientos.Sin duda, es una opción irresistible para aquellos que buscan un plato casero delicioso y reconfortante.";
    var ingredientes_producto1 = "<p>¿Qué ingredientes lleva?</p><ul><li>Pollo</li><li>Pan Rallado</li><li>Huevo</li><li>Condimentos (sal, provensal)</li></ul>";

    //CAJA IMAGEN COMPRA
    //imagen principal
    var imgPrincipal1_producto3 = "/static/fotosalfajores/mila-1.JPG";
    var imgPrincipal2_producto3 = "/static/fotosalfajores/mila-2.JPG";
    var imgPrincipal3_producto3 = "/static/fotosalfajores/mila-3.JPG";

    //imgaen secundaria
    var imagen1_producto3 = "/static/fotosalfajores/mila-1.JPG";
    var imagen2_producto3 = "/static/fotosalfajores/mila-2.JPG";
    var imagen3_producto3 = "/static/fotosalfajores/mila-3.JPG";



    // Almacenar informacion de producto a transferir en localStorage
    localStorage.setItem('titulo_transferir', contenido_titulo);
    localStorage.setItem('precio_transferir', contenido_precio);
    localStorage.setItem('nombre_cantidad_transferir', nombre_cantidad);
    localStorage.setItem('descripcion_transferir', descripcion_producto1);
    localStorage.setItem('ingredientes_transferir', ingredientes_producto1);

    localStorage.setItem('imgPrincipal1_transferir', imgPrincipal1_producto3);
    localStorage.setItem('imgPrincipal2_transferir', imgPrincipal2_producto3);
    localStorage.setItem('imgPrincipal3_transferir', imgPrincipal3_producto3);

    localStorage.setItem('imgaen1_transferir', imagen1_producto3);
    localStorage.setItem('imgaen2_transferir', imagen2_producto3);
    localStorage.setItem('imgaen3_transferir', imagen3_producto3);

    // Redireccionar a la nueva página
    window.location.href = "/product";
}

// Verificar si se cargó la página completamente
window.addEventListener("load", function () {

    // Recuperar el contenido almacenado en localStorage
    const titulo_producto1 = localStorage.getItem('titulo_transferir');
    const precio_producto1 = localStorage.getItem('precio_transferir');
    const nombre_cantidad = localStorage.getItem('nombre_cantidad_transferir');
    const descripcion_producto1 = localStorage.getItem('descripcion_transferir');
    const ingredientes_producto1 = localStorage.getItem('ingredientes_transferir');

    const imgPrincipal1_producto3 = localStorage.getItem('imgPrincipal1_transferir');
    const imgPrincipal2_producto3 = localStorage.getItem('imgPrincipal2_transferir');
    const imgPrincipal3_producto3 = localStorage.getItem('imgPrincipal3_transferir');

    const imagen1_producto3 = localStorage.getItem('imgaen1_transferir');
    const imagen2_producto3 = localStorage.getItem('imgaen2_transferir');
    const imagen3_producto3 = localStorage.getItem('imgaen3_transferir');

    // Verificar si existe el elemento con el ID "titulo"
    if (document.getElementById("nameproducto")) {
        // Asignar la informacion guardada al elemento con el ID "nameproducto"
        document.getElementById('div-compra-informacion').querySelector('h1').textContent = titulo_producto1
        document.getElementById('div-compra-informacion').querySelector('h3').textContent = precio_producto1
        document.getElementById('nombre_unidad').textContent = nombre_cantidad
        document.getElementById('descripcion_compra').textContent = descripcion_producto1
        document.getElementById('ingredientes_compra').innerHTML = ingredientes_producto1

        document.getElementById('img1_principal').setAttribute('src', imgPrincipal1_producto3)
        document.getElementById('img2_principal').setAttribute('src', imgPrincipal2_producto3)
        document.getElementById('img3_principal').setAttribute('src', imgPrincipal3_producto3)

        document.getElementById('img1').setAttribute('src', imagen1_producto3)
        document.getElementById('img2').setAttribute('src', imagen2_producto3)
        document.getElementById('img3').setAttribute('src', imagen3_producto3)
    }
});




//BOTON COMPRA PRODUCTO 2
function abrir_pagina_producto2() {

    // Obtener el título del producto de la página principal
    var div_producto2 = document.getElementById("producto2");
    var titulo = div_producto2.querySelector("h3");
    var contenido_titulo = titulo.textContent;
    var nombre_cantidad = "Box Alfajor: ";

    // Obtener el precio del producto de la página principal
    var precio = div_producto2.querySelector("p");
    var contenido_precio = precio.textContent;
    var descripcion_producto2 = "El arrollado de pollo es un platillo delicioso que consiste en una fina capa de pechuga de pollo rellena con una mezcla de ingredientes sabrosos, como jamon, queso, espinacas, zanahorias u otros vegetal. Una vez relleno, el pollo se enrolla y se cocina al horno o en agua, lo que le da una textura jugosa y tierna. El arrollaado de pollo es una opcion popular para ocasiones especiales, ya que su presentacion es elegante y su sabor es exquisito. Es una preparacion creativa y deliciosa que permite disfrutar del pollo de una manera diferente y sabrosa. Su versatilidad y sabor lo convierte en una opcion popular para complacer a familiares y amigos en diversas ocasiones culinarias.";
    var ingredientes_producto2 = "<p>¿Qué ingredientes lleva?</p><ul><li>Pechuga de pollo</li><li>Jamon</li><li>Queso</li><li>Zanahorias</li><li>Vegetales</li><li>Huevo</li><li>Especias y Condimentos</li><li>(El relleno puede ser a su gusto)</li></ul>";

    //CAJA IMAGEN COMPRA
    //imagen principal
    var imgPrincipal1_producto3 = "/static/fotosalfajores/arrollado-2.JPG"
    var imgPrincipal2_producto3 = "/static/fotosalfajores/arrollado.JPG"
    var imgPrincipal3_producto3 = "/static/fotosalfajores/arrollado-3.JPG"
    //imgaen secundaria
    var imagen1_producto3 = "/static/fotosalfajores/arrollado-2.JPG"
    var imagen2_producto3 = "/static/fotosalfajores/arrollado.JPG"
    var imagen3_producto3 = "/static/fotosalfajores/arrollado-3.JPG"


    // Almacenar el titulo de producto a transferir en localStorage
    localStorage.setItem('titulo_transferir', contenido_titulo);
    localStorage.setItem('precio_transferir', contenido_precio);
    localStorage.setItem('nombre_cantidad_transferir', nombre_cantidad);
    localStorage.setItem('descripcion_transferir', descripcion_producto2);
    localStorage.setItem('ingredientes_transferir', ingredientes_producto2);

    localStorage.setItem('imgPrincipal1_transferir', imgPrincipal1_producto3);
    localStorage.setItem('imgPrincipal2_transferir', imgPrincipal2_producto3);
    localStorage.setItem('imgPrincipal3_transferir', imgPrincipal3_producto3);

    localStorage.setItem('imgaen1_transferir', imagen1_producto3);
    localStorage.setItem('imgaen2_transferir', imagen2_producto3);
    localStorage.setItem('imgaen3_transferir', imagen3_producto3);

    // Redireccionar a la nueva página
    window.location.href = "/product";
}

// Verificar si se cargó la página completamente
window.addEventListener("load", function () {

    // Recuperar el contenido almacenado en localStorage
    const titulo_producto2 = localStorage.getItem('titulo_transferir');
    const precio_producto2 = localStorage.getItem('precio_transferir');
    const nombre_cantidad = localStorage.getItem('nombre_cantidad_transferir');
    const descripcion_producto2 = localStorage.getItem('descripcion_transferir');
    const ingredientes_producto2 = localStorage.getItem('ingredientes_transferir');

    const imgPrincipal1_producto3 = localStorage.getItem('imgPrincipal1_transferir');
    const imgPrincipal2_producto3 = localStorage.getItem('imgPrincipal2_transferir');
    const imgPrincipal3_producto3 = localStorage.getItem('imgPrincipal3_transferir');

    const imagen1_producto3 = localStorage.getItem('imgaen1_transferir');
    const imagen2_producto3 = localStorage.getItem('imgaen2_transferir');
    const imagen3_producto3 = localStorage.getItem('imgaen3_transferir');

    // Verificar si existe el elemento con el ID "titulo"
    if (document.getElementById("nameproducto")) {
        // Asignar la informacion guardada al elemento con el ID "nameproducto"
        document.getElementById('div-compra-informacion').querySelector('h1').textContent = titulo_producto2
        document.getElementById('div-compra-informacion').querySelector('h3').textContent = precio_producto2
        document.getElementById('nombre_unidad').textContent = nombre_cantidad
        document.getElementById('descripcion_compra').textContent = descripcion_producto2
        document.getElementById('ingredientes_compra').innerHTML = ingredientes_producto2

        document.getElementById('img1_principal').setAttribute('src', imgPrincipal1_producto3)
        document.getElementById('img2_principal').setAttribute('src', imgPrincipal2_producto3)
        document.getElementById('img3_principal').setAttribute('src', imgPrincipal3_producto3)

        document.getElementById('img1').setAttribute('src', imagen1_producto3)
        document.getElementById('img2').setAttribute('src', imagen2_producto3)
        document.getElementById('img3').setAttribute('src', imagen3_producto3)
    }
});




//BOTON COMPRA PRODUCTO 3
function abrir_pagina_producto3() {

    // Obtener el título del producto de la página principal
    var div_producto3 = document.getElementById("producto3");
    var titulo = div_producto3.querySelector("h3");
    var contenido_titulo = titulo.textContent;
    var nombre_cantidad = "Conitos de dulce de leche: ";

    // Obtener el precio del producto de la página principal
    var precio = div_producto3.querySelector("p");
    var contenido_precio = precio.textContent;
    var descripcion_producto3 = "Una base de galleta sabor cacao aromatizado con naranja con un \n\
exquisito y cremoso relleno de  dulce de leche bañado en chocolate negro o blanco, es el dulce perfecto \n\
para aquellos que buscan una combinación exquisita de sabores. La textura crujiente de la galleta se combina con \n\
la cremosidad del dulce de leche y la intensidad del chocolate para crear una experiencia única y deliciosa. Ya sea como \n\
un regalo para un ser querido o simplemente como un capricho para ti mismo, estas deliciosas galletas son una excelente opción \n\
para satisfacer cualquier antojo dulce.";
    var ingredientes_producto3 = "<p>¿Qué ingredientes lleva?</p><ul><li>Harina de trigo</li><li>Mantequilla</li><li>Azucar</li><li>Huevo</li><li>Cacao</li><li>Chocolate negro</li><li>Dulce de leche</li></ul>";

    //CAJA IMAGEN COMPRA
    //imagen principal
    var imgPrincipal1_producto3 = "/static/fotosalfajores/Dulce-de-Leche-Cones-2.jpg"
    var imgPrincipal2_producto3 = "/static/fotosalfajores/Dulce-de-Leche-Cones-1.jpg"
    var imgPrincipal3_producto3 = "/static/fotosalfajores/Cone-before-chocolate-coating.jpg"
    //imgaen secundaria
    var imagen1_producto3 = "/static/fotosalfajores/Dulce-de-Leche-Cones-2.jpg"
    var imagen2_producto3 = "/static/fotosalfajores/Dulce-de-Leche-Cones-1.jpg"
    var imagen3_producto3 = "/static/fotosalfajores/Cone-before-chocolate-coating.jpg"



    // Almacenar el titulo de producto a transferir en localStorage
    localStorage.setItem('titulo_transferir', contenido_titulo);
    localStorage.setItem('precio_transferir', contenido_precio);
    localStorage.setItem('nombre_cantidad_transferir', nombre_cantidad);
    localStorage.setItem('descripcion_transferir', descripcion_producto3);
    localStorage.setItem('ingredientes_transferir', ingredientes_producto3);

    localStorage.setItem('imgPrincipal1_transferir', imgPrincipal1_producto3);
    localStorage.setItem('imgPrincipal2_transferir', imgPrincipal2_producto3);
    localStorage.setItem('imgPrincipal3_transferir', imgPrincipal3_producto3);

    localStorage.setItem('imgaen1_transferir', imagen1_producto3);
    localStorage.setItem('imgaen2_transferir', imagen2_producto3);
    localStorage.setItem('imgaen3_transferir', imagen3_producto3);

    // Redireccionar a la nueva página
    window.location.href = "/product";
}

// Verificar si se cargó la página completamente
window.addEventListener("load", function () {

    // Recuperar el contenido almacenado en localStorage
    const titulo_producto3 = localStorage.getItem('titulo_transferir');
    const precio_producto3 = localStorage.getItem('precio_transferir');
    const nombre_cantidad = localStorage.getItem('nombre_cantidad_transferir');
    const descripcion_producto3 = localStorage.getItem('descripcion_transferir');
    const ingredientes_producto3 = localStorage.getItem('ingredientes_transferir');

    const imgPrincipal1_producto3 = localStorage.getItem('imgPrincipal1_transferir');
    const imgPrincipal2_producto3 = localStorage.getItem('imgPrincipal2_transferir');
    const imgPrincipal3_producto3 = localStorage.getItem('imgPrincipal3_transferir');

    const imagen1_producto3 = localStorage.getItem('imgaen1_transferir');
    const imagen2_producto3 = localStorage.getItem('imgaen2_transferir');
    const imagen3_producto3 = localStorage.getItem('imgaen3_transferir');


    // Verificar si existe el elemento con el ID "titulo"
    if (document.getElementById("nameproducto")) {
        // Asignar la informacion guardada al elemento con el ID "nameproducto"
        document.getElementById('div-compra-informacion').querySelector('h1').textContent = titulo_producto3
        document.getElementById('div-compra-informacion').querySelector('h3').textContent = precio_producto3
        document.getElementById('nombre_unidad').textContent = nombre_cantidad
        document.getElementById('descripcion_compra').textContent = descripcion_producto3
        document.getElementById('ingredientes_compra').innerHTML = ingredientes_producto3

        document.getElementById('img1_principal').setAttribute('src', imgPrincipal1_producto3)
        document.getElementById('img2_principal').setAttribute('src', imgPrincipal2_producto3)
        document.getElementById('img3_principal').setAttribute('src', imgPrincipal3_producto3)

        document.getElementById('img1').setAttribute('src', imagen1_producto3)
        document.getElementById('img2').setAttribute('src', imagen2_producto3)
        document.getElementById('img3').setAttribute('src', imagen3_producto3)
    }
});






//---------------------------------------------------------------------------------------//

// CARRITO DE COMPRA GUARDADO EN EL LOCAL STORE UNA VEZ CARGADA LA PAGINA

// Obtener la lista de productos de localStorage, o crear una si no existe
var listaDeProductos = JSON.parse(localStorage.getItem("listaDeProductos")) || [];

// Agregar la lista de productos al div correspondiente
document.getElementById("div_lista_de_productos").innerHTML = "";
for (var i = 0; i < listaDeProductos.length; i++) {
    var producto = listaDeProductos[i];
    var productoHTML = "<div>" + producto.nombre + " - $" + producto.precio + "</div>";
    document.getElementById("div_lista_de_productos").innerHTML += productoHTML;
}

// Agregar cada producto al carrito de compras y actualizar la lista en el HTML
var carritoDeCompras = JSON.parse(localStorage.getItem("carritoDeCompras")) || [];
for (var i = 0; i < listaDeProductos.length; i++) {
    var producto = listaDeProductos[i];
    var productoEnCarrito = carritoDeCompras.find(p => p.nombre === producto.nombre);
    if (productoEnCarrito) {
        productoEnCarrito.cantidad++;
        productoEnCarrito.total += producto.precio;
    } else {
        carritoDeCompras.push({
            nombre: producto.nombre,
            precio: producto.precio,
            cantidad: 1,
            total: producto.precio
        });
    }
}

// Actualizar la lista de productos en el carrito en localStorage
localStorage.setItem("carritoDeCompras", JSON.stringify(carritoDeCompras));

// Función para eliminar un producto del carrito de compras
function eliminarProductoDelCarrito(nombre) {
    var productoIndex = carritoDeCompras.findIndex(p => p.nombre === nombre);
    if (productoIndex !== -1) {
        carritoDeCompras.splice(productoIndex, 1);
        localStorage.setItem("carritoDeCompras", JSON.stringify(carritoDeCompras));
        // Actualizar la lista de productos en el HTML
        var carritoHTML = "";
        for (var i = 0; i < carritoDeCompras.length; i++) {
            var producto = carritoDeCompras[i];
            var productoHTML = "<div>" + producto.nombre + " x" + producto.cantidad + " - $" + producto.total + "</div>";
            carritoHTML += productoHTML;
        }
        document.getElementById("div_carrito_de_compras").innerHTML = carritoHTML;
    }
}