// CODIGO HTML DE LAS SECCIONES DE LAS PAGINAS



// Función para cargar el contenido según la ruta
function cargarContenido() {
    // Obtener la ruta actual
    const path = window.location.pathname;

    const contenido = document.getElementById("contenido");

    // Lógica para cargar el contenido según la ruta
    if (path === "/" || path === "/galeria") {
        // Utilizar fetch para cargar el contenido de index.html
        fetch('')
            .then(response => response.text())
            .then(data => {
                // Agregar contenido adicional al main
                contenido.innerHTML = `
                <!-- welcome header -->
                <div class="bg-image" style="background-image: url(static/fotosalfajores/baner-bocatto.png);"></div>
                <nav class="bg-text">
                    <h1>Bocatto Di Pollo</h1>
                    <h2 style="font-size: 25px">
                        ¡Bienvenido al hogar del pollo mas sabroso y fresco!.
                    </h2>
                    <p>La mejor experiencia culinaria te espera.</p>
                </nav>
        
                <article id="principal" class="w3-main w3-content w3-padding" style="max-width: 1200px">
                    <!-- QUE ES? -->
                    <section class="w3-row w3-padding-top w3-white" id="descripcion">
                        <div class="w3-half w3-padding-large w3-hide-small">
                            <br />
                            <img src="static/fotosalfajores/mila-1.JPG" class="w3-round w3-image" alt="Table"
                                style="width: 100%" />
                        </div>
        
                        <div class="w3-half w3-padding-large">
                            <br />
                            <h1 class="w3-center w3-text-black">Sabor y Tradición</h1>
                            <br />
                            <h5 class="w3-center w3-text-black">
                                Nos enorgullece ofrecerte una seleccion de productos
                                donde el pollo
                                es el protagonista:
                                <hr style="background-color: gray; height: 0, 5px" />
                            </h5>
                            <p class="w3-large w3-text-black">
                                Nuestra deliciosa oferta familiar se enfoca en el mundo
                                del pollo y
                                sus delicias. Desde nuestro pollo fresco y jugoso hasta
                                una amplia
                                selección de productos relacionados, nos esforzamos por
                                brindarte lo
                                mejor. Cada elemento es cuidadosamente seleccionado y
                                preparado con
                                amor para asegurarte una experiencia auténtica y
                                sabrosa. Nuestro
                                negocio familiar se enorgullece de ofrecer productos
                                únicos y
                                especiales, perfectos para acompañar cualquier momento
                                del día, ya
                                sea una comida rápida o un festín para toda la familia.
                                ¡Ven y
                                descubre los sabores que nos hacen destacar en el mundo
                                del pollo!
                            </p>
                            <p class="w3-large w3-text-grey w3-hide-medium">
                                En nuestro sitio web podrás conocer más acerca de
                                nuestro amplio
                                catalogo, nuestras técnicas de elaboración y los
                                diferentes sabores
                                que ofrecemos. Además, podrás realizar tus pedidos para
                                que lo
                                tengamos listo cuando llegues.
                                <br />
                                Te invitamos a probar nuestras deliciosas milanesas de
                                pollo y a
                                disfrutar de una experiencia única y auténtica de la
                                gastronomía de
                                Bocatto Di Pollo.
                                <br />¡Haz tu pedido hoy mismo!
                            </p>
                        </div>
                    </section>
        
                    <!-- Historia e ingrediente -->
                    <section class="w3-row w3-padding-top w3-white" id="descripcion">
                        <div class="w3-half w3-padding-large">
                            <br /><br /><br />
                            <h1 class="w3-center w3-text-black">
                                Nuestra Historia: Del Sueño a la Realidad
                            </h1>
                            <br />
                            <hr style="background-color: gray; height: 0, 5px" />
                            <p class="w3-large w3-text-black">
                                Hace más de una década, la familia Morales tomó una
                                valiente
                                decisión al emigrar desde Mendoza a San Luis en busca de
                                nuevas
                                oportunidades. Fue aquí, en esta tierra llena de
                                promesas, donde la
                                señora Claudia Graciela Cordero inició una emocionante
                                trayectoria
                                en el apasionante mundo de la pollería. Con
                                determinación y
                                entusiasmo, Claudia se sumergió en el ámbito trabajando
                                en una
                                empresa de pollería durante 5 años. Durante ese tiempo,
                                adquirió
                                todos los conocimientos y habilidades necesarias para
                                convertirse en
                                una experta en el rubro.
                            </p>
                            <p class="w3-large w3-text-grey w3-hide-medium">
                                El destino les sonrió un día y junto a su familia
                                tomaron la
                                decisión de independizarse y dar vida a su propio sueño:
                                "Bocatto Di
                                Pollo". El comedor de su hogar se convirtió en el lugar
                                donde
                                comenzó esta hermosa aventura. Durante 2 largos años,
                                con esfuerzo y
                                dedicación, vieron crecer su pequeño negocio hasta que
                                llegó el
                                momento de dar un paso más. El siguiente capítulo fue un
                                hito
                                significativo en su historia. Decidieron abrir un local
                                en una
                                esquina del mismo barrio que los acogió desde su llegada
                                a San Luis.
                                Allí, con el respaldo de la comunidad, su amor por el
                                pollo y una
                                atención inigualable, el negocio floreció.
                                <br /><br />
                                Hoy, "Bocatto Di Pollo" es sinónimo de calidad y
                                tradición. Diez
                                años de experiencia respaldan la excelencia en cada
                                elaboracion que
                                ofrecen. Es una historia de superación, esfuerzo y
                                dedicación que
                                continuará creciendo junto a todos aquellos que han sido
                                parte de
                                este delicioso viaje. ¡Gracias por ser parte de nuestra
                                historia!"
                            </p>
                        </div>
                        <div class="w3-half w3-padding-large w3-hide-small">
                            <br />
                            <br />
                            <img src="static/fotosalfajores/arrollado.JPG" class="w3-round w3-image" alt="Table"
                                style="width: 100%; height: 780px" />
                        </div>
                    </section>
        
                    <!-- SECTION CAROUSEL -->
                    <section class="w3-row w3-padding-top w3-white" id="carousel">
                        <br /><br /><br />
                        <!-- Carousel -->
                        <div id="demo" class="carousel slide" data-bs-ride="carousel">
                            <!-- Indicators/dots -->
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                                <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                                <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                            </div>
        
                            <!-- The slideshow/carousel -->
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="static/fotosalfajores/work-1.jpeg" alt="Los Angeles" class="d-block w-100" />
                                </div>
                                <div class="carousel-item">
                                    <img src="static/fotosalfajores/work-2.jpeg" alt="Chicago" class="d-block w-100" />
                                </div>
                                <div class="carousel-item">
                                    <img src="static/fotosalfajores/work-3.jpeg" alt="New York" class="d-block w-100" />
                                </div>
                            </div>
        
                            <!-- Left and right controls/icons -->
                            <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon"></span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                                <span class="carousel-control-next-icon"></span>
                            </button>
                        </div>
                        <br />
                    </section>
        
                    <!-- Photo Grid Alfajor -->
                    <section style="height: 900px" id="galeria">
                        <!-- First Grid Photo Grid Alfajor -->
                        <div class="w3-row-padding w3-padding-16 w3-center w3-display-container">
                            <br /><br /><br /><br />
                            <h1>Galeria</h1>
                            <br /><br /><br />
                            <div class="w3-quarter contenedor-img">
                                <img src="static/fotosalfajores/pollo-1.JPG" alt="Pollo" />
                            </div>
                            <div class="w3-quarter contenedor-img">
                                <img src="static/fotosalfajores/pata-1.JPG" alt="Pata de pollo" />
                            </div>
                            <div class="w3-quarter contenedor-img">
                                <img src="static/fotosalfajores/mila-papa.JPG" alt="Milanesa" />
                            </div>
                            <div class="w3-quarter contenedor-img">
                                <img src="static/fotosalfajores/arrollado-2.JPG" alt="Arrollado" />
                            </div>
                        </div>
                        <!-- Sequend Grid Photo Grid Alfajor -->
                        <div class="w3-row-padding w3-padding-16 w3-center w3-display-container">
                            <div class="w3-quarter contenedor-img">
                                <img src="static/fotosalfajores/mila-1.JPG" alt="Alfajor Negro" />
                            </div>
                            <div class="w3-quarter contenedor-img">
                                <img src="static/fotosalfajores/mila.elaboracion-4.jpg" alt="Alfajor Blanco" />
                            </div>
                            <div class="w3-quarter contenedor-img">
                                <img src="static/fotosalfajores/arrollado-3.jpg" alt="Alfajor Blanco" />
                            </div>
                            <div class="w3-quarter contenedor-img">
                                <img src="static/fotosalfajores/pechuga-1.JPG" alt="Alfajor Blanco" />
                            </div>
                        </div>
                        <!-- Three Grid Photo Grid Alfajor -->
                        <div class="w3-row-padding w3-padding-16 w3-center w3-display-container">
                            <div class="w3-quarter contenedor-img">
                                <img src="static/fotosalfajores/burger-1.jpg" alt="Alfajor Negro" />
                            </div>
                            <div class="w3-quarter contenedor-img">
                                <img src="static/fotosalfajores/Mila-elaboracion-1.JPG" alt="Alfajor Blanco" />
                            </div>
                            <div class="w3-quarter contenedor-img">
                                <img src="static/fotosalfajores/mila-3.JPG" alt="Alfajor Blanco" />
                            </div>
                            <div class="w3-quarter contenedor-img">
                                <img src="static/fotosalfajores/mila-4.JPG" class="crop" alt="Alfajor Blanco" />
                            </div>
                        </div>
                        <!-- Four Grid Photo Grid Alfajor -->
                        <div class="w3-row-padding w3-padding-16 w3-center w3-display-container">
                            <div class="w3-quarter contenedor-img">
                                <img src="static/fotosalfajores/pata.muslo-3.jpg" alt="Alfajor Negro" />
                            </div>
                            <div class="w3-quarter contenedor-img">
                                <img src="static/fotosalfajores/albondiga-2.jpg" alt="Alfajor Blanco" />
                            </div>
                            <div class="w3-quarter contenedor-img">
                                <img src="static/fotosalfajores/pollo-2.JPG" alt="Alfajor Blanco" />
                            </div>
                            <div class="w3-quarter contenedor-img">
                                <img src="static/fotosalfajores/pechuga-5.jpg" class="crop" alt="Alfajor Blanco" />
                            </div>
                        </div>
                    </section>
                </article>
                    ${data}
                `;
            })
            .catch(error => console.error('Error al obtener el contenido:', error));
    } else if (path === "/productos") {
        // Cambiar clase para obtener otros estilos CSS
        document.getElementById("contenido").className = "pag-inicial";
        // Utilizar fetch para cargar el contenido de index.html
        fetch('')
            .then(response => response.text())
            .then(data => {
                // Agregar contenido adicional al main
                contenido.innerHTML = `
                <article class="w3-main w3-content w3-padding" style="max-width:1200px;">

                <!-- GRID PHOTO PRODUCTS-->
                <section class="w3-row-padding w3-padding-16 w3-center w3-display-container" id="producto"
                    style="height:800px">

                    <!-- Contenedor principal -->
                    <div id="productos" class="w3-container w3-center w3-responsive">
                        <div style="width: 90%; margin: 0 auto;">
                            <br><br><br><br><br><br><br>
                            <!-- Contenedor para centrar el texto -->
                            <div class="centered-text">
                                <h5 class="w3-center w3-text-black w3-xxlarge w3-tiny w3-small ">La
                                    calidad es nuestro sello
                                    distintivo.</h5><br>
                                <p class="w3-large w3-text-grey w3-small w3-padding">
                                    Nuestros productos destacan por utilizar materia
                                    prima de primera calidad, cuidadosamente
                                    seleccionada
                                    para brindarte sabores auténticos y deliciosos.
                                    Trabajamos con ingredientes naturales, sin
                                    aditivos,
                                    garantizando una experiencia culinaria saludable
                                    y auténtica. Cada mañana, de forma
                                    artesanal y con
                                    amor, preparamos todo fresco para ti.
                                </p>
                                <br>
                                <p class="w3-large w3-text-dark-grey w3-padding">Ven
                                    a disfrutar de nuestros platillos, donde la
                                    tradición y el
                                    sabor se unen en cada bocado.</p>
                                <br>
                                <hr style="background-color: black; height: 0.5px;">
                            </div>
                            <br><br><br><br>
                        </div>
                    </div>

                    <div class="w3-third w3-margin-bottom hover-shadow w3-button w3-hover-white"
                        onclick="abrir_pagina_producto('producto1')" id="producto1">
                        <br>
                        <img src="static/fotosalfajores/Mila-elaboracion-1.JPG"
                            alt="Milanesa De Pollo" id="img-product-1" style="width: 90%;
                            height: 350px;">
                        <h3 class="w3-large w3-padding" id="tittle-1">Milanesa De
                            Pollo</h3>
                        <p>
                            <span style="font-size: 20px;">$</span>
                            <span style="font-size: 24px;" class="precio">1450</span>
                        </p>
                        <p>Precio por kilo</p>
                        <br>
                    </div>

                    <div class="w3-third w3-margin-bottom hover-shadow w3-button w3-hover-white width: 100%; height: 100%; object-fit: cover"
                        onclick="abrir_pagina_producto('producto2')" id="producto2">
                        <br>
                        <img src="static/fotosalfajores/arrollado-3.jpg"
                            alt="Arrollado De Pollo" style="width: 90%;
                        height: 350px;">
                        <h3 class="w3-large w3-padding">Arrollado De Pollo</h3>
                        <p>
                            <span style="font-size: 20px;">$</span>
                            <span style="font-size: 24px;" class="precio">1000</span>
                        </p>
                        <p>Precio por kilo</p>
                        <br>
                    </div>

                    <div class="w3-third w3-margin-bottom hover-shadow w3-button w3-hover-white width: 100%; height: 100%; object-fit: cover"
                        onclick="abrir_pagina_producto('producto3')" id="producto3">
                        <br>
                        <img src="static/fotosalfajores/mila-elaboracion-3.JPG"
                            alt="Chupa Chups De Pollo" style="width: 90%;
                            height: 350px;">
                        <h3 class="w3-large w3-padding">Milanesa Rellena</h3>
                        <p>
                            <span style="font-size: 20px;">$</span>
                            <span style="font-size: 24px;" class="precio">1850</span>
                        </p>
                        <p>Precio por kilo</p>
                        <br>
                    </div>

                    <div class="w3-third w3-margin-bottom hover-shadow w3-button w3-hover-white width: 100%; height: 100%; object-fit: cover"
                        onclick="abrir_pagina_producto('producto4')" id="producto4">
                        <br>
                        <img src="static/fotosalfajores/burger-2.jpg"
                            alt="Chupa Chups De Pollo" style="width: 90%;
                        height: 350px;">
                        <h3 class="w3-large w3-padding">Hamburguesa Simple</h3>
                        <p>
                            <span style="font-size: 20px;">$</span>
                            <span style="font-size: 24px;" class="precio">1950</span>
                        </p>
                        <p>Precio por kilo</p>
                        <br>
                    </div>

                    <div class="w3-third w3-margin-bottom hover-shadow w3-button w3-hover-white width: 100%; height: 100%; object-fit: cover"
                        onclick="abrir_pagina_producto('producto5')" id="producto5">
                        <br>
                        <img src="static/fotosalfajores/burger-1.jpg"
                            alt="Chupa Chups De Pollo" style="width: 90%;
                        height: 350px;">
                        <h3 class="w3-large w3-padding">Hamburguesa con J/Q</h3>
                        <p>
                            <span style="font-size: 20px;">$</span>
                            <span style="font-size: 24px;" class="precio">2000</span>
                        </p>
                        <p>Precio por kilo</p>
                        <br>
                    </div>

                    <div class="w3-third w3-margin-bottom hover-shadow w3-button w3-hover-white width: 100%; height: 100%; object-fit: cover"
                        onclick="abrir_pagina_producto('producto6')" id="producto6">
                        <br>
                        <img src="static/fotosalfajores/mila-1.JPG" alt="Chupa Chups De Pollo"
                            style="width: 90%;
                        height: 350px;">
                        <h3 class="w3-large w3-padding">Arrolladito de J/Q</h3>
                        <p>
                            <span style="font-size: 20px;">$</span>
                            <span style="font-size: 24px;" class="precio">2100</span>
                        </p>
                        <p>Precio por kilo</p>
                        <br>
                    </div>

                    <div class="w3-third w3-margin-bottom hover-shadow w3-button w3-hover-white width: 100%; height: 100%; object-fit: cover"
                        onclick="abrir_pagina_producto('producto7')" id="producto7">
                        <br>
                        <img src="static/fotosalfajores/pata.muslo-2.jpg" alt="Pata Muslo"
                            style="width: 90%;
                        height: 350px;">
                        <h3 class="w3-large w3-padding">Pata Muslo</h3>
                        <p>
                            <span style="font-size: 20px;">$</span>
                            <span style="font-size: 24px;" class="precio">1950</span>
                        </p>
                        <p>Precio por kilo</p>
                        <br>
                    </div>

                    <div class="w3-third w3-margin-bottom hover-shadow w3-button w3-hover-white width: 100%; height: 100%; object-fit: cover"
                        onclick="abrir_pagina_producto('producto8')" id="producto8">
                        <br>
                        <img src="static/fotosalfajores/pechuga-4.jpg"
                            alt="Filet De Pechuga y Muslo" style="width: 90%;
                            height: 350px;">
                        <h3 class="w3-large w3-padding">Filet De Pechuga y Muslo</h3>
                        <p>
                            <span style="font-size: 20px;">$</span>
                            <span style="font-size: 24px;" class="precio">2000</span>
                        </p>
                        <p>Precio por kilo</p>
                        <br>
                    </div>

                    <div class="w3-third w3-margin-bottom hover-shadow w3-button w3-hover-white width: 100%; height: 100%; object-fit: cover"
                        onclick="abrir_pagina_producto('producto9')" id="producto9">
                        <br>
                        <img src="static/fotosalfajores/pollo-2.JPG" alt="Pollo Entero" style="width: 90%;
                        height: 350px;">
                        <h3 class="w3-large w3-padding">Pollo Entero</h3>
                        <p>
                            <span style="font-size: 20px;">$</span>
                            <span style="font-size: 24px;" class="precio">2000</span>
                        </p>
                        <p>Precio por kilo</p>
                        <br>
                    </div>
                </section>
                <br><br>
            </article>
                    ${data}
                `;
            })
            .catch(error => console.error('Error al obtener el contenido:', error));
    }else if (path === "/otrolink") {
        // Utilizar fetch para cargar el contenido de index.html
        fetch('')
            .then(response => response.text())
            .then(data => {
                // Agregar contenido adicional al main
                contenido.innerHTML = `
                
                    ${data}
                `;
            })
            .catch(error => console.error('Error al obtener el contenido:', error));
    }
}



