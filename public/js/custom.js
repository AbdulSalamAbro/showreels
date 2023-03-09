function menu_open() {
    jQuery(".right_menu_wrap").css({"transform":"translateX(0)"}) 
}
function menu_close() { 
    jQuery(".right_menu_wrap").css({"transform":"translateX(300px)"})
}


jQuery(document).ready(function ($) {
  function Cursor(cursor, pointer) {
    cursor.css({
      opacity: 1
    });
    pointer.css({
      opacity: 1
    });
    $(document).bind('mousemove', function (e) {
      if ($(e.target).hasClass('link') || $(e.target).closest('.link').length > 0) {
        $(cursor).addClass('zoom');
      } else {
        $(cursor).removeClass('zoom');
      }
      cursor.css({
        left: e.pageX,
        top: e.pageY
      });
      pointer.css({
        left: e.pageX,
        top: e.pageY
      });
    });
  }
  function destroyCursor(cursor, pointer) {
    cursor.css('opacity', '0');
    pointer.css('opacity', '0');
    //$(document).unbind('mousemove');
  }
  $(document).mouseleave(function () {
    destroyCursor($('#cursor'), $('#pointer'));
  });
  $(document).mouseenter(function () {
    Cursor($('#cursor'), $('#pointer'));
  });
  $(document).on('click', function (e) {
    $('#cursor').css('animation', 'cursorClick 700ms');
    setTimeout(()=>{$('#cursor').css('animation', '')},700);
  });
  Cursor($('#cursor'), $('#pointer'));
  $('#lenio-text').on('click', function(){
    $(this).toggleClass('scroll');
  });


  $('.post-sldr').slick({
      dots: false,
      autoplay: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
      responsive: [
            
        {
            breakpoint: 767,
            settings: {
                arrows:false,
                dots: true,
            }
        }
    ]
    });



});




/* Get into full screen */
function GoInFullscreen(element) {
    if(element.requestFullscreen)
        element.requestFullscreen();
    else if(element.mozRequestFullScreen)
        element.mozRequestFullScreen();
    else if(element.webkitRequestFullscreen)
        element.webkitRequestFullscreen();
    else if(element.msRequestFullscreen)
        element.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
    if(document.exitFullscreen)
        document.exitFullscreen();
    else if(document.mozCancelFullScreen)
        document.mozCancelFullScreen();
    else if(document.webkitExitFullscreen)
        document.webkitExitFullscreen();
    else if(document.msExitFullscreen)
        document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
    var full_screen_element = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || null;
    
    // If no element is in full-screen
    if(full_screen_element === null)
        return false;
    else
        return true;
}

$(".full-screen-btn").on('click', function() {
    if(IsFullScreenCurrently())
        GoOutFullscreen();
    else
        GoInFullscreen($("body").get(0));
});

$(document).on('fullscreenchange webkitfullscreenchange mozfullscreenchange MSFullscreenChange', function() {
    
});




/*
jQuery(document).ready(function() {

jQuery('.teste_scroll').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    //autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    responsive: [
            
        {
            breakpoint: 993,
            settings: {
                arrows:false
            }
        }
    ]
});

});
       


jQuery("document").ready(function() {

	if(jQuery(window).width() > 991)  {

		jQuery(window).scroll(function() {
			if (jQuery(this).scrollTop() > 100) {
				jQuery('header').addClass("hdr_fix")
			} else {
				jQuery('header').removeClass("hdr_fix")
			}
		})

	}
});
*/