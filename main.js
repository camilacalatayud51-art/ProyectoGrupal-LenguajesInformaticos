
/* =========================
   MAPA INTERACTIVO
   ========================= */

const marcadores = document.querySelectorAll('.marcador');
const infoMapa = document.getElementById('info-mapa');
const tituloMapa = document.getElementById('titulo-mapa');
const descripcionMapa = document.getElementById('descripcion-mapa');
const cerrarMapa = document.getElementById('cerrar-mapa');

if (marcadores.length > 0 && infoMapa && tituloMapa && descripcionMapa && cerrarMapa) {

    marcadores.forEach(function(marcador) {
        marcador.addEventListener('click', function() {

            const titulo = marcador.dataset.titulo;
            const descripcion = marcador.dataset.descripcion;

            tituloMapa.textContent = titulo;
            descripcionMapa.textContent = descripcion;

            infoMapa.classList.remove('d-none');

            infoMapa.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest'
            });
        });
    });

    cerrarMapa.addEventListener('click', function() {
        infoMapa.classList.add('d-none');
    });
}


/* =========================
   MODO OSCURO
   ========================= */

// Buscamos el botón
const botonModo = document.getElementById("boton-modo");

// Recuperamos el modo guardado
const modoGuardado = localStorage.getItem("modo-oscuro");

// Aplicamos el modo guardado
if (modoGuardado === "activado") {
    document.body.classList.add("modo-oscuro");
}

// Cambiamos el modo al presionar el botón
if (botonModo) {

    // Actualizamos el texto inicial del botón
    if (modoGuardado === "activado") {
        botonModo.textContent = "☀️ Modo claro";
    }

    botonModo.addEventListener("click", function() {

        document.body.classList.toggle("modo-oscuro");

        if (document.body.classList.contains("modo-oscuro")) {

            localStorage.setItem("modo-oscuro", "activado");
            botonModo.textContent = "☀️ Modo claro";

        } else {

            localStorage.setItem("modo-oscuro", "desactivado");
            botonModo.textContent = "🌙 Modo oscuro";

        }
    });
}
