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

    $('.scroll-effect').each(function(){
      let position = $(this).offset().top
      let windowHeight = $(window).height();
      let container = $(this)
      if(scroll > position - windowHeight * 0.5){
        container.find('.scroll-item1').each(function(index){
          $(this).delay(index * 300).queue(function(){
            $(this).addClass('fadeIn');
          });
        });
        container.find('.scroll-item2').each(function(index){
          $(this).delay(index * 500).queue(function(){
            $(this).addClass('fadeIn');
          });
        });
      }
    });
  });
});


