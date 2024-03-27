$(window).on('scroll', function() {
    $('.fade-in-section').each(function(){
        let elementPos = $(this).offset().top;
        let topOfWindow = $(window).scrollTop();
        let windowHeight = $(window).height();

        if (elementPos < topOfWindow + windowHeight - 100) {
            $(this).addClass('start');
        }
    });
});

$(document).ready(function(){
    // Agrega un evento de despliegue suave al submenú
    showMenu=(e)=>{e.preventDefault();$("#submenu").slideToggle()};
    hideMenu=()=>{ $("#submenu").slideUp()};
  

    
});

