
/* 첫 페이지 페이드인 */
$(document).ready(function() {
  $('#headerTile').hide();
  $('#headerTile').fadeIn(2000);
  $('#ScrollDown').hide();
  $('#ScrollDown').fadeIn(3000);
});

$(document).ready(function() {
  /* 탑 버튼 */
  $('#topBtnA').hide();
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 1100) {
      $('#topBtnA').fadeIn(500);
    } else {
      $('#topBtnA').fadeOut(500);
    }
  });
  /* 탑 버튼 클릭 시 부드러운 슬라이드 */
  $('#topBtnA').click(function(event) {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top
    }, 700);
  });
  /* 스크롤 다운 클릭 시 부드러운 슬라이드 */
  $('.scrollBtn').click(function(event) {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top
    }, 700);
  });
});

/* animate.css 적용 */
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(document).scrollTop() > $('.titletop').offset().top-100) {
      $('.about').addClass('animated ' + 'bounceInDown');
    } else {
      $('.about').removeClass('animated ' + 'bounceInDown');
    }
    if ($(document).scrollTop() > $('.aboutTxt').offset().top-100) {
      $('.portfolioTit').addClass('animated ' + 'bounceInLeft');
    } else {
      $('.portfolioTit').removeClass('animated ' + 'bounceInLeft');
    }
  });
});




