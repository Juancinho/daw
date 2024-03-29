$(window).on('scroll', function() {
    $('.fade-in-section').each(function(){
        let elementPos = $(this).offset().top;
        let topOfWindow = $(window).scrollTop();
        let windowHeight = $(window).height();

        if (elementPos < topOfWindow + windowHeight - 10) {
            $(this).addClass('start');
        }
    });
});

$(document).ready(function(){
    // Activar la animación de fade in en todos los elementos con la clase .fade-in
    $('.fade-in').css('opacity', 0).each(function(i) {
        $(this).delay(i * 500).animate({'opacity': 1}, 1000);
    });
    // Agrega un evento de despliegue suave al submenú
    showMenu=(e)=>{e.preventDefault();$("#submenu").slideToggle()};
    hideMenu=()=>{ $("#submenu").slideUp()};
  

});

