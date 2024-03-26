$(document).ready(function() {
    // Cargar los detalles de los restaurantes al inicio
    $.getJSON('json/restaurantes.json', function(restaurantes) {
        // Asignar evento click a cada botón "Más detalles"
        $('button').each(function(index) {
            $(this).on('click', function() {
                // Aquí asumimos que el índice del botón coincide con el índice del restaurante en el JSON
                if (restaurantes[index]) {
                    // Mostrar los detalles en el div correspondiente
                    $(this).next('.detalles-restaurante').toggle().text(restaurantes[index].detalles);
                }
            });
        });
    });
});
