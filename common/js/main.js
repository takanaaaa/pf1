'use strict';

$('#hamburger').hover(function(){
  $('#js-line1').addClass('line_1');
  $('#js-line2').addClass('line_2');
  $('#js-line3').addClass('line_3');
  $('#nav').addClass('in');
});

$('#nav').mouseleave(function(){
  $('#js-line1').removeClass('line_1');
  $('#js-line2').removeClass('line_2');
  $('#js-line3').removeClass('line_3');
  $('#nav').removeClass('in');
});
