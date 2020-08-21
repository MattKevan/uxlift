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

     // clicking button with class "category-button"
    $(".category-button").click(function(){
        // get the data-filter value of the button
        $('.active').not($(this)).removeClass('active');
        $(this).toggleClass('active');

        var filterValue = $(this).attr('data-filter');
        
        // show all items
        if(filterValue == "all")
        {
            $(".all").show("slow");
        }
        else
        {   
            // hide all items
            $(".all").not('.'+filterValue).hide("slow");
            // and then, show only items with selected data-filter value
            $(".all").filter('.'+filterValue).show("slow");
        }
    });


});






