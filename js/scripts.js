$(document).ready(function() {

// Owl Carousel
  $("#work-carousel").owlCarousel({
  	 items : 1,
  	 singleItem:true,
  	 autoPlay: false,
  	 pagination: true,
  	 navigation: true,
  });

  $(document).on('change', '.div-toggle', function() {
  var target = $(this).data('target');
  var show = $("option:selected", this).data('show');
  $(target).children().addClass('hide');
  $(show).removeClass('hide');
});
$(document).ready(function(){
  $('.div-toggle').trigger('change');
});


});
