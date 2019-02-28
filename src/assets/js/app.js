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