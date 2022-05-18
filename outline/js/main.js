'use strict';

$(function(){
  const open = $('.logoBox__btn');
  const close = $('.modal__close');
  const container = $('.modal');

  open.on('click',function(){
    container.addClass('active');
    return false;
  });

  close.on('click',function(){
    container.removeClass('active');
  });
});
