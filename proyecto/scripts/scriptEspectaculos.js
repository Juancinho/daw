document.addEventListener("DOMContentLoaded", function () {
    fetch('../json/espectaculos.xml')
        .then(response => response.text())
        .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
        .then(data => {
            let fechasNoDisponibles = {};

            data.querySelectorAll('espectaculo').forEach(espectaculo => {
                let idEspectaculo = espectaculo.getAttribute('id');
                fechasNoDisponibles[idEspectaculo] = [];

                espectaculo.querySelectorAll('fecha').forEach(fecha => {
                    fechasNoDisponibles[idEspectaculo].push(fecha.textContent);
                });
            });

            // Calcula la fecha de hoy y la formatea para establecer el atributo min
            const hoy = new Date().toISOString().split('T')[0];
            document.querySelectorAll(".reservar-datepicker").forEach(function (inputDate) {
                // Establece la fecha mínima a hoy para evitar la selección de fechas pasadas
                inputDate.setAttribute('min', hoy);

                let idEspectaculo = inputDate.closest('article').getAttribute('id');
                let botonConfirmar = inputDate.nextElementSibling;

                botonConfirmar.onclick = function () {
                    let fechaSeleccionada = inputDate.value;
                    // Verifica si se ha seleccionado una fecha
                    if (!fechaSeleccionada) {
                        alert('Por favor, selecciona una fecha antes de confirmar tu reserva.');
                        return; // Detiene la ejecución del resto del código en esta función
                    }

                    if (fechasNoDisponibles[idEspectaculo] && fechasNoDisponibles[idEspectaculo].includes(fechaSeleccionada)) {
                        alert('La fecha: ' + fechaSeleccionada + ' no está disponible.');
                    } else {
                        alert('Reserva correcta para: ' + fechaSeleccionada);
                    }
                };
            });
        })
        .catch(error => console.log('Error al cargar el archivo XML: ', error));
});
