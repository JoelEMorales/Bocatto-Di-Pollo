


const mostrarHorarioNuevo = () => {
    // obtengo fecha actual
    const fechaActual = new Date();

    // Calculo el rago de semanas
    const fechaInicio = new Date();
    fechaInicio.setDate(fechaActual.getDate() - 21)

    // verifico si es la fecha deseada
    if (fechaActual >= fechaInicio && fechaActual.getMonth() === 11 && fechaActual.getDate() <= 31) {
        setTimeout(() => {
            Swal.fire({
                position: "top",
                title: "Horarios Especiales!!",
                html: "Sabado 23/12 - 08:00 am | 14:00 pm<br><br>Sabado 24/12 - Cerrado<br><br>Sabado 30/12 - Cerrado",
                imageUrl: "client/static/img/felicesFiestas.jpg",
                imageWidth: 400,
                imageHeight: 400,
                imageAlt: "Felices Fiestas!!"
            });
        }, 500);
    } else if (fechaActual.getMonth() === 0 && fechaActual.getDate() >= 1 && fechaActual.getDate() <= 8) {
        setTimeout(() => {
            Swal.fire({
                position: "top",
                title: "Cerrado por vacaciones!!",
                html: "Volvemos el lunes 8 de enero con los horarios habituales",
                imageUrl: "client/static/img/vacaciones.png",
                imageWidth: 400,
                imageHeight: 300,
                imageAlt: "Felices Vacaciones!!"
            });
        }, 500);
    }
};

// Llamar a la función cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', mostrarHorarioNuevo);