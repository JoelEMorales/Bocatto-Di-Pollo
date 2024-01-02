// Codigo para mostrar form dependiendo del boton



// Mostrar form crear producto nuevo
// Obtener referencia al formulario y al botón
const formularioNuevoProducto = document.getElementById('formularioNuevoProducto');
const mostrarFormularioBtn = document.getElementById('mostrarFormularioBtn');

// Función para alternar la visibilidad del formulario
function alternarVisibilidadFormulario(formulario) {
    formulario.style.display = (formulario.style.display === 'none' || formulario.style.display === '') ? 'block' : 'none';
}

// Agregar evento de clic al botón para mostrar/ocultar el formulario
mostrarFormularioBtn.addEventListener('click', function () {
    alternarVisibilidadFormulario(formularioNuevoProducto);
});


// Obtener el token de las cookies
const token = document.cookie.split('; ').find(row => row.startsWith('jwt=')).split('=')[1];
console.log('Token enviado con la solicitud:', token);


// Obtener productos de base de datos y mostrarlo
function Products() {

    document.getElementById("conteinerProduct").innerHTML = null;

    fetch("/showProducts", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        credentials: 'include',
    })
        .then((res) => res.text())
        .then((text) => {

            try {
                const resJSON = JSON.parse(text);
                const productos = resJSON.result;

                if (Array.isArray(productos)) {
                    for (const producto of productos) {

                        const newrow = document.createElement('tr');

                        const newcellProduct = document.createElement('td');
                        newcellProduct.textContent = producto.producto;

                        const newcellPrice = document.createElement('td');
                        newcellPrice.textContent = producto.precio;

                        const newcellUpdateDate = document.createElement('td');
                        // Formatear la fecha si es necesario (usa el formato que desees)
                        const formattedDate = new Date(producto.updatedAt).toLocaleDateString();
                        newcellUpdateDate.textContent = formattedDate;

                        const btnDeltedProduct = document.createElement('button');
                        btnDeltedProduct.id = producto._id;
                        btnDeltedProduct.textContent = 'Eliminar';
                        btnDeltedProduct.addEventListener('click', (evt) => {
                            const PorductId = evt.target.id;
                            btnDeltedProduct.textContent = "..."
                            fetch(`/deleteProduct/${PorductId}`, {
                                method: "DELETE",
                                headers: {
                                    Authorization: `Bearer ${token}`,
                                },
                                credentials: 'include',
                            }).then(() => {
                                const trProduct = btnDeltedProduct.parentElement;
                                trProduct.remove();
                            });
                        });

                        const btnUpdateProduct = document.createElement('button');
                        btnUpdateProduct.textContent = 'Actualizar';
                        btnUpdateProduct.id = 'btnUpdateProduct';

                        btnUpdateProduct.addEventListener('click', () => {
                            const productId = producto._id;
                            formUpdateProducto.style.display = (formUpdateProducto.style.display === 'none' || formUpdateProducto.style.display === '') ? 'block' : 'none';
                            pasarID(productId);
                        });


                        newrow.appendChild(newcellProduct);
                        newrow.appendChild(newcellPrice);
                        newrow.appendChild(newcellUpdateDate);
                        newrow.appendChild(btnDeltedProduct);
                        newrow.appendChild(btnUpdateProduct);

                        document.getElementById("conteinerProduct").appendChild(newrow);

                        console.log({ producto: producto });
                    }
                } else {
                    console.error('La respuesta del servidor no contiene un array de productos.');
                }
            } catch (error) {
                console.error('Error al analizar la respuesta del servidor como JSON:', error);
            }
        })
        .catch((err) => console.error('Error:', err));
}





// Agregar producto nuevo

document.getElementById('formularioNuevoProducto').addEventListener('submit', function (event) {
    event.preventDefault();

    const nombreProducto = document.getElementById('nombreProducto').value;
    const precioProducto = parseFloat(document.getElementById('precioProducto').value);
    const imgUpdateProduct = document.getElementById('imgUpdateProducto').value;

    const nuevoProducto = {
        producto: nombreProducto,
        precio: precioProducto,
        img: imgUpdateProduct,
    };

    addProductNew(nuevoProducto);
});

