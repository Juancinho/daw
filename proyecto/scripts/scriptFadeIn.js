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

