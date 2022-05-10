'use strict';

$(function(){
  $(window).on('beforeunload', function() {
    $(window).scrollTop(0);
  });

  $(window).scroll(function (){
    let scroll = $(window).scrollTop();
    let windowHeight = $(window).height();
    $('.scroll').each(function(){
      let position = $(this).offset().top;
      if (scroll > position - windowHeight + 800){
        $(this).css('background-position', 'center ' + parseInt((position/2 + 800 ) + ( -scroll / 2)) + 'px');
      }
    });

    $('.is_effects').each(function(){
      let position = $(this).offset().top;
      console.log(position);
      if(scroll > position - windowHeight + 400){
        $(this).addClass("fadeIn");
      }
    });
  });
});


