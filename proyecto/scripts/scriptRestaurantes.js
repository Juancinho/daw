$(document).ready(function() {
    // Asumiendo que la ruta a restaurantes.json es correcta y accesible
    $.getJSON('../json/restaurantes.json', function(data) {
        $('.mas-detalles').click(function() {
            // Encuentra el restaurante correspondiente en el JSON
            var nombreRestaurante = $(this).data('restaurante');
            var detallesRestaurante = data.find(restaurante => restaurante.nombre === nombreRestaurante);

            // Comprueba que detallesRestaurante está definido
            if (detallesRestaurante) {
                var htmlDetalles = "<h3>"+ nombreRestaurante+"</h3><p>" + detallesRestaurante.detalles + "</p><ul>";

                detallesRestaurante.menu.forEach(function(item) {
                    htmlDetalles += "<li>" + item.item + ": " + item.precio + "</li>";
                });

                htmlDetalles += "</ul>";

                // Muestra los detalles extendiendo el desplegable
                $(this).next('.detalles-restaurante').html(htmlDetalles).slideToggle();
            } else {
                console.error("Detalles del restaurante no encontrados para: " + nombreRestaurante);
            }
        });
    })
});
