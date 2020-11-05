(function() {
  'use strict';

/* ============ Inner navigation ============*/

	var features = $('.navigation__innerlist--features'),
		pages = $('.navigation__innerlist--pages');

	$('.features').click(function(e){
       $(features).slideToggle('2000');
       e.stopPropagation();
    });

    $('.pages').click(function(e){
        $(pages).slideToggle('2000');
        e.stopPropagation();
    });

    $(document).click(function(){
    	$(features).slideUp('2000');
    	$(pages).slideUp('2000');
    });



/* ============ Gallery ============*/

var grid = $('.image-grid');

	// Init Masonry
	grid.masonry({
	  itemSelector: 'none', // select none at first
	  columnWidth: '.image-grid__col-sizer',
	  gutter: '.image-grid__gutter-sizer',
	  percentPosition: true,
	  // nicer reveal transition
	  visibleStyle: { transform: 'translateY(0)', opacity: 1 },
	  hiddenStyle: { transform: 'translateY(100px)', opacity: 0 },
	});

	// Init isotope
	grid.isotope({
	  itemSelector: '.image-grid__item',
	  masonry: {
	  	columnWidth: '.image-grid__col-sizer',
	  	percentPosition: true,
	  	gutter: '.image-grid__gutter-sizer'
	  	}
	});

	// get Masonry instance
	var msnry = grid.data('masonry');

	// initial items reveal
	grid.imagesLoaded( function() {
	  grid.removeClass('are-images-unloaded');
	  grid.masonry( 'option', { itemSelector: '.image-grid__item' });
	  var $items = grid.find('.image-grid__item');
	  grid.masonry( 'appended', $items );
	});

	// filtering button click
	$('.filter-button-group').on( 'click', '.filter-button', function() {
	  var filterValue = $(this).attr('data-filter');
	  grid.isotope({ filter: filterValue });
	});

	// change is-checked class on buttons
	$('.button-group').each( function( i, buttonGroup ) {
	  var $buttonGroup = $( buttonGroup );
	  $buttonGroup.on( 'click', '.filter-button', function() {
	    $buttonGroup.find('.is-checked').removeClass('is-checked');
	    $( this ).addClass('is-checked');
	  });
	});


/* ============ Fixed header on scroll ============*/


$(window).scroll(function(){
  var header = $('.header'),
      scroll = $(window).scrollTop();

  if (scroll > 0) header.css('position', 'fixed');
  else header.css('position', 'relative');
});

/* ============ Scroll top button ============*/
	
var button = $('.top-button');

	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if (scroll === 0)  button.hide();
  		else button.show();
	});

	button.on('click', function() {
		$('html, body').animate({ scrollTop: 0 }, 'slow');
	});

})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuLyogPT09PT09PT09PT09IElubmVyIG5hdmlnYXRpb24gPT09PT09PT09PT09Ki9cclxuXHJcblx0dmFyIGZlYXR1cmVzID0gJCgnLm5hdmlnYXRpb25fX2lubmVybGlzdC0tZmVhdHVyZXMnKSxcclxuXHRcdHBhZ2VzID0gJCgnLm5hdmlnYXRpb25fX2lubmVybGlzdC0tcGFnZXMnKTtcclxuXHJcblx0JCgnLmZlYXR1cmVzJykuY2xpY2soZnVuY3Rpb24oZSl7XHJcbiAgICAgICAkKGZlYXR1cmVzKS5zbGlkZVRvZ2dsZSgnMjAwMCcpO1xyXG4gICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5wYWdlcycpLmNsaWNrKGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICQocGFnZXMpLnNsaWRlVG9nZ2xlKCcyMDAwJyk7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICBcdCQoZmVhdHVyZXMpLnNsaWRlVXAoJzIwMDAnKTtcclxuICAgIFx0JChwYWdlcykuc2xpZGVVcCgnMjAwMCcpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcbi8qID09PT09PT09PT09PSBHYWxsZXJ5ID09PT09PT09PT09PSovXHJcblxyXG52YXIgZ3JpZCA9ICQoJy5pbWFnZS1ncmlkJyk7XHJcblxyXG5cdC8vIEluaXQgTWFzb25yeVxyXG5cdGdyaWQubWFzb25yeSh7XHJcblx0ICBpdGVtU2VsZWN0b3I6ICdub25lJywgLy8gc2VsZWN0IG5vbmUgYXQgZmlyc3RcclxuXHQgIGNvbHVtbldpZHRoOiAnLmltYWdlLWdyaWRfX2NvbC1zaXplcicsXHJcblx0ICBndXR0ZXI6ICcuaW1hZ2UtZ3JpZF9fZ3V0dGVyLXNpemVyJyxcclxuXHQgIHBlcmNlbnRQb3NpdGlvbjogdHJ1ZSxcclxuXHQgIC8vIG5pY2VyIHJldmVhbCB0cmFuc2l0aW9uXHJcblx0ICB2aXNpYmxlU3R5bGU6IHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKScsIG9wYWNpdHk6IDEgfSxcclxuXHQgIGhpZGRlblN0eWxlOiB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMTAwcHgpJywgb3BhY2l0eTogMCB9LFxyXG5cdH0pO1xyXG5cclxuXHQvLyBJbml0IGlzb3RvcGVcclxuXHRncmlkLmlzb3RvcGUoe1xyXG5cdCAgaXRlbVNlbGVjdG9yOiAnLmltYWdlLWdyaWRfX2l0ZW0nLFxyXG5cdCAgbWFzb25yeToge1xyXG5cdCAgXHRjb2x1bW5XaWR0aDogJy5pbWFnZS1ncmlkX19jb2wtc2l6ZXInLFxyXG5cdCAgXHRwZXJjZW50UG9zaXRpb246IHRydWUsXHJcblx0ICBcdGd1dHRlcjogJy5pbWFnZS1ncmlkX19ndXR0ZXItc2l6ZXInXHJcblx0ICBcdH1cclxuXHR9KTtcclxuXHJcblx0Ly8gZ2V0IE1hc29ucnkgaW5zdGFuY2VcclxuXHR2YXIgbXNucnkgPSBncmlkLmRhdGEoJ21hc29ucnknKTtcclxuXHJcblx0Ly8gaW5pdGlhbCBpdGVtcyByZXZlYWxcclxuXHRncmlkLmltYWdlc0xvYWRlZCggZnVuY3Rpb24oKSB7XHJcblx0ICBncmlkLnJlbW92ZUNsYXNzKCdhcmUtaW1hZ2VzLXVubG9hZGVkJyk7XHJcblx0ICBncmlkLm1hc29ucnkoICdvcHRpb24nLCB7IGl0ZW1TZWxlY3RvcjogJy5pbWFnZS1ncmlkX19pdGVtJyB9KTtcclxuXHQgIHZhciAkaXRlbXMgPSBncmlkLmZpbmQoJy5pbWFnZS1ncmlkX19pdGVtJyk7XHJcblx0ICBncmlkLm1hc29ucnkoICdhcHBlbmRlZCcsICRpdGVtcyApO1xyXG5cdH0pO1xyXG5cclxuXHQvLyBmaWx0ZXJpbmcgYnV0dG9uIGNsaWNrXHJcblx0JCgnLmZpbHRlci1idXR0b24tZ3JvdXAnKS5vbiggJ2NsaWNrJywgJy5maWx0ZXItYnV0dG9uJywgZnVuY3Rpb24oKSB7XHJcblx0ICB2YXIgZmlsdGVyVmFsdWUgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtZmlsdGVyJyk7XHJcblx0ICBncmlkLmlzb3RvcGUoeyBmaWx0ZXI6IGZpbHRlclZhbHVlIH0pO1xyXG5cdH0pO1xyXG5cclxuXHQvLyBjaGFuZ2UgaXMtY2hlY2tlZCBjbGFzcyBvbiBidXR0b25zXHJcblx0JCgnLmJ1dHRvbi1ncm91cCcpLmVhY2goIGZ1bmN0aW9uKCBpLCBidXR0b25Hcm91cCApIHtcclxuXHQgIHZhciAkYnV0dG9uR3JvdXAgPSAkKCBidXR0b25Hcm91cCApO1xyXG5cdCAgJGJ1dHRvbkdyb3VwLm9uKCAnY2xpY2snLCAnLmZpbHRlci1idXR0b24nLCBmdW5jdGlvbigpIHtcclxuXHQgICAgJGJ1dHRvbkdyb3VwLmZpbmQoJy5pcy1jaGVja2VkJykucmVtb3ZlQ2xhc3MoJ2lzLWNoZWNrZWQnKTtcclxuXHQgICAgJCggdGhpcyApLmFkZENsYXNzKCdpcy1jaGVja2VkJyk7XHJcblx0ICB9KTtcclxuXHR9KTtcclxuXHJcblxyXG4vKiA9PT09PT09PT09PT0gRml4ZWQgaGVhZGVyIG9uIHNjcm9sbCA9PT09PT09PT09PT0qL1xyXG5cclxuXHJcbiQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcclxuICB2YXIgaGVhZGVyID0gJCgnLmhlYWRlcicpLFxyXG4gICAgICBzY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcblxyXG4gIGlmIChzY3JvbGwgPiAwKSBoZWFkZXIuY3NzKCdwb3NpdGlvbicsICdmaXhlZCcpO1xyXG4gIGVsc2UgaGVhZGVyLmNzcygncG9zaXRpb24nLCAncmVsYXRpdmUnKTtcclxufSk7XHJcblxyXG4vKiA9PT09PT09PT09PT0gU2Nyb2xsIHRvcCBidXR0b24gPT09PT09PT09PT09Ki9cclxuXHRcclxudmFyIGJ1dHRvbiA9ICQoJy50b3AtYnV0dG9uJyk7XHJcblxyXG5cdCQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcclxuXHRcdHZhciBzY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcblx0XHRpZiAoc2Nyb2xsID09PSAwKSAgYnV0dG9uLmhpZGUoKTtcclxuICBcdFx0ZWxzZSBidXR0b24uc2hvdygpO1xyXG5cdH0pO1xyXG5cclxuXHRidXR0b24ub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHQkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7IHNjcm9sbFRvcDogMCB9LCAnc2xvdycpO1xyXG5cdH0pO1xyXG5cclxufSkoKTsiXX0=
