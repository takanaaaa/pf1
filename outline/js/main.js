'use strict';

$(function(){
  // 変数に要素を入れる
  const open = $('.logoBox__btn');
  const close = $('.modal__close');
  const container = $('.modal');

  //開くボタンをクリックしたらモーダルを表示する
  open.on('click',function(){
    container.addClass('active');
    return false;
  });

  //閉じるボタンをクリックしたらモーダルを閉じる
  close.on('click',function(){
    container.removeClass('active');
  });
});
