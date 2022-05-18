'use strict';

$(function(){
  $(window).on('load', function() {
    $('.scroll_fadeIn').each(function(){
      let position = $(this).offset().top - 50;
      let windowHeight = $(window).height();
      if (0 >= position - windowHeight){
        $(this).addClass('fadeIn');
      }
    });
  });
  $(window).scroll(function (){
    let scroll = $(window).scrollTop();
    $('.scroll_fadeIn').each(function(){
      let position = $(this).offset().top;
      let windowHeight = $(window).height();
      if (scroll > position - windowHeight + 200){
        $(this).addClass("fadeIn");
      }
    });
  });
});