// Escuchar el evento popstate para cargar el contenido cuando cambia la URL
window.addEventListener("popstate", cargarContenido);

// También cargar el contenido cuando se carga la página por primera vez
window.addEventListener("load", cargarContenido);




























// function cargarPagina(pagina) {
//     Lógica para cargar el contenido específico de la página
//     const contenido = document.getElementById("contenido");

//     Puedes utilizar AJAX para cargar el contenido desde el servidor
//     o simplemente actualizar el contenido localmente

//     Aquí un ejemplo simple
//     if (pagina === "principal") {
//         Cambiar clase para obtener otros estilos CSS
//         document.getElementById("contenido").className = "pag-inicial";

//         contenido.innerHTML = `
//         <!-- welcome header -->
//         <div class="bg-image" style="background-image: url(static/fotosalfajores/baner-bocatto.png);"></div>
//         <nav class="bg-text">
//             <h1>Bocatto Di Pollo</h1>
//             <h2 style="font-size: 25px">
//                 ¡Bienvenido al hogar del pollo mas sabroso y fresco!.
//             </h2>
//             <p>La mejor experiencia culinaria te espera.</p>
//         </nav>

//         <article id="principal" class="w3-main w3-content w3-padding" style="max-width: 1200px">
//             <!-- QUE ES? -->
//             <section class="w3-row w3-padding-top w3-white" id="descripcion">
//                 <div class="w3-half w3-padding-large w3-hide-small">
//                     <br />
//                     <img src="static/fotosalfajores/mila-1.JPG" class="w3-round w3-image" alt="Table"
//                         style="width: 100%" />
//                 </div>

