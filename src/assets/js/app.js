/* logo on mobile */
jQuery(document).ready(function($) {
  var alterClass = function() {
    var ww = document.body.clientWidth;
    if (ww >= 500) {
      $('.logo').removeClass('logo-mobile');
    } else if (ww < 501) {
      $('.logo').addClass('logo-mobile');
    };
  };
  $(window).resize(function(){
    alterClass();
  });
  //Fire it when the page first loads:
  alterClass();
});

/* End _logo*/

/* _slider */

$(function () {
  'use strict';
  var winH = $(window).height(),
    upperH = $('.nav-head').innerHeight();
  $('.slider , .carousel-item').height(winH - upperH);
});


/*End _slider*/
/* Start notification */
setTimeout(function(){ 
  $(".custom-social-proof").slideToggle(); 
}, 3000);
$(".custom-close").click(function() { 
  $(".custom-social-proof").stop().slideToggle('slow'); 
});
/* End notification */