//-----------------------------------------------------------------------------------------------------------------------------------------------------------

// fUNCIONES PARA ABRIR PAGINA CON PRODCUTO SOLECCIONADO

//-----------------------------------------------------------------------------------------------------------------------------------------------------------



//BOTON PARA OBTENER DATOS DEL PRODUCTO SELECCIONADO ANTES DE CARGAR EL NUEVO HTML EN EL MAIN
function abrir_pagina_producto(prodctID, tittle, price) {

    let id = prodctID;
    let contenido_titulo = tittle;
    let contenido_precio = price;
    

    // Obtener información del producto según el ID
    var producto_info = contenido_producto(id);



    // Almacenar información del producto a transferir en localStorage
    localStorage.setItem('cantidad_transferir', producto_info.tipo_producto);
    localStorage.setItem('opcion_transferir', producto_info.opcion_producto);

    localStorage.setItem('titulo_transferir', contenido_titulo);
    localStorage.setItem('precio_transferir', contenido_precio);
    localStorage.setItem('nombre_cantidad_transferir', producto_info.nombre_cantidad);
    localStorage.setItem('descripcion_transferir', producto_info.descripcion_producto);
    localStorage.setItem('ingredientes_transferir', producto_info.ingredientes_producto);

    localStorage.setItem('imgPrincipal1_transferir', producto_info.imgPrincipal1_producto);
    localStorage.setItem('imgPrincipal2_transferir', producto_info.imgPrincipal2_producto);
    localStorage.setItem('imgPrincipal3_transferir', producto_info.imgPrincipal3_producto);

    localStorage.setItem('imgaen1_transferir', producto_info.imagen1_producto);
    localStorage.setItem('imgaen2_transferir', producto_info.imagen2_producto);
    localStorage.setItem('imgaen3_transferir', producto_info.imagen3_producto);

    // Cambiar la ubicación a la página de compra
    window.location.href = '/compra';
}

// Función que contiene el código para ejecutar después de cargar la página
function ejecutarScriptDespuesCargarPagina() {
    // Recuperar el contenido almacenado en localStorage y manipular los elementos
    const cantidad_producto_transferir = localStorage.getItem("cantidad_transferir");
    const opcion_producto_transferir = localStorage.getItem("opcion_transferir");
    const titulo_producto = localStorage.getItem("titulo_transferir");
    const precio_producto = localStorage.getItem("precio_transferir");
    const nombre_cantidad = localStorage.getItem("nombre_cantidad_transferir");
    const descripcion_producto = localStorage.getItem("descripcion_transferir");
    const ingredientes_producto = localStorage.getItem("ingredientes_transferir");
    const imgPrincipal1_producto = localStorage.getItem("imgPrincipal1_transferir");
    const imgPrincipal2_producto = localStorage.getItem("imgPrincipal2_transferir");
    const imgPrincipal3_producto = localStorage.getItem("imgPrincipal3_transferir");
    const imagen1_producto = localStorage.getItem("imgaen1_transferir");
    const imagen2_producto = localStorage.getItem("imgaen2_transferir");
    const imagen3_producto = localStorage.getItem("imgaen3_transferir");

    // Verificar si los valores almacenados en localStorage no son null
    if (titulo_producto !== null && precio_producto !== null && nombre_cantidad !== null) {
        // Actualizar el contenido del label según el tipo de producto
        var label_cantidad = document.getElementById("cantidad_producto");
        label_cantidad.textContent = cantidad_producto_transferir === "kilo" ? "Cantidad en kilo:" : "Cantidad:";

        // Agregar aclaración según el producto
        var contenido_div_id_opcion = document.getElementById("opcion").innerHTML;

        if (opcion_producto_transferir === "opcion") {
            var contenido_new = "<br><label>Elija el producto que desea:</label><select class='form-select form-select-sm' id='opcion_producto'><option>Filet de Pechuga</option><option>Filet de Muslo</option></select>";
            document.getElementById("opcion").innerHTML = contenido_div_id_opcion + contenido_new;
        }

        // Asignar la información guardada a los elementos existentes
        var nameproducto = document.getElementById("nameproducto");
        nameproducto.textContent = titulo_producto;

        var divCompraInformacion = document.getElementById("div-compra-informacion");
        var h3Precio = divCompraInformacion.querySelector("h3");
        var spanDolar = document.createElement("span");
        spanDolar.textContent = "$";
        h3Precio.appendChild(spanDolar);
        h3Precio.appendChild(document.createTextNode(precio_producto));

        document.getElementById("nombre_unidad").textContent = nombre_cantidad;
        document.getElementById("descripcion_compra").innerHTML = descripcion_producto;
        document.getElementById("ingredientes_compra").innerHTML = ingredientes_producto;
        document.getElementById("img1_principal").setAttribute("src", imgPrincipal1_producto);
        document.getElementById("img2_principal").setAttribute("src", imgPrincipal2_producto);
        document.getElementById("img3_principal").setAttribute("src", imgPrincipal3_producto);
        document.getElementById("img1").setAttribute("src", imagen1_producto);
        document.getElementById("img2").setAttribute("src", imagen2_producto);
        document.getElementById("img3").setAttribute("src", imagen3_producto);
    }
}


