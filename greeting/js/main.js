'use strict';

$(function(){
  $(window).on('load', function() {
    $('.scroll_fadeIn').each(function(){
      let position = $(this).offset().top
      let windowHeight = $(window).height();
      if (position - windowHeight < 0){
        $(this).addClass("fadeIn");
      }

    });
  });
  $(window).scroll(function (){
    let scroll = $(window).scrollTop();
    let windowHeight = $(window).height();
    $('.scroll_fadeIn').each(function(){
      let position = $(this).offset().top;
      if (scroll > position - windowHeight + 200){
        $(this).addClass("fadeIn");
      }
    });
  });
});