document.addEventListener("DOMContentLoaded", function() {
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
                console.log(fecha.textContent);
            });
        });

        document.querySelectorAll(".reservar-datepicker").forEach(function(elem) {
            var idEspectaculo = elem.closest('article').getAttribute('id');
            
            $(elem).datepicker({
                dateFormat: "yy-mm-dd",
                minDate: 0,
                showButtonPanel: true,
                beforeShowDay: function(date) {
                    var string = jQuery.datepicker.formatDate('yy-mm-dd', date);
                    if (fechasNoDisponibles[idEspectaculo] && fechasNoDisponibles[idEspectaculo].indexOf(string) >= 0) {
                        return [false, "", "No disponible"];
                    } else {
                        return [true, "", "Disponible"];
                    }
                },
                onSelect: function(dateText, inst) {
                    if (fechasNoDisponibles[idEspectaculo] && fechasNoDisponibles[idEspectaculo].indexOf(dateText) >= 0) {
                        alert('La fecha: ' + dateText + ' no está disponible.');
                    } else {
                        alert('Reserva correcta para: ' + dateText);
                    }
                }
            });
        });
    })
    .catch(error => console.log('Error al cargar el archivo XML: ', error));
});