function contenido_producto(prodctID) {
    var producto_info = {};

    if (prodctID === "producto1") {
        producto_info.tipo_producto = "kilo";
        producto_info.nombre_cantidad = "Milanesas:";

        producto_info.descripcion_producto = "<p style='text-align: left;'>La milanesa de pollo es un plato sabroso y versátil que se prepara a partir de filetes de pechuga de pollo finamente empanizados y fritos hasta obtener una textura crujiente por fuera y jugosa por dentro. Su deliciosa base está compuesta por la tierna carne de pollo, que es sazonada con una combinación de especias y hierbas para realzar su sabor. Luego, se sumerge en una mezcla de huevo batido que le aporta un toque de suavidad y adherencia. La milanesa de pollo casera destaca por su versatilidad, ya que se puede servir como plato principal acompañada de ensaladas, arroz o papas, o incluso como un delicioso sándwich en pan fresco con ingredientes como lechuga, tomate y mayonesa. Su exquisito relleno de pollo y su textura crujiente hacen que sea una opción popular y apetitosa para disfrutar en diversas ocasiones y con diferentes acompañamientos. Sin duda, es una opción irresistible para aquellos que buscan un plato casero delicioso y reconfortante.<p>";

        producto_info.ingredientes_producto = "<br><p style='text-align: left;'>¿Qué ingredientes lleva?</p><ul><li>Pollo</li><li>Pan Rallado</li><li>Huevo</li><li>Condimentos (sal, provensal)</li></ul>";
        producto_info.imgPrincipal1_producto = "client/static/img/mila-1.JPG";
        producto_info.imgPrincipal2_producto = "client/static/img/mila-2.JPG";
        producto_info.imgPrincipal3_producto = "client/static/img/mila-3.JPG";
        producto_info.imagen1_producto = "client/static/img/mila-1.JPG";
        producto_info.imagen2_producto = "client/static/img/mila-2.JPG";
        producto_info.imagen3_producto = "client/static/img/mila-3.JPG";
    } else if (prodctID === "producto2") {
        producto_info.tipo_producto = "kilo";
        producto_info.nombre_cantidad = "Arrollado:";

        producto_info.descripcion_producto = "<p style='text-align: left;'>El arrollado de pollo es un platillo delicioso que consiste en una fina capa de pechuga de pollo rellena con una mezcla de ingredientes sabrosos, como jamon, queso, espinacas, zanahorias u otros vegetales. Una vez relleno, el pollo se enrolla y se cocina al horno o en agua, lo que le da una textura jugosa y tierna. El arrollaado de pollo es una opcion popular para ocasiones especiales, ya que su presentacion es elegante y su sabor es exquisito. Es una preparacion creativa y deliciosa que permite disfrutar del pollo de una manera diferente y sabrosa. Su versatilidad y sabor lo convierte en una opcion popular para complacer a familiares y amigos en diversas ocasiones culinarias.</p>";

        producto_info.ingredientes_producto =
            "<br><p style='text-align: left;'>¿Qué ingredientes lleva?</p><ul><li>Pechuga de pollo</li><li>Jamon</li><li>Queso</li><li>Zanahorias</li><li>Vegetales</li><li>Huevo</li><li>Especias y Condimentos</li><li>(El relleno puede ser a su gusto)</li></ul>";
        producto_info.imgPrincipal1_producto = "client/static/img/arrollado-2.JPG";
        producto_info.imgPrincipal2_producto = "client/static/img/arrollado.JPG";
        producto_info.imgPrincipal3_producto = "client/static/img/arrollado-3.jpg";
        producto_info.imagen1_producto = "client/static/img/arrollado-2.JPG";
        producto_info.imagen2_producto = "client/static/img/arrollado.JPG";
        producto_info.imagen3_producto = "client/static/img/arrollado-3.jpg";
    } else if (prodctID === "producto3") {
        producto_info.tipo_producto = "kilo";
        producto_info.nombre_cantidad = "Milanesa Rellena:";

        producto_info.descripcion_producto =
            "<p style='text-align: left;'>Nuestra Milanesa de Pollo Rellena de jamón, queso y morrón es una verdadera delicia para el paladar. Cada porción está cuidadosamente preparada a mano, con filetes de pechuga de pollo de primera calidad, rellenos generosos de jamón, queso fundido y tiras de morrón, que le aportan un toque de color y sabor único. El proceso artesanal y el amor con el que elaboramos este platillo se reflejan en cada bocado. Nuestro objetivo es ofrecerte una experiencia culinaria auténtica y deliciosa, donde la tradición de nuestra familia se mezcla con ingredientes frescos y sabrosos.</p>";

        producto_info.ingredientes_producto =
            "<br><p style='text-align: left;'>¿Qué ingredientes lleva?</p><ul><li>Pechuga de pollo</li><li>Jamon</li><li>Queso</li></ul>";
        producto_info.imgPrincipal1_producto =
            "client/static/img/mila.elaboracion-7.jpg";
        producto_info.imgPrincipal2_producto =
            "client/static/img/mila-elaboracion-3.JPG";
        producto_info.imgPrincipal3_producto =
            "client/static/img/mila.elaboracion-8.jpg";
        producto_info.imagen1_producto =
            "client/static/img/mila.elaboracion-7.jpg";
        producto_info.imagen2_producto =
            "client/static/img/mila-elaboracion-3.JPG";
        producto_info.imagen3_producto =
            "client/static/img/mila.elaboracion-8.jpg";
    } else if (prodctID === "producto4") {
        producto_info.tipo_producto = "kilo";
        producto_info.nombre_cantidad = "Hamburguesa Simple:";

        producto_info.descripcion_producto =
            "<p style='text-align: left;'>Disfruta de nuestra jugosa Hamburguesa Simple, preparada con carne de pollo cuidadosamente seleccionada, molida y sazonada en el momento para garantizar su frescura, jugosidad y sabor inigualables. <br>¡Sencilla y deliciosa, perfecta para satisfacer tu antojo!</p>";

        producto_info.ingredientes_producto =
            "<br><p style='text-align: left;'>¿Qué ingredientes lleva?</p><ul><li>Pechuga de pollo molida</li><li>Pan Rallado</li><li>Huevo</li><li>Especias y Condimentos</li></ul>";
        producto_info.imgPrincipal1_producto =
            "client/static/img/burgerPolloSimple3.jpg";
        producto_info.imgPrincipal2_producto =
            "client/static/img/burger-1.jpg";
        producto_info.imgPrincipal3_producto =
            "client/static/img/burger-3.jpg";
        producto_info.imagen1_producto = "client/static/img/burgerPolloSimple3.jpg";
        producto_info.imagen2_producto = "client/static/img/burger-1.jpg";
        producto_info.imagen3_producto = "client/static/img/burger-3.jpg";
    } else if (prodctID === "producto5") {
        producto_info.tipo_producto = "kilo";
        producto_info.nombre_cantidad = "Hamburguesa Rellena:";

        producto_info.descripcion_producto = "<p style='text-align: left;'>Sumérgete en el placer de nuestra Hamburguesa Rellena, con un corazón de queso fundido que se derrite al cocinarse y junto al jamon, se convierten en una explosión de sabores y texturas que te deleitarán en cada mordisco. ¡Una combinación irresistible de sabores que te sorprenderá!<br><br>Preparada con carne de pollo cuidadosamente seleccionada, molida y sazonada en el momento para garantizar su frescura, jugosidad y sabor inigualables.</p>";

        producto_info.ingredientes_producto =
            "<br><p style='text-align: left;'>¿Qué ingredientes lleva?</p><ul><li>Pechuga de pollo Molida</li><li>Jamon</li><li>Queso</li><li>Pan Rallado</li><li>Huevo</li><li>Especias y Condimentos</li></ul>";
        producto_info.imgPrincipal1_producto =
            "client/static/img/burgerPolloSimple4.jpg";
        producto_info.imgPrincipal2_producto =
            "client/static/img/burgerPolloSimple1.jpg";
        producto_info.imgPrincipal3_producto =
            "client/static/img/burgerPollo1.jpg";
        producto_info.imagen1_producto = "client/static/img/burgerPolloSimple4.jpg";
        producto_info.imagen2_producto = "client/static/img/burgerPolloSimple1.jpg";
        producto_info.imagen3_producto = "client/static/img/burgerPollo1.jpg";
    } else if (prodctID === "producto6") {
        producto_info.tipo_producto = "otro";
        producto_info.nombre_cantidad = "Arrolladito de Pechuga:";

        producto_info.descripcion_producto =
            "<p style='text-align: left;'>Nuestros Arrolladitos de Jamón y Queso son una delicia artesanal, creada con la pasión y la dedicación de nuestras recetas familiares. Elaborados con finas capas de pollo, jamón y queso. ¡Una opción perfecta para compartir y disfrutar en cualquier ocasión!</P>";

        producto_info.ingredientes_producto =
            "<br><p style='text-align: left;'>¿Qué ingredientes lleva?</p><ul><li>Pechuga de pollo</li><li>Jamon</li><li>Queso</li><li>Especias y Condimentos</li></ul>";
        producto_info.imgPrincipal1_producto =
            "client/static/img/rollitosDePollo1.jpg";
        producto_info.imgPrincipal2_producto =
            "client/static/img/rollitosDePollo2.jpg";
        producto_info.imgPrincipal3_producto =
            "client/static/img/rollitosDePollo3.jpg";
        producto_info.imagen1_producto = "client/static/img/rollitosDePollo1.jpg";
        producto_info.imagen2_producto = "client/static/img/rollitosDePollo2.jpg";
        producto_info.imagen3_producto = "client/static/img/rollitosDePollo3.jpg";
    } else if (prodctID === "producto7") {
        producto_info.tipo_producto = "otro";
        producto_info.nombre_cantidad = "Pata Muslo:";

        producto_info.descripcion_producto =
            "<p style='text-align: left;'>En nuestra pollería, seleccionamos minuciosamente las patas y muslos de pollo provenientes de nuestros confiables proveedores. Cada pieza es elegida con cuidado para asegurarnos de brindar a nuestros clientes la mejor calidad. Nuestras Patas Muslos son frescas y jugosas, ideales para preparar platillos sabrosos y reconfortantes. Al cocinarlas, podrás disfrutar de la suculencia y el sabor auténtico que solo un producto fresco puede ofrecer. <br><br>Ven y descubre el placer de saborear pollo de primera calidad que ha sido seleccionado con esmero para garantizar una experiencia culinaria excepcional.</p>";

        producto_info.ingredientes_producto =
            "<br><p style='text-align: left;'>¿Qué ingredientes lleva?</p><ul><li>Pata Muslo</li></ul>";
        producto_info.imgPrincipal1_producto =
            "client/static/img/pata.muslo-1.jpg";
        producto_info.imgPrincipal2_producto =
            "client/static/img/pata.muslo-2.jpg";
        producto_info.imgPrincipal3_producto =
            "client/static/img/pata.muslo-3.jpg";
        producto_info.imagen1_producto = "client/static/img/pata.muslo-1.jpg";
        producto_info.imagen2_producto = "client/static/img/pata.muslo-2.jpg";
        producto_info.imagen3_producto = "client/static/img/pata.muslo-3.jpg";
    } else if (prodctID === "producto8") {
        producto_info.tipo_producto = "kilo";
        producto_info.nombre_cantidad = "Pechuga:";

        producto_info.descripcion_producto =
            "<p style='text-align: left;'>Un clásico de la cocina familiar.<br><br>Nuestros Filetes de Pechuga son el resultado de una selección cuidadosa de pechugas de pollo frescas y de la más alta calidad. Nos aseguramos de que cada filete sea tierno y jugoso, para que disfrutes de su sabor natural en cualquier receta que elijas preparar. Al adquirir nuestros Filetes de Pechuga, te garantizamos que estás obteniendo un producto fresco y delicioso, elaborado con pasión y dedicación para que tu experiencia culinaria sea siempre inolvidable.<br><br>Para nuestros Filetes de Muslo, escogemos meticulosamente las piezas de muslo de pollo más jugosas y sabrosas. Estos filetes son ideales para dar un toque extra de sabor a tus preparaciones. Al ser productos frescos y de primera calidad, podrás apreciar la diferencia en su textura y sabor al cocinarlos. Estamos comprometidos con brindarte los mejores productos para que disfrutes de una experiencia gastronómica única en cada platillo que prepares.</p>";

        // producto_info.opcion_producto = "opcion";
        producto_info.ingredientes_producto =
            "<br><p style='text-align: left;'>¿Qué ingredientes lleva?</p><ul><li>Pechuga de Pechuga</li></ul>";
        producto_info.imgPrincipal1_producto =
            "client/static/img/pechuga-1.JPG";
        producto_info.imgPrincipal2_producto =
            "client/static/img/pechuga-2.jpg";
        producto_info.imgPrincipal3_producto =
            "client/static/img/pechuga-3.jpg";
        producto_info.imagen1_producto = "client/static/img/pechuga-1.JPG";
        producto_info.imagen2_producto = "client/static/img/pechuga-2.jpg";
        producto_info.imagen3_producto = "client/static/img/pechuga-3.jpg";
    } else if (prodctID === "producto9") {
        producto_info.tipo_producto = "otro";
        producto_info.nombre_cantidad = "Pollo Entero:";

        producto_info.descripcion_producto =
            "<p style='text-align: left;'>Nuestro Pollo Entero es el resultado de una rigurosa selección de aves frescas y de óptima calidad. Queremos asegurarnos de que nuestros clientes reciban un producto que refleje nuestro compromiso con la frescura y el sabor. Al adquirir un Pollo Entero en nuestra pollería, tendrás la confianza de estar llevando a casa una ave fresca y lista para ser cocinada. Sea cual sea la receta que decidas preparar, te garantizamos que este pollo será la base perfecta para platos jugosos y deliciosos que toda tu familia disfrutará. Ven y descubre el auténtico sabor del pollo fresco y de calidad que tenemos para ti.</p>";

        producto_info.ingredientes_producto =
            "<br><p style='text-align: left;'>¿Qué ingredientes lleva?</p><ul><li>Pollo Entero</li></ul>";
        producto_info.imgPrincipal1_producto = "client/static/img/pollo-1.JPG";
        producto_info.imgPrincipal2_producto = "client/static/img/pollo-2.JPG";
        producto_info.imgPrincipal3_producto = "client/static/img/pollo-3.jpg";
        producto_info.imagen1_producto = "client/static/img/pollo-1.JPG";
        producto_info.imagen2_producto = "client/static/img/pollo-2.JPG";
        producto_info.imagen3_producto = "client/static/img/pollo-3.jpg";
    }

    // Puedes agregar más "elif" para otros productos

    return producto_info;
}