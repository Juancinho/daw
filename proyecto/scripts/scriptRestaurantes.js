$(document).ready(function() {
    // Asumiendo que la ruta a restaurantes.json es correcta y accesible
    $.getJSON('../json/restaurantes.json', function(data) {
        $('.mas-detalles').click(function() {
            // Encuentra el restaurante correspondiente en el JSON
            var nombreRestaurante = $(this).data('restaurante');
            var detallesRestaurante = data.find(restaurante => restaurante.nombre === nombreRestaurante);

            // Comprueba que detallesRestaurante está definido
            if (detallesRestaurante) {
                var htmlDetalles = "<p>" + detallesRestaurante.detalles + "</p><ul>";

                // Asegúrate de que detallesRestaurante.menu está definido y es un array
                if (Array.isArray(detallesRestaurante.menu)) {
                    detallesRestaurante.menu.forEach(function(item) {
                        htmlDetalles += "<li>" + item.item + ": " + item.precio + "</li>";
                    });
                } else {
                    console.error("Menu no definido o no es un array");
                }

                htmlDetalles += "</ul>";

                // Muestra los detalles debajo del restaurante correspondiente
                $(this).next('.detalles-restaurante').html(htmlDetalles).slideToggle();
            } else {
                console.error("Detalles del restaurante no encontrados para: " + nombreRestaurante);
            }
        });
    }).fail(function(jqXHR, textStatus, errorThrown) {
        console.error("Error al cargar el JSON: " + textStatus + ", " + errorThrown);
    });
});
