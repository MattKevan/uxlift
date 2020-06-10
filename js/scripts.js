$(document).ready(function() {

	$(window).scroll(function(){                          
        if ($(this).scrollTop() > 250) {
            $('#navbar-pagenav').fadeIn(200);
        } else {
            $('#navbar-pagenav').fadeOut(200);
        }
    });

    $( "a.scrollLink" ).click(function( event ) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
    });

});






