

// function obtenerproductos() {
//     let sectionContainerProducts = document.getElementById('containerAllProducts');
//     // sectionContainerProducts.innerHTML = "";

//     // Verificar si el elemento existe antes de usarlo
//     if (!sectionContainerProducts) {
//         console.error('El elemento con ID "containerAllProducts" no se encuentra en el DOM.');
//         return;
//     }

//     let contador = 1;
//     function crearId() {
//         const nuevoId = contador;
//         contador++;
//         return nuevoId;
//     }

//     fetch("/productosP")
//         .then((res) => res.json())
//         .then((resJSON) => {
//             console.log('Respuesta del servidor:', resJSON);

//             const productos = resJSON.result;
//             // console.log('Contenido de productos:', productos);



//             if (Array.isArray(productos)) {
//                 for (const producto of productos) {

//                     // DIV contenedor individual de productos
//                     const divContainerProduct = document.createElement('div');
//                     divContainerProduct.className = 'w3-third w3-margin-bottom hover-shadow w3-button w3-hover-white'
//                     divContainerProduct.id = `producto${contador}`;
//                     divContainerProduct.addEventListener('click', function () {
//                         abrir_pagina_producto(`producto${contador}`);
//                     });

//                     const imgProduct = document.createElement('img');
//                     imgProduct.alt = producto.producto;
//                     imgProduct.style.setProperty("width", "90%");
//                     imgProduct.style.setProperty("height", "350px");
//                     imgProduct.id = `img-${contador}`;
//                     imgProduct.src = producto.img;
//                     divContainerProduct.appendChild(imgProduct);

//                     const tittleProduct = document.createElement('h3');
//                     tittleProduct.classList.add("w3-large", "w3-padding");
//                     tittleProduct.id = `tittle-${contador}`;
//                     tittleProduct.textContent = producto.producto;
//                     divContainerProduct.appendChild(tittleProduct);


//                     const paragraphProduct = document.createElement('p');

//                     const spanSigno = document.createElement('span');
//                     spanSigno.style.fontSize = '20px';
//                     spanSigno.textContent = '$';

//                     const spanPrice = document.createElement('span');
//                     spanPrice.style.fontSize = '24px';
//                     spanPrice.classList.add('precio');
//                     spanPrice.textContent = producto.precio;

//                     paragraphProduct.appendChild(spanSigno);
//                     paragraphProduct.appendChild(spanPrice);
//                     divContainerProduct.appendChild(paragraphProduct);

//                     const paragraphText = document.createElement('p');
//                     paragraphText.textContent = 'Precio por kilo';
//                     divContainerProduct.appendChild(paragraphText);


//                     sectionContainerProducts.appendChild(divContainerProduct);

//                     crearId();
//                 }

//             }
//         }).catch((err) => {
//             console.log(`Error al obtener producto ${err}`);
//         });
// }

document.addEventListener('DOMContentLoaded', function () {



    async function obtenerProductos() {
        try {
            const response = await fetch("/productosP");
            const resJSON = await response.json();
            return resJSON.result;
        } catch (error) {
            throw new Error(`Error al obtener producto ${error}`);
        }
    }

    (async () => {
        try {
            const productos = await obtenerProductos();
            let sectionContainerProducts = document.getElementById('containerAllProducts');

            let contador = 1;
            function crearId() {
                const nuevoId = contador;
                contador++;
                return nuevoId;
            }
            if (Array.isArray(productos)) {
                for (const producto of productos) {

                    let tittle = producto.producto;
                    let price = producto.precio;
                    let id = `producto${contador}`
                    // DIV contenedor individual de productos
                    const divContainerProduct = document.createElement('div');
                    divContainerProduct.className = 'w3-third w3-margin-bottom hover-shadow w3-button w3-hover-white'
                    divContainerProduct.id = `producto${contador}`;
                    divContainerProduct.addEventListener('click', function () {
                        abrir_pagina_producto(id, tittle, price);
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
        } catch (error) {
            // Manejar errores
            console.error(error);
        }
    })();

});