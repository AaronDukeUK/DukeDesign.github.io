$('a').click(function(evt) {
   event.stopPropagation();
});

$('a[href="#"]').click(function(evt) {
   event.preventDefault();
});;

$("#home").click(function() {
    $('html, body').animate({
        scrollTop: $(".about").offset().top
    }, 2000);
});

$("#about").click(function() {
    $('html, body').animate({
        scrollTop: $(".skills").offset().top
    }, 2000);
});

$("#projects").click(function() {
    $('html, body').animate({
        scrollTop: $(".portfolio").offset().top
    }, 2000);
});

$("#cta").click(function() {
    $('html, body').animate({
        scrollTop: $(".skills").offset().top
    }, 2000);
});

$('#contact').click(function() {
    if( $('.contactNav').css('opacity') == '0' ) {
    $('.contactNav').css('opacity','1');
    } else {
    $('.contactNav').css('opacity','0');
    }
});

$('html').scroll(function() {
  alert('scroll!');
});

window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        document.getElementById("header").className = "scroll";
        document.getElementById("logo").className = "scrollLogo";
    } else {
        document.getElementById("header").className = "";
        document.getElementById("logo").className = "";
    }
}

$(window).scroll(function(event) {
  var y = $(this).scrollTop();
  if (y >= 900) {
    $('.skillbar').each(function(){
  	   $(this).find('.skillbar-bar').animate({width:$(this).attr('data-percent')},2000);
     });
  }
});

$('.linkItem').mouseenter(function() {
    $(this).find('span').css('opacity', '0');
})

$('.linkItem').mouseleave(function() {
    $(this).find('span').css('opacity', '1');
})



var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');


$(".arrow").click(function() {
    $('html, body').animate({
        scrollTop: $(".about").offset().top
    }, 2000);
});
