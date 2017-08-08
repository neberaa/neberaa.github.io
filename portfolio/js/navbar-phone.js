$(function(){
    $('.sidebar-link').on('click', function(e){
    	e.preventDefault();
    	$(this).toggleClass('pushed');
    	$('.blog-nav').toggleClass('blog-nav_mobile');
    });
});