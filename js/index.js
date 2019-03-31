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
  $('#topBtnA').hide();
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 1100) {
      $('#topBtnA').fadeIn(500);
    } else {
      $('#topBtnA').fadeOut(500);
    }
  });
  $('#topBtnA').click(function(event) {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top
    }, 700);
  });
  $('.ScrollDownClick').click(function(event) {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top
    }, 700);
  });
});

$(document).ready(function() {
  $(window).scroll(function() {
    if ($(document).scrollTop() > 100) {
      $('.about').addClass('animated ' + 'bounceInDown');
    } else {
      $('.about').removeClass('animated ' + 'bounceInDown');
    }
    if ($(document).scrollTop() > 1000) {
      $('.skill').addClass('animated ' + 'bounceInLeft');
    } else {
      $('.skill').removeClass('animated ' + 'bounceInLeft');
    }
    if ($(document).scrollTop() > 1550) {
      $('.portfolioTitle').addClass('animated ' + 'zoomIn');
    } else {
      $('.portfolioTitle').removeClass('animated ' + 'zoomIn');
    }
    if ($(document).scrollTop() > 3350) {
      $('.contact').addClass('animated ' + 'tada');
      $('.phImg').addClass('animated ' + 'tada');
      $('.emailImg').addClass('animated ' + 'tada');
    } else {
      $('.contact').removeClass('animated ' + 'tada');
    }
  });
});

$(document).ready(function() {
  $('#headerTile').hide();
  $('#headerTile').fadeIn(2000);
  $('#ScrollDown').hide();
  $('#ScrollDown').fadeIn(3000);
});


$(document).ready(function() {
  $('#wccApp').click(function() {
    $('sub.html').fadeIn(500);
  });
});
