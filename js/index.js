$(document).ready(function() {
  $('#topBtn').hide();
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 1100) {
      $('#topBtn').fadeIn(500);
    } else {
      $('#topBtn').fadeOut(500);
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


$(document).ready(function() {
  $('.ScrollDownClick').click(function(event) {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top
    }, 700);
  });
});



$(document).ready(function() {
  $('#headerTile').hide();
  $('#headerTile').fadeIn(2000);
  $('#ScrollDown').hide();
  $('#ScrollDown').fadeIn(3000);
});
