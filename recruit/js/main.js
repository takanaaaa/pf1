'use strict';

$(window).on('scroll', function(){
  let scroll = $(window).scrollTop();
  $('.scroll-effect').each(function(){
    let position = $(this).offset().top
    let windowHeight = $(window).height();
    let container = $(this)
    if(scroll > position - windowHeight * 0.5){
      container.find('.scroll-item').each(function(index){
        $(this).delay(index * 300).queue(function(){
          $(this).addClass('fadeIn');
        });
      }); 
    }
  });
});

'use  strict';
// YouTube Player API
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
	player = new YT.Player('js-player', {
		videoId: 'gcApftPeRf0',
    width: '800',
		height: '450'	
	});
}
