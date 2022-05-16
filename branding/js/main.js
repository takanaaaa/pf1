'use strict';

$(function(){
  var length = $('.domain__box').length;
  var active_index = 0;
  setInterval(function(){
    for (var i=0; i<$(".domain__box").length; i++) {
      if (i < 4) {
        if (active_index == i) {
          $('.first_half').each(function(index) {
            if(index == active_index) {
              $('.domain__box').removeClass('active');
              $(this).addClass('active');
            }
          });
        }
      } else if (i >=4 ){
        if(active_index == i) {
          $($('.latter_half').get().reverse()).each(function(index) {
            if(index + 4 == active_index) {
              $('.domain__box').removeClass('active');
              $(this).addClass('active');
            }
          });
        }
      }
    }
    if (active_index == length -1) {
      active_index = 0;
    } else {
      active_index++;
    }
  }, 3000);
});