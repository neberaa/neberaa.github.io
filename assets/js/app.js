(function() {
  'use strict';
  

  $('.bxslider').bxSlider({
  	adaptiveHeight: false,
  	mode: 'fade',
  	controls: true
  });

  $('.hamburger').click(function(){
  		$('html, body').animate({ scrollTop: 0 }, "slow");
        $(this).toggleClass('is-active');
        $('.menu').fadeToggle('2000');
    });

  $('.submenu').click(function(){
        $('.submenu__container').slideToggle('2000');
    });

})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCkge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuICBcclxuXHJcbiAgJCgnLmJ4c2xpZGVyJykuYnhTbGlkZXIoe1xyXG4gIFx0YWRhcHRpdmVIZWlnaHQ6IGZhbHNlLFxyXG4gIFx0bW9kZTogJ2ZhZGUnLFxyXG4gIFx0Y29udHJvbHM6IHRydWVcclxuICB9KTtcclxuXHJcbiAgJCgnLmhhbWJ1cmdlcicpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgXHRcdCQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAwIH0sIFwic2xvd1wiKTtcclxuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdpcy1hY3RpdmUnKTtcclxuICAgICAgICAkKCcubWVudScpLmZhZGVUb2dnbGUoJzIwMDAnKTtcclxuICAgIH0pO1xyXG5cclxuICAkKCcuc3VibWVudScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCgnLnN1Ym1lbnVfX2NvbnRhaW5lcicpLnNsaWRlVG9nZ2xlKCcyMDAwJyk7XHJcbiAgICB9KTtcclxuXHJcbn0pKCk7Il19
