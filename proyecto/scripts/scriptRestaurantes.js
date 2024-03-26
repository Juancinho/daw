$(document).ready(function() {
    // Asumiendo que restaurantes.json está estructurado como se describió anteriormente
    $.getJSON('json/restaurantes.json', function(data) {
        $('.mas-detalles').click(function() {
            // Encuentra el restaurante correspondiente en el JSON
            var nombreRestaurante = $(this).data('restaurante');
            var detallesRestaurante = data.find(restaurante => restaurante.nombre === nombreRestaurante);

            // Construye el HTML para los detalles
            var htmlDetalles = "<p>" + detallesRestaurante.detalles + "</p><ul>";
            detallesRestaurante.menu.forEach(function(item) {
                htmlDetalles += "<li>" + item.item + ": " + item.precio + "</li>";
            });
            htmlDetalles += "</ul>";

            // Muestra los detalles debajo del restaurante correspondiente
            $(this).next('.detalles-restaurante').html(htmlDetalles).slideToggle();
        });
    });
});
