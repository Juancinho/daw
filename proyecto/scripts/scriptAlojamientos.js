
document.addEventListener("DOMContentLoaded", function() {
    /*Al pulsar en el boton reservar, pone el hotel en el desplegable*/
    let botonesReservar = document.querySelectorAll('.alojamientos button');
    let hotelSelector   = document.querySelector('#hotel');

    for (let boton of botonesReservar) {
        boton.addEventListener('click', function() {
            let hotel = boton.parentElement.querySelector('h2').textContent;
            hotelSelector.value = hotel;
        });
    }


    // Usa fetch para cargar el archivo XML que contiene las fechas no disponibles.
    fetch('../json/alojamientos.xml')
    .then(response => response.text()) // Convierte la respuesta en texto.
    .then(str => (new window.DOMParser()).parseFromString(str, "text/xml")) // Parsea el texto a XML.
    .then(data => {
        let fechasNoDisponibles = {}; // Objeto para almacenar las fechas no disponibles por espectáculo.
        
        // Recorre cada elemento <alojamiento> en el XML.
        data.querySelectorAll('alojamiento').forEach(alojamiento => {
            let idAlojamiento = alojamiento.getAttribute('id'); // Obtiene el ID del espectáculo.
            fechasNoDisponibles[idAlojamiento] = []; // Prepara un arreglo para este espectáculo.
            
            // Añade cada fecha no disponible al arreglo del espectáculo correspondiente.
            alojamiento.querySelectorAll('fecha').forEach(fecha => {
                fechasNoDisponibles[idAlojamiento].push(fecha.textContent);
                console.log(fecha.textContent);
            });
        });

        // Inicializa el datepicker para cada input con la clase .reservar-datepicker.
        let calendario = document.querySelector('#calendario');
        
        document.querySelector('#boton-reservar').addEventListener('click',function (){
            console.log('Comprobando datos');
             if(hotelSelector.value === 'Selecciona un hotel' || hotelSelector.value === ''){
                alert('Por favor, selecciona un hotel.');
            }
            else if(calendario.value === ''){
                alert('Por favor, selecciona una fecha.');
                console.log('Por favor, selecciona una fecha.');
            }
           
            else if(document.querySelector('#personas').value === ''){
                alert('Por favor, selecciona el número de personas.');
            }
            else if(document.querySelector('#noches').value === ''){
                alert('Por favor, selecciona el número de noches.');
            }
            else{
                let fechaElegida = new Date(calendario.value);
                let fechaFin = new Date(calendario.value);
                fechaFin.setDate(fechaFin.getDate() + parseInt(document.querySelector('#noches').value));
                let hotel = hotelSelector.value;
                let idAlojamiento;
                document.querySelectorAll('option').forEach(option => {
                    console.log('otion context',option.textContent);
                    console.log(hotel);
                    if (option.textContent === hotel) {
                        
                        idAlojamiento = option.getAttribute('id');
                    }
                });
                console.log(fechaElegida);
                console.log(hotel);
                console.log('id:',idAlojamiento);
                console.log('fechas no disponibles:',fechasNoDisponibles[idAlojamiento]);
                let fechasReserva = obtenerFechasEntre(fechaElegida, fechaFin);
                function obtenerFechasEntre(fechaInicio, fechaFin) {
                    let fechaArray = [];
                    let fechaActual = fechaInicio;
                
                    while (fechaActual <= fechaFin) {
                        fechaArray.push(new Date(fechaActual));
                        fechaActual.setDate(fechaActual.getDate() + 1);
                    }
                
                    return fechaArray;
                }

                let fechasNoDisponiblesHotel = fechasNoDisponibles[idAlojamiento].map(fecha => new Date(fecha));

                for (let i = 0; i < fechasReserva.length; i++) {
                    for (let j = 0; j < fechasNoDisponiblesHotel.length; j++) {
                        if (fechasReserva[i].getTime() === fechasNoDisponiblesHotel[j].getTime()) {
                            alert(`Lo sentimos, la  fecha ${fechasReserva[i].toISOString().slice(0,10)} no están disponibles para el hotel seleccionado.`);

                            return;
                        }   
                    }
                }        
                
                alert('¡Reserva realizada con éxito!');
                
            }
        });
    });
});
