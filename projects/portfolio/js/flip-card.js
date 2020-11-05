$(function(){
	$('.log-in-button').on('click', function(e){
    	e.preventDefault();
    	$('.flip-container').addClass('flip');
    	$(this).hide();
    });
}),

$(function(){
	$('.main-button').on('click', function(e){
	    e.preventDefault();
	    $('.flip-container').removeClass('flip');
	    $('.log-in-button').show();
	});	
});