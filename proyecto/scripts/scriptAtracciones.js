// Obtén los elementos de los botones de filtrar
const zonaButton = document.getElementById('botonFiltrarZona');
const intensidadButton = document.getElementById('botonFiltrarIntensidad');

// Obtén los elementos de los artículos de las atracciones
const atracciones = document.querySelectorAll('article');

// Agrega un evento de clic al botón de filtrar por zona
zonaButton.addEventListener('click', () => {
    const zonaSeleccionada = document.getElementById('botonFiltrarZona').value;

    // Recorre todos los artículos de las atracciones
    for (let i = 0; i < atracciones.length; i++) {
        const atraccion = atracciones[i];
        const zonaAtraccion = atraccion.getElementsByClassName('zona')[0].textContent;

        // Comprueba si la zona de la atracción coincide con la zona seleccionada
        if (zonaAtraccion === zonaSeleccionada) {
            atraccion.style.display = 'block'; // Muestra la atracción
        } else {
            atraccion.style.display = 'none'; // Oculta la atracción
        }
    }
});

// Agrega un evento de clic al botón de filtrar por intensidad
intensidadButton.addEventListener('click', () => {
    const intensidadSeleccionada = document.getElementById('botonFiltrarIntensidad').value;

    // Recorre todos los artículos de las atracciones
    for (let i = 0; i < atracciones.length; i++) {
        const atraccion = atracciones[i];
        const intensidadAtraccion = getElementsByClassName('info-atraccion')[0].textContent;

        // Comprueba si la intensidad de la atracción coincide con la intensidad seleccionada
        if (intensidadAtraccion === intensidadSeleccionada) {
            atraccion.style.display = 'block'; // Muestra la atracción
        } else {
            atraccion.style.display = 'none'; // Oculta la atracción
        }
    }
});