// CODIGO HTML DE HEADER Y FOOTER

const header = document.querySelector("header");
const footer = document.querySelector("footer");

const header_resumen = document.getElementById("header_resumen");

header.innerHTML = `
<nav class="w3-bar w3-white w3-padding w3-card w3-wide" id="navbar">
    <a href="/" class="w3-button w3-bar-item w3-hover-white d-none d-md-block">
        <img src="client/static/img/logo-bocatto.jpg" alt="Logo" style="height: 50px; width: 50px">
    </a>

    <!-- MENU PANTALLAS GRANDES -->
    <div class="w3-right w3-padding-large d-none d-md-block">
        <a href="/" class="w3-bar-item w3-button">¿Quiénes somos?</a>
        <a href="productos" class="w3-bar-item w3-button">Productos</a>
        <a href="galeria" class="w3-bar-item w3-button">Galería</a>
        <a href="#contacto" class="w3-bar-item w3-button">Contáctanos</a>
        <a class="w3-bar-item w3-button" id="main" onclick="openNav()"><i class="fa-solid fa-cart-shopping fa-lg carrito-icono"></i></a>
    </div>

    <!-- MENU PANTALLAS MOVILES -->
    <!-- Button to open the offcanvas sidebar -->
    <div class="navbar d-block d-md-none">
        <div class="container-fluid">
            <a class="nav-item" type="button" onclick="openSidebarMovile()">
                <i class="fa-solid fa-bars"></i>
            </a>
            <a href="/" class="navbar-brand">
                <img src="client/static/img/logo-bocatto.jpg" alt="Avatar Logo" style="width:40px;" class="rounded-pill">
            </a>
            <a class="w3-bar-item w3-button" onclick="openNav()"><i class="fa-solid fa-cart-shopping fa-lg carrito-icono"></i></a>
        </div>
    </div>

    <!-- Sidebar for movile-->
    <div id="sidebarMovile">
        <ul id="lista">
            <li><a onclick="closeSidebarMovile()">× Cerrar</a></li>
            <li><a href="javascript:void(0);" onclick="closeSidebarAndRedirect('/')">¿Quiénes somos?</a></li>
            <li><a href="javascript:void(0);" onclick="closeSidebarAndRedirect('productos')">Productos</a></li>
            <li><a href="javascript:void(0);" onclick="closeSidebarAndRedirect('galeria')">Galería</a></li>
            <li><a href="javascript:void(0);" onclick="closeSidebarAndRedirect('#contacto')">Contáctanos</a></li>
    </ul>
        </ul>
    </div>
    

    <!-- SECCIÓN CORREDIZA DEL CARRITO -->
    <div id="mySidebar" class="sidebar">
        <!-- ENLACE AL CARRITO -->
        <div id="contHeader">
            <div id="titCarrito">
                <a href="#descripcion">Su carrito</a>
            </div>
            <div id="iconX">
                <a href="javascript:void(0)" onclick="closeNav()">×</a>
            </div>            
        </div>
        <!-- LÍNEAS DIVISORIAS -->
        <hr id="divisorCarrito">
        
        <!-- PRODUCTOS DEL CARRITO -->
        <div id="div_lista_de_productos">
            <!-- Aquí se mostrarán los productos seleccionados -->
        </div>
        
        <!-- BOTÓN DE PROCESO DE PAGO -->
        <div class="w3-padding-small">
            <div class="row">
                <div class="col">
                    <button id="btn_resumen" class="w3-block w3-green w3-hover-lightgreen w3-padding-small" onclick="redirigir_resumen()">Resumen</button>
                </div>
                <div href="javascript:void(0);" onclick="closeSidebarAndRedirect('productos')" class="col">
                    <button id="btn_comprar" class="w3-block w3-green w3-hover-lightgreen w3-padding-small">Seguir comprando</button>
                </div>
            </div>
        </div>
    </div>
</div>
`;

// // header pagina resumen
// header_resumen.innerHTML = `
//     <nav class="w3-bar w3-white w3-padding w3-card w3-wide" id="navbar">
//         <div class="container-fluid">
//         <!-- Logo a la izquierda -->
//         <div class="w3-button w3-bar-item w3-hover-white d-none d-md-block">
//             <img
//             src="../client/static/img/logo-bocatto.jpg"
//             alt="Logo" class="img-fluid"
//             style="max-width: 50px" />
//         </div>

//         <!-- MENU PANTALLAS GRANDES -->
//         <div class="w3-right w3-padding-large d-none d-md-block">
//             <a href="/" class="w3-bar-item w3-button">¿Quiénes somos?</a>
//             <a href="/our-product" class="w3-bar-item w3-button">Productos</a>
//             <a href="/principal_galeria" class="w3-bar-item w3-button">Galería</a>
//             <a href="/principal_contacto" class="w3-bar-item w3-button">Contáctanos</a>
//         </div>

//         <!-- MENU PANTALLAS MOVILES -->
//         <!-- Button to open the offcanvas sidebar -->
//         <div class="navbar d-block d-md-none">
//             <div class="container-fluid">
//                 <a class="nav-item" type="button" data-bs-toggle="offcanvas"
//                     data-bs-target="#nav_movil">
//                     <i class="fa-solid fa-bars"></i>
//                 </a>

//                 <a href="/" class="navbar-brand">
//                     <img
//                     src="../client/static/img/logo-bocatto.jpg"
//                     alt="Avatar Logo"
//                     style="width: 40px" class="rounded-pill" />
//                 </a>
//             </div>
//         </div>

