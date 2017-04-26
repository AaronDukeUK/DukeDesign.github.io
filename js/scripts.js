$('a').click(function(evt) {
    evt.preventDefault();
});


$('#projects').click(function() {
    if( $('.projectsNav').css('opacity') == '0' ) {
    $('.projectsNav').css('opacity','1');
    } else {
    $('.projectsNav').css('opacity','0');
    }
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
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("header").className = "scroll";
        document.getElementById("logo").className = "scrollLogo";
    } else {
        document.getElementById("header").className = "";
        document.getElementById("logo").className = "";
    }
}


jQuery('.skillbar').each(function(){
	jQuery(this).find('.skillbar-bar').animate({
		width:jQuery(this).attr('data-percent')
	},2000);
});


