$(document).ready(function() {
  $(".animsition").animsition({
    inClass: 'fade-in-up-sm',
    outClass: 'fade-out-up-sm',
    inDuration: 1500,
    outDuration: 800,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: 'body',
    loadingClass: 'animsition-loading',
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: ['animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay: false,
    overlayClass: 'animsition-overlay-slide',
    overlayParentElement: 'body',
    transition: function(url) {
      window.location.href = url;
    }
  });
});


$(document).ready(function() {
  $('#homeBtnA').hide();
  $('#homeBtnA').fadeIn(3000);
  $('#topBtnA').hide();
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 500) {
      $('#topBtnA').fadeIn(500);
    } else {
      $('#topBtnA').fadeOut(500);
    }
  });
});


$(document).ready(function() {
  $('#topBtnA').click(function(event) {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top
    }, 700);
  });
});

$(document).ready(function(){
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if( scroll > 110 ){
      $('#subcontent2Title').addClass('animate bounceIn');
    } else {
      $('#subcontent2Title').removeClass('animate bounceIn');
    }
  });
});