//         <!-- Offcanvas Sidebar -->
//             <div class="offcanvas offcanvas-start bg-dark text-white"
//                 id="nav_movil">
//                 <div class="offcanvas-header">
//                     <button type="button" class="btn-close text-reset ms-4"
//                         data-bs-dismiss="offcanvas"></button>
//                 </div>
//                 <div class="offcanvas-body">
//                     <li class="nav-item">
//                         <a href="/" class="nav-link ms-4">¿Quiénes somos?</a>
//                     </li>
//                     <li class="nav-item">
//                         <a href="/our-product" class="nav-link ms-4">Productos</a>
//                     </li>
//                     <li class="nav-item">
//                         <a href="/principal_galeria" class="nav-link ms-4">Galería</a>
//                     </li>
//                     <li class="nav-item">
//                         <a href="/principal_contacto" class="nav-link ms-4">Contáctanos</a>
//                     </li>
//                 </div>
//             </div>
//         </div>
//     </nav>
// `;

footer.innerHTML = `
  <div id="contact" class="w3-container w3-white">
            <br /><br />
            <hr class="my-2" />
            <br />

            <!-- APPS -->
            <div class="w3-padding-large w3-center">
                <div class="row">
                    <div class="col-md-6 mb-4 mb-md-0">
                        <h3 class="w3-text-black">Síguenos</h3>
                        <a href="https://www.instagram.com/bocatto_di_pollo/"
                            class="w3-large w3-text-black d-block mb-3">
                            <i class="fa-brands fa-square-instagram"></i>&nbsp;&nbsp;@bocatto_di_pollo
                        </a>
                        <a href="www.facebook.com/Bocatto-Di-Pollo-188887745394197"
                            class="w3-large w3-text-black d-block mb-3">
                            <i class="fa-brands fa-facebook"></i>&nbsp;&nbsp;Bocatto
                            di
                            Pollo
                        </a>
                        <p class="w3-large w3-text-black mb-3">
                            <i class="fa-solid fa-envelope"></i>&nbsp;&nbsp;bocattodipollo@gmail.com
                        </p>
                        <p class="mb-2">
                            <strong>Lunes a Viernes</strong> | 08:00 - 14:30
                            -- 17:30 -
                            21:30
                        </p>
                        <p class="mb-2">
                            <strong>Sábados</strong> | 09:00 - 14:00 --
                            Cerrado
                        </p>
                        <p class="mb-2"><strong>Domingo</strong> | Cerrado</p>
                        <p><strong>Ubicación</strong></p>
                        <p>Balcarce 803 D5700GDH D5700GDG San Luis Argentina</p>
                        <p class="w3-text-blue-grey w3-medium mb-4">
                            <b>Si quieres saber más sobre nuestros
                                productos, ingredientes o
                                simplemente tienes alguna duda, rellena el
                                formulario de
                                contacto</b>
                        </p>
                        <!-- BOTON CONTACTO -->
                        <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#myModal" id="contacto">
                            CONTACTANOS
                        </button>
                    </div>

                    <!-- GOOGLE MAPS -->
                    <div class="col-md-6">
                        <div class="w3-hide-small">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3334.383045279537!2d-66.33778142659068!3d-33.3088000315649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d43b51d19c2103%3A0xff02940b25dcc3d1!2sBOCATTO%20DI%20POLLO!5e0!3m2!1ses-419!2ses!4v1690134814208!5m2!1ses-419!2ses"
                                width="100%" height="400" style="border: 0" allowfullscreen loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>

            <!-- The Modal -->
            <div class="modal" id="myModal" style="text-align: left">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <!-- Modal Header -->
                        <div class="modal-header">
                            <h4 class="modal-title">Formulario de Contacto</h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <!-- Modal body -->
                        <div class="modal-body">
                            <form id="form" class="was-validated">
                                <div class="mb-3">
                                    <label for="from_name">Nombre:</label>
                                    <input type="text" name="from_name" id="from_name" class="form-control"
                                        placeholder="Ingrese su nombre" required />
                                    <div class="valid-feedback">¡Válido!</div>
                                    <div class="invalid-feedback">
                                        Por favor, introduzca su nombre.
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="from_lastname">Apellido:</label>
                                    <input type="text" name="from_lastname" id="from_lastname" class="form-control"
                                        placeholder="Ingrese su apellido" required />
                                    <div class="valid-feedback">¡Válido!</div>
                                    <div class="invalid-feedback">
                                        Por favor, introduzca su apellido.
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="email">Email:</label>
                                    <input type="email" name="email" id="email" class="form-control"
                                        placeholder="Ingrese su correo electrónico" required />
                                    <div class="valid-feedback">¡Válido!</div>
                                    <div class="invalid-feedback">
                                        Por favor, introduzca un correo
                                        electrónico válido.
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="telefono">Teléfono:</label>
                                    <input type="text" name="telefono" id="telefono" class="form-control"
                                        placeholder="Ingrese su número de teléfono" required />
                                    <div class="valid-feedback">¡Válido!</div>
                                    <div class="invalid-feedback">
                                        Por favor, introduzca su número de
                                        teléfono.
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="message">Deje su consulta:</label>
                                    <textarea name="message" id="message" class="form-control"
                                        placeholder="Escriba su consulta" required></textarea>
                                </div>
                                <hr />
                                <div class="d-flex justify-content-end">
                                    <button type="button" class="btn btn-danger me-2" data-bs-dismiss="modal">
                                        Cerrar
                                    </button>
                                    <button type="submit" id="boton_enviar" class="btn btn-primary">
                                        Enviar
                                    </button>
                                </div>
                            </form>
                            <script type="text/javascript"
                                src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>

                            <script type="text/javascript">
                                emailjs.init("bZL7G9gX0CBh9EfQH");
                            </script>
                        </div>
                    </div>
                </div>
            </div>
        </div>
`;