//                 <div class="w3-half w3-padding-large">
//                     <br />
//                     <h1 class="w3-center w3-text-black">Sabor y Tradición</h1>
//                     <br />
//                     <h5 class="w3-center w3-text-black">
//                         Nos enorgullece ofrecerte una seleccion de productos
//                         donde el pollo
//                         es el protagonista:
//                         <hr style="background-color: gray; height: 0, 5px" />
//                     </h5>
//                     <p class="w3-large w3-text-black">
//                         Nuestra deliciosa oferta familiar se enfoca en el mundo
//                         del pollo y
//                         sus delicias. Desde nuestro pollo fresco y jugoso hasta
//                         una amplia
//                         selección de productos relacionados, nos esforzamos por
//                         brindarte lo
//                         mejor. Cada elemento es cuidadosamente seleccionado y
//                         preparado con
//                         amor para asegurarte una experiencia auténtica y
//                         sabrosa. Nuestro
//                         negocio familiar se enorgullece de ofrecer productos
//                         únicos y
//                         especiales, perfectos para acompañar cualquier momento
//                         del día, ya
//                         sea una comida rápida o un festín para toda la familia.
//                         ¡Ven y
//                         descubre los sabores que nos hacen destacar en el mundo
//                         del pollo!
//                     </p>
//                     <p class="w3-large w3-text-grey w3-hide-medium">
//                         En nuestro sitio web podrás conocer más acerca de
//                         nuestro amplio
//                         catalogo, nuestras técnicas de elaboración y los
//                         diferentes sabores
//                         que ofrecemos. Además, podrás realizar tus pedidos para
//                         que lo
//                         tengamos listo cuando llegues.
//                         <br />
//                         Te invitamos a probar nuestras deliciosas milanesas de
//                         pollo y a
//                         disfrutar de una experiencia única y auténtica de la
//                         gastronomía de
//                         Bocatto Di Pollo.
//                         <br />¡Haz tu pedido hoy mismo!
//                     </p>
//                 </div>
//             </section>

