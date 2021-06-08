jQuery(document).ready(function($) {

    console.log('hero.js connected');

    /* Auto sizes the home page hero */
    if ( $('.video-container.video-background').length ) {
        function calcVideoHeight() {
            let navHeight = ( $('#fixed-header').height() + $('.site-header').height() );
            let videoContainer = $('.video-container.video-background');
            let windowWidth = $(window).width();
            let vidHeight = windowWidth <= 425 ? ( windowWidth * (5/4) ) : ( windowWidth * (9/16) );

            videoContainer.css({'height' : vidHeight, 'max-height' : `calc(100vh - ${navHeight}px)`});
        }

        calcVideoHeight();

        $(window).resize(calcVideoHeight);

        $('.hero-iframe').on('load', function(e) {
            $(this).show();
            $('.hero-thumbnail').fadeOut('fast', function() {
                $(this).hide();
            });
        })
    }



});


