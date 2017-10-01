(function() {
  'use strict';

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
        $('section > .exchange-rate').slideToggle('2000');
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

    /*var _bunddlerSettings = {
        tenant: 'neberaolga@gmail.com',
        container: 'webOrderForm',
        theme: ''
    };
      
    (function () {  
    var bunddler = document.createElement('script');
    bunddler.type = 'text/javascript';
    bunddler.async = true;
    bunddler.src = 'http://bunddler.com/Assets/Scripts/webOrderEmbedded.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(bunddler, s);
    })();*/


/*============Available zoom-in foto========================*/

  var photo = $('.available__img img');

  photo.on('click', function() {
    $(this).toggleClass('zoom');
  });

})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCkge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuXHJcbi8qPT09PT09PT09PT09PT09PUhhbWJ1cmdlciBtZW51IGZ1bGxzY3JlZW49PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gICQoJy5oYW1idXJnZXInKS5jbGljayhmdW5jdGlvbigpe1xyXG4gIFx0XHQkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7IHNjcm9sbFRvcDogMCB9LCBcInNsb3dcIik7XHJcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnaXMtYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnLm1lbnUnKS5mYWRlVG9nZ2xlKCcyMDAwJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgJCgnLnN1Ym1lbnUnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICQoJy5zdWJtZW51X19jb250YWluZXInKS5zbGlkZVRvZ2dsZSgnMjAwMCcpO1xyXG4gICAgfSk7XHJcblxyXG4vKj09PT09PT09PT09PT09PT1FeGNoYW5nZSByYXRlcyBzbGlkaW5nIG1vYmlsZT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG4gICQoJy5jdXJyZW5jeScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJCgnc2VjdGlvbiA+IC5leGNoYW5nZS1yYXRlJykuc2xpZGVUb2dnbGUoJzIwMDAnKTtcclxuICAgIH0pO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09RXhjaGFuZ2UgcmF0ZXMgQUpBWD09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG4gIHZhciAkcmF0ZXMgPSAkKCcuZXhjaGFuZ2UtcmF0ZScpO1xyXG5cclxuICAkLmFqYXgoe1xyXG4gICAgdXJsOiAnaHR0cHM6Ly9hcGkucHJpdmF0YmFuay51YS9wMjRhcGkvcHViaW5mbz9qc29uJmV4Y2hhbmdlJmNvdXJzaWQ9NCcsXHJcbiAgICB0eXBlOiAnR0VUJyxcclxuICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbihyYXRlcykge1xyXG4gICAgLyogICQuZWFjaChyYXRlcywgZnVuY3Rpb24gKGksIHJhdGUpe1xyXG4gICAgICAgICRyYXRlcy5hcHBlbmQoJzxsaT4nKyByYXRlLmNjeSArJy8nICsgcmF0ZS5iYXNlX2NjeSArICc6JyArIHJhdGUuYnV5ICsgJzwvbGk+Jyk7XHJcbiAgICAgIH0pKi9cclxuICAgICAgdmFyIGl0ZW1zID0gW107XHJcbiAgICAgIGl0ZW1zLnB1c2gocmF0ZXNbM10sIHJhdGVzWzRdLCByYXRlc1s4XSwgcmF0ZXNbMTJdKTtcclxuXHJcbiAgICAgIGZvciAodmFyIGkgPSBpdGVtcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgJHJhdGVzLmFwcGVuZCgnPGxpIGNsYXNzPVwiZXhjaGFuZ2UtcmF0ZV9faXRlbVwiPicrIGl0ZW1zW2ldLmNjeSArJy8nICsgaXRlbXNbaV0uYmFzZV9jY3kgKyAnIDogJyArIGl0ZW1zW2ldLmJ1eSArICc8L2xpPicpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSlcclxuICAuZG9uZShmdW5jdGlvbigpIHtcclxuICAgIGNvbnNvbGUubG9nKFwic3VjY2Vzc1wiKTtcclxuICB9KVxyXG4gIC5mYWlsKGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJlcnJvclwiKTtcclxuICB9KVxyXG4gIC5hbHdheXMoZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImNvbXBsZXRlXCIpO1xyXG4gIH0pO1xyXG5cclxuLyo9PT09PT09PT09PT1CdW5kbGVyIGZvcm09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuICAgIC8qdmFyIF9idW5kZGxlclNldHRpbmdzID0ge1xyXG4gICAgICAgIHRlbmFudDogJ25lYmVyYW9sZ2FAZ21haWwuY29tJyxcclxuICAgICAgICBjb250YWluZXI6ICd3ZWJPcmRlckZvcm0nLFxyXG4gICAgICAgIHRoZW1lOiAnJ1xyXG4gICAgfTtcclxuICAgICAgXHJcbiAgICAoZnVuY3Rpb24gKCkgeyAgXHJcbiAgICB2YXIgYnVuZGRsZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgIGJ1bmRkbGVyLnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcclxuICAgIGJ1bmRkbGVyLmFzeW5jID0gdHJ1ZTtcclxuICAgIGJ1bmRkbGVyLnNyYyA9ICdodHRwOi8vYnVuZGRsZXIuY29tL0Fzc2V0cy9TY3JpcHRzL3dlYk9yZGVyRW1iZWRkZWQuanMnO1xyXG4gICAgdmFyIHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbMF07XHJcbiAgICBzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGJ1bmRkbGVyLCBzKTtcclxuICAgIH0pKCk7Ki9cclxuXHJcblxyXG4vKj09PT09PT09PT09PUF2YWlsYWJsZSB6b29tLWluIGZvdG89PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuICB2YXIgcGhvdG8gPSAkKCcuYXZhaWxhYmxlX19pbWcgaW1nJyk7XHJcblxyXG4gIHBob3RvLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgJCh0aGlzKS50b2dnbGVDbGFzcygnem9vbScpO1xyXG4gIH0pO1xyXG5cclxufSkoKTsiXX0=
