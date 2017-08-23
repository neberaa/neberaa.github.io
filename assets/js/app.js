(function() {
  'use strict';
  
/*================Main page slider========================*/

  $('.bxslider').bxSlider({
  	adaptiveHeight: false,
  	mode: 'fade',
  	controls: true
  });

/*================Hamburger menu fullscreen========================*/
  $('.hamburger').click(function(){
  		$('html, body').animate({ scrollTop: 0 }, "slow");
        $(this).toggleClass('is-active');
        $('.menu').fadeToggle('2000');
    });

  $('.submenu').click(function(){
        $('.submenu__container').slideToggle('2000');
    });

/*================Exchange rates sliding mobile========================*/

  $('.currency').click(function(){
  		event.preventDefault();
        $('.exchange-rate').slideToggle('2000');
    });

/*================Exchange rates AJAX========================*/

  var $rates = $('.exchange-rate');

  $.ajax({
    url: 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=4',
    type: 'GET',
    dataType: 'json',
    success: function(rates) {
    /*  $.each(rates, function (i, rate){
        $rates.append('<li>'+ rate.ccy +'/' + rate.base_ccy + ':' + rate.buy + '</li>');
      })*/
      var items = [];
      items.push(rates[3], rates[4], rates[8], rates[12]);

      for (var i = items.length - 1; i >= 0; i--) {
          $rates.append('<li class="exchange-rate__item">'+ items[i].ccy +'/' + items[i].base_ccy + ' : ' + items[i].buy + '</li>');
      }
    }
  })
  .done(function() {
    console.log("success");
  })
  .fail(function() {
    console.log("error");
  })
  .always(function() {
    console.log("complete");
  });

/*============Bundler form========================*/

    var _bunddlerSettings = {
        tenant: 'ваш ник',
        container: 'webOrderForm',
        theme: ''
    };
      
    var bunddler = document.createElement('script');
    bunddler.type = 'text/javascript';
    bunddler.async = true;
    bunddler.src = 'http://bunddler.com/Assets/Scripts/webOrderEmbedded.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(bunddler, s);

})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCkge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuICBcclxuLyo9PT09PT09PT09PT09PT09TWFpbiBwYWdlIHNsaWRlcj09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG4gICQoJy5ieHNsaWRlcicpLmJ4U2xpZGVyKHtcclxuICBcdGFkYXB0aXZlSGVpZ2h0OiBmYWxzZSxcclxuICBcdG1vZGU6ICdmYWRlJyxcclxuICBcdGNvbnRyb2xzOiB0cnVlXHJcbiAgfSk7XHJcblxyXG4vKj09PT09PT09PT09PT09PT1IYW1idXJnZXIgbWVudSBmdWxsc2NyZWVuPT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICAkKCcuaGFtYnVyZ2VyJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICBcdFx0JCgnaHRtbCwgYm9keScpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IDAgfSwgXCJzbG93XCIpO1xyXG4gICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xyXG4gICAgICAgICQoJy5tZW51JykuZmFkZVRvZ2dsZSgnMjAwMCcpO1xyXG4gICAgfSk7XHJcblxyXG4gICQoJy5zdWJtZW51JykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICAkKCcuc3VibWVudV9fY29udGFpbmVyJykuc2xpZGVUb2dnbGUoJzIwMDAnKTtcclxuICAgIH0pO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09RXhjaGFuZ2UgcmF0ZXMgc2xpZGluZyBtb2JpbGU9PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuICAkKCcuY3VycmVuY3knKS5jbGljayhmdW5jdGlvbigpe1xyXG4gIFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQoJy5leGNoYW5nZS1yYXRlJykuc2xpZGVUb2dnbGUoJzIwMDAnKTtcclxuICAgIH0pO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09RXhjaGFuZ2UgcmF0ZXMgQUpBWD09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG4gIHZhciAkcmF0ZXMgPSAkKCcuZXhjaGFuZ2UtcmF0ZScpO1xyXG5cclxuICAkLmFqYXgoe1xyXG4gICAgdXJsOiAnaHR0cHM6Ly9hcGkucHJpdmF0YmFuay51YS9wMjRhcGkvcHViaW5mbz9qc29uJmV4Y2hhbmdlJmNvdXJzaWQ9NCcsXHJcbiAgICB0eXBlOiAnR0VUJyxcclxuICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbihyYXRlcykge1xyXG4gICAgLyogICQuZWFjaChyYXRlcywgZnVuY3Rpb24gKGksIHJhdGUpe1xyXG4gICAgICAgICRyYXRlcy5hcHBlbmQoJzxsaT4nKyByYXRlLmNjeSArJy8nICsgcmF0ZS5iYXNlX2NjeSArICc6JyArIHJhdGUuYnV5ICsgJzwvbGk+Jyk7XHJcbiAgICAgIH0pKi9cclxuICAgICAgdmFyIGl0ZW1zID0gW107XHJcbiAgICAgIGl0ZW1zLnB1c2gocmF0ZXNbM10sIHJhdGVzWzRdLCByYXRlc1s4XSwgcmF0ZXNbMTJdKTtcclxuXHJcbiAgICAgIGZvciAodmFyIGkgPSBpdGVtcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgJHJhdGVzLmFwcGVuZCgnPGxpIGNsYXNzPVwiZXhjaGFuZ2UtcmF0ZV9faXRlbVwiPicrIGl0ZW1zW2ldLmNjeSArJy8nICsgaXRlbXNbaV0uYmFzZV9jY3kgKyAnIDogJyArIGl0ZW1zW2ldLmJ1eSArICc8L2xpPicpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSlcclxuICAuZG9uZShmdW5jdGlvbigpIHtcclxuICAgIGNvbnNvbGUubG9nKFwic3VjY2Vzc1wiKTtcclxuICB9KVxyXG4gIC5mYWlsKGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJlcnJvclwiKTtcclxuICB9KVxyXG4gIC5hbHdheXMoZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImNvbXBsZXRlXCIpO1xyXG4gIH0pO1xyXG5cclxuLyo9PT09PT09PT09PT1CdW5kbGVyIGZvcm09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuICAgIHZhciBfYnVuZGRsZXJTZXR0aW5ncyA9IHtcclxuICAgICAgICB0ZW5hbnQ6ICfQstCw0Ygg0L3QuNC6JyxcclxuICAgICAgICBjb250YWluZXI6ICd3ZWJPcmRlckZvcm0nLFxyXG4gICAgICAgIHRoZW1lOiAnJ1xyXG4gICAgfTtcclxuICAgICAgXHJcbiAgICB2YXIgYnVuZGRsZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgIGJ1bmRkbGVyLnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcclxuICAgIGJ1bmRkbGVyLmFzeW5jID0gdHJ1ZTtcclxuICAgIGJ1bmRkbGVyLnNyYyA9ICdodHRwOi8vYnVuZGRsZXIuY29tL0Fzc2V0cy9TY3JpcHRzL3dlYk9yZGVyRW1iZWRkZWQuanMnO1xyXG4gICAgdmFyIHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbMF07XHJcbiAgICBzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGJ1bmRkbGVyLCBzKTtcclxuXHJcbn0pKCk7Il19