//             <!-- Historia e ingrediente -->
//             <section class="w3-row w3-padding-top w3-white" id="descripcion">
//                 <div class="w3-half w3-padding-large">
//                     <br /><br /><br />
//                     <h1 class="w3-center w3-text-black">
//                         Nuestra Historia: Del Sueño a la Realidad
//                     </h1>
//                     <br />
//                     <hr style="background-color: gray; height: 0, 5px" />
//                     <p class="w3-large w3-text-black">
//                         Hace más de una década, la familia Morales tomó una
//                         valiente
//                         decisión al emigrar desde Mendoza a San Luis en busca de
//                         nuevas
//                         oportunidades. Fue aquí, en esta tierra llena de
//                         promesas, donde la
//                         señora Claudia Graciela Cordero inició una emocionante
//                         trayectoria
//                         en el apasionante mundo de la pollería. Con
//                         determinación y
//                         entusiasmo, Claudia se sumergió en el ámbito trabajando
//                         en una
//                         empresa de pollería durante 5 años. Durante ese tiempo,
//                         adquirió
//                         todos los conocimientos y habilidades necesarias para
//                         convertirse en
//                         una experta en el rubro.
//                     </p>
//                     <p class="w3-large w3-text-grey w3-hide-medium">
//                         El destino les sonrió un día y junto a su familia
//                         tomaron la
//                         decisión de independizarse y dar vida a su propio sueño:
//                         "Bocatto Di
//                         Pollo". El comedor de su hogar se convirtió en el lugar
//                         donde
//                         comenzó esta hermosa aventura. Durante 2 largos años,
//                         con esfuerzo y
//                         dedicación, vieron crecer su pequeño negocio hasta que
//                         llegó el
//                         momento de dar un paso más. El siguiente capítulo fue un
//                         hito
//                         significativo en su historia. Decidieron abrir un local
//                         en una
//                         esquina del mismo barrio que los acogió desde su llegada
//                         a San Luis.
//                         Allí, con el respaldo de la comunidad, su amor por el
//                         pollo y una
//                         atención inigualable, el negocio floreció.
//                         <br /><br />
//                         Hoy, "Bocatto Di Pollo" es sinónimo de calidad y
//                         tradición. Diez
//                         años de experiencia respaldan la excelencia en cada
//                         elaboracion que
//                         ofrecen. Es una historia de superación, esfuerzo y
//                         dedicación que
//                         continuará creciendo junto a todos aquellos que han sido
//                         parte de
//                         este delicioso viaje. ¡Gracias por ser parte de nuestra
//                         historia!"
//                     </p>
//                 </div>
//                 <div class="w3-half w3-padding-large w3-hide-small">
//                     <br />
//                     <br />
//                     <img src="static/fotosalfajores/arrollado.JPG" class="w3-round w3-image" alt="Table"
//                         style="width: 100%; height: 780px" />
//                 </div>
//             </section>

