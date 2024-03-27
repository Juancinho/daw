// Espera a que el contenido de la página esté completamente cargado.
document.addEventListener("DOMContentLoaded", function() {
    // Usa fetch para cargar el archivo XML que contiene las fechas no disponibles.
    fetch('../json/espectaculos.xml')
    .then(response => response.text()) // Convierte la respuesta en texto.
    .then(str => (new window.DOMParser()).parseFromString(str, "text/xml")) // Parsea el texto a XML.
    .then(data => {
        let fechasNoDisponibles = {}; // Objeto para almacenar las fechas no disponibles por espectáculo.
        
        // Recorre cada elemento <espectaculo> en el XML.
        data.querySelectorAll('espectaculo').forEach(espectaculo => {
            let idEspectaculo = espectaculo.getAttribute('id'); // Obtiene el ID del espectáculo.
            fechasNoDisponibles[idEspectaculo] = []; // Prepara un arreglo para este espectáculo.
            
            // Añade cada fecha no disponible al arreglo del espectáculo correspondiente.
            espectaculo.querySelectorAll('fecha').forEach(fecha => {
                fechasNoDisponibles[idEspectaculo].push(fecha.textContent);
            });
        });

        // Inicializa el datepicker para cada input con la clase .reservar-datepicker.
        document.querySelectorAll(".reservar-datepicker").forEach(function(elem) {
            var idEspectaculo = elem.closest('article').getAttribute('id'); // Supone que el ID del artículo es el ID del espectáculo.
            
            $(elem).datepicker({
                dateFormat: "yy-mm-dd", // Formato de la fecha.
                minDate: 0, // No permite seleccionar fechas pasadas.
                showButtonPanel: true,
                beforeShowDay: function(date) {
                    // Formatea la fecha a string para comparar.
                    var string = jQuery.datepicker.formatDate('yy-mm-dd', date);
                    // Comprueba si la fecha está en el arreglo de fechas no disponibles.
                    if (fechasNoDisponibles[idEspectaculo] && fechasNoDisponibles[idEspectaculo].indexOf(string) >= 0) {
                        return [false, "", "No disponible"]; // Marca la fecha como no disponible.
                    } else {
                        return [true, "", "Disponible"]; // Marca la fecha como disponible.
                    }
                },
                onSelect: function(dateText, inst) {
                    elem.value = 'Reserva para: ' + dateText;
                    
                }
            });
        });
    })
    .catch(error => console.log('Error al cargar el archivo XML: ', error)); // Captura y registra errores.
});
