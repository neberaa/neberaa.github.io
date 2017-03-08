$('.hamburger-icon').on('click', function(e) {
	e.preventDefault();
	$('.menu-container').show();
});

$('.x-icon__container').on('click', function(e) {
	e.preventDefault();
	$('.menu-container').hide();
});