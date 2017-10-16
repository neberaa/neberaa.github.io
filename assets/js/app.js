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
    url: 'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11',
    type: 'GET',
    dataType: 'json',
    success: function(rates) {

      var items = [];
      items.push(rates[0], rates[1], rates[2]);

      for (var i = items.length - 1; i >= 0; i--) {
          $rates.append('<li class="exchange-rate__item">'+ items[i].ccy +'/' + items[i].base_ccy + ' : ' + items[i].sale + '</li>');
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09SGFtYnVyZ2VyIG1lbnUgZnVsbHNjcmVlbj09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgJCgnLmhhbWJ1cmdlcicpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgXHRcdCQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAwIH0sIFwic2xvd1wiKTtcclxuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdpcy1hY3RpdmUnKTtcclxuICAgICAgICAkKCcubWVudScpLmZhZGVUb2dnbGUoJzIwMDAnKTtcclxuICAgIH0pO1xyXG5cclxuICAkKCcuc3VibWVudScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCgnLnN1Ym1lbnVfX2NvbnRhaW5lcicpLnNsaWRlVG9nZ2xlKCcyMDAwJyk7XHJcbiAgICB9KTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PUV4Y2hhbmdlIHJhdGVzIHNsaWRpbmcgbW9iaWxlPT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcbiAgJCgnLmN1cnJlbmN5JykuY2xpY2soZnVuY3Rpb24oKXtcclxuICBcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKCdzZWN0aW9uID4gLmV4Y2hhbmdlLXJhdGUnKS5zbGlkZVRvZ2dsZSgnMjAwMCcpO1xyXG4gICAgfSk7XHJcblxyXG4vKj09PT09PT09PT09PT09PT1FeGNoYW5nZSByYXRlcyBBSkFYPT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcbiAgdmFyICRyYXRlcyA9ICQoJy5leGNoYW5nZS1yYXRlJyk7XHJcblxyXG4gICQuYWpheCh7XHJcbiAgICB1cmw6ICdodHRwczovL2FwaS5wcml2YXRiYW5rLnVhL3AyNGFwaS9wdWJpbmZvP2V4Y2hhbmdlJmpzb24mY291cnNpZD0xMScsXHJcbiAgICB0eXBlOiAnR0VUJyxcclxuICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbihyYXRlcykge1xyXG5cclxuICAgICAgdmFyIGl0ZW1zID0gW107XHJcbiAgICAgIGl0ZW1zLnB1c2gocmF0ZXNbMF0sIHJhdGVzWzFdLCByYXRlc1syXSk7XHJcblxyXG4gICAgICBmb3IgKHZhciBpID0gaXRlbXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICRyYXRlcy5hcHBlbmQoJzxsaSBjbGFzcz1cImV4Y2hhbmdlLXJhdGVfX2l0ZW1cIj4nKyBpdGVtc1tpXS5jY3kgKycvJyArIGl0ZW1zW2ldLmJhc2VfY2N5ICsgJyA6ICcgKyBpdGVtc1tpXS5zYWxlICsgJzwvbGk+Jyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KVxyXG4gIC5kb25lKGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJzdWNjZXNzXCIpO1xyXG4gIH0pXHJcbiAgLmZhaWwoZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImVycm9yXCIpO1xyXG4gIH0pXHJcbiAgLmFsd2F5cyhmdW5jdGlvbigpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiY29tcGxldGVcIik7XHJcbiAgfSk7XHJcblxyXG4vKj09PT09PT09PT09PUJ1bmRsZXIgZm9ybT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG4gICAgLyp2YXIgX2J1bmRkbGVyU2V0dGluZ3MgPSB7XHJcbiAgICAgICAgdGVuYW50OiAnbmViZXJhb2xnYUBnbWFpbC5jb20nLFxyXG4gICAgICAgIGNvbnRhaW5lcjogJ3dlYk9yZGVyRm9ybScsXHJcbiAgICAgICAgdGhlbWU6ICcnXHJcbiAgICB9O1xyXG4gICAgICBcclxuICAgIChmdW5jdGlvbiAoKSB7ICBcclxuICAgIHZhciBidW5kZGxlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgYnVuZGRsZXIudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xyXG4gICAgYnVuZGRsZXIuYXN5bmMgPSB0cnVlO1xyXG4gICAgYnVuZGRsZXIuc3JjID0gJ2h0dHA6Ly9idW5kZGxlci5jb20vQXNzZXRzL1NjcmlwdHMvd2ViT3JkZXJFbWJlZGRlZC5qcyc7XHJcbiAgICB2YXIgcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKVswXTtcclxuICAgIHMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoYnVuZGRsZXIsIHMpO1xyXG4gICAgfSkoKTsqL1xyXG5cclxuXHJcbi8qPT09PT09PT09PT09QXZhaWxhYmxlIHpvb20taW4gZm90bz09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG4gIHZhciBwaG90byA9ICQoJy5hdmFpbGFibGVfX2ltZyBpbWcnKTtcclxuXHJcbiAgcGhvdG8ub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCd6b29tJyk7XHJcbiAgfSk7XHJcblxyXG59KSgpOyJdfQ==
