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
    })();
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG4gIFxyXG4vKj09PT09PT09PT09PT09PT1NYWluIHBhZ2Ugc2xpZGVyPT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcbiAgJCgnLmJ4c2xpZGVyJykuYnhTbGlkZXIoe1xyXG4gIFx0YWRhcHRpdmVIZWlnaHQ6IGZhbHNlLFxyXG4gIFx0bW9kZTogJ2ZhZGUnLFxyXG4gIFx0Y29udHJvbHM6IHRydWVcclxuICB9KTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PUhhbWJ1cmdlciBtZW51IGZ1bGxzY3JlZW49PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gICQoJy5oYW1idXJnZXInKS5jbGljayhmdW5jdGlvbigpe1xyXG4gIFx0XHQkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7IHNjcm9sbFRvcDogMCB9LCBcInNsb3dcIik7XHJcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnaXMtYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnLm1lbnUnKS5mYWRlVG9nZ2xlKCcyMDAwJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgJCgnLnN1Ym1lbnUnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICQoJy5zdWJtZW51X19jb250YWluZXInKS5zbGlkZVRvZ2dsZSgnMjAwMCcpO1xyXG4gICAgfSk7XHJcblxyXG4vKj09PT09PT09PT09PT09PT1FeGNoYW5nZSByYXRlcyBzbGlkaW5nIG1vYmlsZT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG4gICQoJy5jdXJyZW5jeScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJCgnLmV4Y2hhbmdlLXJhdGUnKS5zbGlkZVRvZ2dsZSgnMjAwMCcpO1xyXG4gICAgfSk7XHJcblxyXG4vKj09PT09PT09PT09PT09PT1FeGNoYW5nZSByYXRlcyBBSkFYPT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcbiAgdmFyICRyYXRlcyA9ICQoJy5leGNoYW5nZS1yYXRlJyk7XHJcblxyXG4gICQuYWpheCh7XHJcbiAgICB1cmw6ICdodHRwczovL2FwaS5wcml2YXRiYW5rLnVhL3AyNGFwaS9wdWJpbmZvP2pzb24mZXhjaGFuZ2UmY291cnNpZD00JyxcclxuICAgIHR5cGU6ICdHRVQnLFxyXG4gICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJhdGVzKSB7XHJcbiAgICAvKiAgJC5lYWNoKHJhdGVzLCBmdW5jdGlvbiAoaSwgcmF0ZSl7XHJcbiAgICAgICAgJHJhdGVzLmFwcGVuZCgnPGxpPicrIHJhdGUuY2N5ICsnLycgKyByYXRlLmJhc2VfY2N5ICsgJzonICsgcmF0ZS5idXkgKyAnPC9saT4nKTtcclxuICAgICAgfSkqL1xyXG4gICAgICB2YXIgaXRlbXMgPSBbXTtcclxuICAgICAgaXRlbXMucHVzaChyYXRlc1szXSwgcmF0ZXNbNF0sIHJhdGVzWzhdLCByYXRlc1sxMl0pO1xyXG5cclxuICAgICAgZm9yICh2YXIgaSA9IGl0ZW1zLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAkcmF0ZXMuYXBwZW5kKCc8bGkgY2xhc3M9XCJleGNoYW5nZS1yYXRlX19pdGVtXCI+JysgaXRlbXNbaV0uY2N5ICsnLycgKyBpdGVtc1tpXS5iYXNlX2NjeSArICcgOiAnICsgaXRlbXNbaV0uYnV5ICsgJzwvbGk+Jyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KVxyXG4gIC5kb25lKGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJzdWNjZXNzXCIpO1xyXG4gIH0pXHJcbiAgLmZhaWwoZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImVycm9yXCIpO1xyXG4gIH0pXHJcbiAgLmFsd2F5cyhmdW5jdGlvbigpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiY29tcGxldGVcIik7XHJcbiAgfSk7XHJcblxyXG4vKj09PT09PT09PT09PUJ1bmRsZXIgZm9ybT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG4gICAgdmFyIF9idW5kZGxlclNldHRpbmdzID0ge1xyXG4gICAgICAgIHRlbmFudDogJ25lYmVyYW9sZ2FAZ21haWwuY29tJyxcclxuICAgICAgICBjb250YWluZXI6ICd3ZWJPcmRlckZvcm0nLFxyXG4gICAgICAgIHRoZW1lOiAnJ1xyXG4gICAgfTtcclxuICAgICAgXHJcbiAgICAoZnVuY3Rpb24gKCkgeyAgXHJcbiAgICB2YXIgYnVuZGRsZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgIGJ1bmRkbGVyLnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcclxuICAgIGJ1bmRkbGVyLmFzeW5jID0gdHJ1ZTtcclxuICAgIGJ1bmRkbGVyLnNyYyA9ICdodHRwOi8vYnVuZGRsZXIuY29tL0Fzc2V0cy9TY3JpcHRzL3dlYk9yZGVyRW1iZWRkZWQuanMnO1xyXG4gICAgdmFyIHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbMF07XHJcbiAgICBzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGJ1bmRkbGVyLCBzKTtcclxuICAgIH0pKCk7XHJcbn0pKCk7Il19
