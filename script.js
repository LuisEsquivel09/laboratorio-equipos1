/* =====================================
   OBTENER LOS PANELES
===================================== */

const inicio = document.getElementById("inicio");
const equipos = document.getElementById("equipos");
const resumen = document.getElementById("resumen");


/* =====================================
   INICIAR SESIÓN
===================================== */

document.getElementById("formularioLogin").addEventListener("submit", function(event) {

    // Evita que la página se recargue
    event.preventDefault();

    // Ocultar inicio
    inicio.classList.add("oculto");

    // Mostrar equipos
    equipos.classList.remove("oculto");

});


/* =====================================
   MOSTRAR INICIO
===================================== */

function mostrarInicio(event) {

    if (event) {
        event.preventDefault();
    }

    // Ocultar todos
    inicio.classList.remove("oculto");
    equipos.classList.add("oculto");
    resumen.classList.add("oculto");

}


/* =====================================
   MOSTRAR EQUIPOS
===================================== */

function mostrarEquipos(event) {

    if (event) {
        event.preventDefault();
    }

    // Ocultar todos
    inicio.classList.add("oculto");
    equipos.classList.remove("oculto");
    resumen.classList.add("oculto");

}


/* =====================================
   MOSTRAR RESUMEN
===================================== */

function mostrarResumen() {

    // Ocultar todos
    inicio.classList.add("oculto");
    equipos.classList.add("oculto");

    // Mostrar resumen
    resumen.classList.remove("oculto");

}