//             <!-- SECTION CAROUSEL -->
//             <section class="w3-row w3-padding-top w3-white" id="carousel">
//                 <br /><br /><br />
//                 <!-- Carousel -->
//                 <div id="demo" class="carousel slide" data-bs-ride="carousel">
//                     <!-- Indicators/dots -->
//                     <div class="carousel-indicators">
//                         <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
//                         <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
//                         <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
//                     </div>

//                     <!-- The slideshow/carousel -->
//                     <div class="carousel-inner">
//                         <div class="carousel-item active">
//                             <img src="static/fotosalfajores/work-1.jpeg" alt="Los Angeles" class="d-block w-100" />
//                         </div>
//                         <div class="carousel-item">
//                             <img src="static/fotosalfajores/work-2.jpeg" alt="Chicago" class="d-block w-100" />
//                         </div>
//                         <div class="carousel-item">
//                             <img src="static/fotosalfajores/work-3.jpeg" alt="New York" class="d-block w-100" />
//                         </div>
//                     </div>

//                     <!-- Left and right controls/icons -->
//                     <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
//                         <span class="carousel-control-prev-icon"></span>
//                     </button>
//                     <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
//                         <span class="carousel-control-next-icon"></span>
//                     </button>
//                 </div>
//                 <br />
//             </section>

