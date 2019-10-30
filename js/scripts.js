$(document).ready(function() {

  $('.item').matchHeight();

/*
	// init Isotope
	var $grid = $('.filter-grid').isotope({
	  itemSelector: '.filter-item',
	  layoutMode: 'fitRows'
	});

  // layout Isotope after each image loads
  $grid.imagesLoaded().progress( function() {
    $grid.isotope('layout');
  });
  $grid.on( 'arrangeComplete', function( event, filteredItems ) {
	  $.fn.matchHeight._update()
  });


	
	// filter functions
	var filterFns = { };
	// bind filter button click
	$('.filter-button-group').on( 'click', 'button', function() {
	  var filterValue = $( this ).attr('data-filter');
	  // use filterFn if matches value
	  filterValue = filterFns[ filterValue ] || filterValue;
	  $grid.isotope({ filter: filterValue });
	});
	// change is-checked class on buttons
	$('.button-group').each( function( i, buttonGroup ) {
	  var $buttonGroup = $( buttonGroup );
	  $buttonGroup.on( 'click', 'button', function() {
	    $buttonGroup.find('.is-checked').removeClass('is-checked');
	    $( this ).addClass('is-checked');
	  });
	});
*/

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
    
    $(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a:not(".dropdown-toggle")') ) {
        $(this).collapse('hide');
    }
});

});