function addProductNew(productDataNew) {
    fetch('/addProduct', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        credentials: 'include',
        body: JSON.stringify(productDataNew),

    }).then(response => response.json())
        .then(data => {
            console.log('Producto agregado con éxito:', data);
            Products();
            formularioNuevoProducto.reset();
            alternarVisibilidadFormulario(formularioNuevoProducto);
            // Aquí puedes realizar acciones adicionales después de agregar el producto
        })
        .catch(error => {
            console.error('Error al agregar el producto:', error);
        });
}



// Actualizar producto
let IDproduct = "";
function pasarID(id) {
    IDproduct += id;
}

function updateProduct() {
    const nameUpdateProduct = document.getElementById('nameUpdateProduct').value;
    const priceUpdateProduct = parseFloat(document.getElementById('priceUpdateProduct').value);
    const imgUpdateProducto = document.getElementById('imgUpdateProducto').value;

    const update = {
        producto: nameUpdateProduct ? nameUpdateProduct : undefined,
        precio: !isNaN(priceUpdateProduct) ? priceUpdateProduct : undefined,
        img: imgUpdateProducto ? imgUpdateProducto : undefined,
    };

    functionUpdateProduct(update);
}

function functionUpdateProduct(update) {
    fetch(`/updateProduct/${IDproduct}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        credentials: 'include',
        body: JSON.stringify(update),

    }).then(response => response.json())
        .then(data => {
            console.log('Producto agregado con éxito:', data);
            Products();
            formUpdateProducto.reset();
            alternarVisibilidadFormulario(formUpdateProducto);
            // Aquí puedes realizar acciones adicionales después de agregar el producto
        })
        .catch(error => {
            console.error('Error al agregar el producto:', error);
        });
}



function obtenerproductos() {
    let sectionContainerProducts = document.getElementById('containerAllProducts');
    sectionContainerProducts.innerHTML = null

    let contador = 1;
    function crearId() {
        const nuevoId = contador;
        contador++;
        return nuevoId;
    }

    fetch("/productosP")
        .then((res) => res.json())
        .then((resJSON) => {
            console.log('Respuesta del servidor:', resJSON);

            const productos = resJSON.result;
            // console.log('Contenido de productos:', productos);



            if (Array.isArray(productos)) {
                for (const producto of productos) {

                    // DIV contenedor individual de productos
                    const divContainerProduct = document.createElement('div');
                    divContainerProduct.className = 'w3-third w3-margin-bottom hover-shadow w3-button w3-hover-white'
                    divContainerProduct.id = `producto${contador}`;
                    divContainerProduct.addEventListener('click', function () {
                        abrir_pagina_producto(`producto${contador}`);
                    });

                    const imgProduct = document.createElement('img');
                    imgProduct.alt = producto.producto;
                    imgProduct.style.setProperty("width", "90%");
                    imgProduct.style.setProperty("height", "350px");
                    imgProduct.id = `img-${contador}`;
                    imgProduct.src = producto.img;
                    divContainerProduct.appendChild(imgProduct);

                    const tittleProduct = document.createElement('h3');
                    tittleProduct.classList.add("w3-large", "w3-padding");
                    tittleProduct.id = `tittle-${contador}`;
                    tittleProduct.textContent = producto.producto;
                    divContainerProduct.appendChild(tittleProduct);


                    const paragraphProduct = document.createElement('p');

                    const spanSigno = document.createElement('span');
                    spanSigno.style.fontSize = '20px';
                    spanSigno.textContent = '$';

                    const spanPrice = document.createElement('span');
                    spanPrice.style.fontSize = '24px';
                    spanPrice.classList.add('precio');
                    spanPrice.textContent = producto.precio;

                    paragraphProduct.appendChild(spanSigno);
                    paragraphProduct.appendChild(spanPrice);
                    divContainerProduct.appendChild(paragraphProduct);

                    const paragraphText = document.createElement('p');
                    paragraphText.textContent = 'Precio por kilo';
                    divContainerProduct.appendChild(paragraphText);


                    sectionContainerProducts.appendChild(divContainerProduct);

                    crearId();
                }

            }
        }).catch((err) => {
            console.log(`Error al obtener producto ${err}`);
        });
}