//             <!-- Photo Grid Alfajor -->
//             <section style="height: 900px" id="galeria">
//                 <!-- First Grid Photo Grid Alfajor -->
//                 <div class="w3-row-padding w3-padding-16 w3-center w3-display-container">
//                     <br /><br /><br /><br />
//                     <h1>Galeria</h1>
//                     <br /><br /><br />
//                     <div class="w3-quarter contenedor-img">
//                         <img src="static/fotosalfajores/pollo-1.JPG" alt="Pollo" />
//                     </div>
//                     <div class="w3-quarter contenedor-img">
//                         <img src="static/fotosalfajores/pata-1.JPG" alt="Pata de pollo" />
//                     </div>
//                     <div class="w3-quarter contenedor-img">
//                         <img src="static/fotosalfajores/mila-papa.JPG" alt="Milanesa" />
//                     </div>
//                     <div class="w3-quarter contenedor-img">
//                         <img src="static/fotosalfajores/arrollado-2.JPG" alt="Arrollado" />
//                     </div>
//                 </div>
//                 <!-- Sequend Grid Photo Grid Alfajor -->
//                 <div class="w3-row-padding w3-padding-16 w3-center w3-display-container">
//                     <div class="w3-quarter contenedor-img">
//                         <img src="static/fotosalfajores/mila-1.JPG" alt="Alfajor Negro" />
//                     </div>
//                     <div class="w3-quarter contenedor-img">
//                         <img src="static/fotosalfajores/mila.elaboracion-4.jpg" alt="Alfajor Blanco" />
//                     </div>
//                     <div class="w3-quarter contenedor-img">
//                         <img src="static/fotosalfajores/arrollado-3.jpg" alt="Alfajor Blanco" />
//                     </div>
//                     <div class="w3-quarter contenedor-img">
//                         <img src="static/fotosalfajores/pechuga-1.JPG" alt="Alfajor Blanco" />
//                     </div>
//                 </div>
//                 <!-- Three Grid Photo Grid Alfajor -->
//                 <div class="w3-row-padding w3-padding-16 w3-center w3-display-container">
//                     <div class="w3-quarter contenedor-img">
//                         <img src="static/fotosalfajores/burger-1.jpg" alt="Alfajor Negro" />
//                     </div>
//                     <div class="w3-quarter contenedor-img">
//                         <img src="static/fotosalfajores/Mila-elaboracion-1.JPG" alt="Alfajor Blanco" />
//                     </div>
//                     <div class="w3-quarter contenedor-img">
//                         <img src="static/fotosalfajores/mila-3.JPG" alt="Alfajor Blanco" />
//                     </div>
//                     <div class="w3-quarter contenedor-img">
//                         <img src="static/fotosalfajores/mila-4.JPG" class="crop" alt="Alfajor Blanco" />
//                     </div>
//                 </div>
//                 <!-- Four Grid Photo Grid Alfajor -->
//                 <div class="w3-row-padding w3-padding-16 w3-center w3-display-container">
//                     <div class="w3-quarter contenedor-img">
//                         <img src="static/fotosalfajores/pata.muslo-3.jpg" alt="Alfajor Negro" />
//                     </div>
//                     <div class="w3-quarter contenedor-img">
//                         <img src="static/fotosalfajores/albondiga-2.jpg" alt="Alfajor Blanco" />
//                     </div>
//                     <div class="w3-quarter contenedor-img">
//                         <img src="static/fotosalfajores/pollo-2.JPG" alt="Alfajor Blanco" />
//                     </div>
//                     <div class="w3-quarter contenedor-img">
//                         <img src="static/fotosalfajores/pechuga-5.jpg" class="crop" alt="Alfajor Blanco" />
//                     </div>
//                 </div>
//             </section>
//         </article>
//         `;
//     } else if (pagina === "productos") {


