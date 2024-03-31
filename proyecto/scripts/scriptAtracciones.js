// Obtén los elementos de los botones de filtrar
document.addEventListener('DOMContentLoaded', function () {
    const contenedorBotones = document.querySelector('#sidebar');
    const zonaButton = contenedorBotones.querySelectorAll('.botonFiltrarZona');
    const intensidadButton = contenedorBotones.querySelectorAll('.botonFiltrarIntensidad');
    const atracciones = document.querySelectorAll('article');
    const filtroInput = contenedorBotones.querySelector('textarea');
    const imagenes = document.querySelectorAll('main article img');

    // Agrega un evento de clic al botón de filtrar por zona
    for (let i = 0; i < zonaButton.length; i++) {
        zonaButton[i].addEventListener('click', (event) => {
            const zonaSeleccionada = event.target.textContent.trim().toLowerCase();

            // Recorre todos los artículos de las atracciones
            for (let i = 0; i < atracciones.length; i++) {
                const atraccion = atracciones[i];
                const zonaAtraccion = atraccion.getElementsByClassName('zona')[0].textContent.trim().toLowerCase();

                // Comprueba si la zona de la atracción coincide con la zona seleccionada
                if (zonaAtraccion == zonaSeleccionada || zonaSeleccionada == "todas") {

                    atraccion.classList.remove('oculto'); // Muestra la atracción
                } else {
                    atraccion.classList.add("oculto"); // Oculta la atracción
                }
            }
        });
    }
    for (let i = 0; i < intensidadButton.length; i++) {
        // Agrega un evento de clic al botón de filtrar por intensidad
        intensidadButton[i].addEventListener('click', (event) => {
            const intensidadSeleccionada = event.target.textContent.trim().toLowerCase();

            // Recorre todos los artículos de las atracciones
            for (let i = 0; i < atracciones.length; i++) {
                const atraccion = atracciones[i];
                const intensidadAtraccion = atraccion.getElementsByClassName('info-atraccion')[0].textContent.trim().toLowerCase();

                // Comprueba si la intensidad de la atracción coincide con la intensidad seleccionada
                if (intensidadAtraccion == intensidadSeleccionada) {
                    atraccion.classList.remove('oculto'); // Muestra la atracción
                } else {
                    atraccion.classList.add("oculto"); // Oculta la atracción
                }
            }
        });
    }
    for (let i = 0; i < imagenes.length; i++) {
        imagenes[i].addEventListener('mouseenter', (event) => {
            const imagenSeleccionada = event.target;
            imagenSeleccionada.style.opacity = '0.05'; // Hacer la imagen transparente en lugar de ocultarla
        });

        imagenes[i].addEventListener('mouseleave', (event) => {
            const imagenSeleccionada = event.target;
            imagenSeleccionada.style.opacity = '1'; // Hacer la imagen visible nuevamente
        });
    }


    //Botones de filtro por nombre
    filtroInput.addEventListener('input', function () {
        const filtroTexto = filtroInput.value.trim().toLowerCase();

        // Recorre todas las atracciones
        atracciones.forEach(function (atraccion) {
            const nombreAtraccion = atraccion.querySelector('h2').textContent.trim().toLowerCase();

            // Si el nombre de la atracción coincide con el filtro o el filtro está vacío, muestra la atracción
            if (nombreAtraccion.includes(filtroTexto) || filtroTexto === '') {
                atraccion.classList.remove('oculto');
            } else {
                atraccion.classList.add('oculto');
            }
        });
    });
    // Botones de imagen y descripción
    const botonImagen = document.getElementById('boton-imagen');
    const botonDescripcion = document.getElementById('boton-descripcion');
    botonImagen.addEventListener('change', function () {
        const imagenes = document.querySelectorAll('main article img');
        imagenes.forEach(function (imagen) {
            imagen.style.visibility = 'visible';
        });
    });

    botonDescripcion.addEventListener('change', function () {
        const imagenes = document.querySelectorAll('main article img');
        imagenes.forEach(function (imagen) {
            imagen.style.visibility = 'hidden';
        });
    });

});
