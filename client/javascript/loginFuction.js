// const { error } = require("console");
// const { response } = require("express");

// const { prueba } = require("../../server/controllers/product.controllers");

function login() {
    console.log("CLICK");

    (async () => {
        const { value: formValues } = await Swal.fire({
            title: "Iniciar seccion",
            html: `
             <input type="email" placeholder="Email" id="emailLogin" class="swal2-input">
             <input type="password" placeholder="Contraseña" id="passwordLogin" class="swal2-input">
          `,
            focusConfirm: false,
            preConfirm: () => {
                const email = document.getElementById("emailLogin").value;
                const password = document.getElementById("passwordLogin").value;

                return {
                    email: email,
                    password: password,
                };
            }
        });
        if (formValues) {
            const email = formValues.email;
            const password = formValues.password;

            if (!email || !password) {
                // Manejar el caso en el que el email o la contraseña están vacíos
                Swal.fire("Error", "Por favor, ingresa tu email y contraseña", "error");
                return;
            }

            try {
                const response = await fetch('/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    }, body: JSON.stringify({
                        email: email,
                        password: password
                    })
                });
                if (response.ok) {
                    try {
                        // Intentar analizar la respuesta como JSON solo si no ha sido leída previamente
                        if (!response.bodyUsed) {
                            const responseData = await response.json();
                            console.log('Data after parsing JSON:', responseData);

                            if (responseData && responseData.success) {
                                // Inicio de sesión exitoso
                                Swal.fire({
                                    title: '¡Inicio de Sesión Exitoso!',
                                    text: `¡Bienvenido, ${responseData.data.name || 'Usuario'}! Has iniciado sesión correctamente.`,
                                    icon: 'success'
                                }).then((result) => {
                                    if (result.isConfirmed) {
                                        window.location.href = "/stockControl";
                                    }
                                });

                            } else {
                                // Inicio de sesión fallido (manejo de otros posibles errores)
                                Swal.fire({
                                    title: 'Error en el Inicio de Sesión',
                                    text: responseData && responseData.error ? responseData.error : 'Hubo un error en el inicio de sesión.',
                                    icon: 'error'
                                });
                            }
                        } else {
                            // Si la respuesta no es un JSON válido, mostrar un mensaje de error
                            console.error('La respuesta no es un JSON válido:', await response.text());
                            Swal.fire("Error", "Hubo un error en el inicio de sesión", "error");
                        }
                    } catch (error) {
                        // Manejar el error cuando response.json() falla
                        console.error('Hubo un error al procesar la respuesta JSON:', error);
                        Swal.fire("Error", "Hubo un error en el inicio de sesión", "error");
                    }
                } else {
                    // Si la respuesta no es exitosa, mostrar un mensaje de error
                    console.error('Hubo un error en la solicitud:', response.status);
                    Swal.fire("Error", "Hubo un error en el inicio de sesión", "error");
                }


            } catch (err) {
                console.error('Hubo un error:', err);
                Swal.fire("Error", "Hubo un error en el inicio de sesión", "error");
            }
        }
    })()
}