//         contenido.innerHTML = `
                
//         `;
//     } else if (pagina === "compra") {
//         Cambiar clase para obtener otros estilos CSS
//         document.getElementById("contenido").className = "pag-inicial";
//         contenido.innerHTML = `
        
        
//         `;
//     } else if (pagina === "resumen") {

//         console.log("Cargando página:", pagina);

//         Cambiar clase para obtener otros estilos CSS
//         document.getElementById("contenido").className = "pag-resumen";

//         contenido.innerHTML = `
//         <section class="w3-row w3-padding w3-content w3-white w3-main" style="max-width: 1200px">
//       <br /><br /><br />
//       <br /><br /><br />
//       <h2 style="text-align: center; padding: 40px">
//         CARRITO<i class="fa-thin fa-shop"></i>
//       </h2>
//       <br /><br /><br />
//       <article>
//         <div>
//           <div id="factura">
//             <div class="row">
//               <div class="col-md-5 col-4">
//                 <p style="text-align: left">PRODUCTO</p>
//               </div>
//               <div class="col-md-2 col-3">
//                 <p>Cantidad</p>
//               </div>
//               <div class="col-md-2 col-3">
//                 <p>Precio por kg</p>
//               </div>
//               <div class="col-md-3 col-1"></div>
//               <hr class="bg-gray col-11" style="height: 0.5px" />
//             </div>
  
//             <!-- DIV donde aparecerá el contenido del carrito -->
//             <div id="contenido_resumen"></div>
//           </div>
//         </div>
//       </article>
//     </section>
//         `;
//     }
// }

// Cargar la página 1 por defecto al abrir la página principal
// document.addEventListener("DOMContentLoaded", function () {
//     cargarPagina("principal");
// });
