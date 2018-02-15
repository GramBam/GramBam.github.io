// Smooth Scroll

$("navbar a").click(function(){
	var href = $.attr(this, "href");
	$("html, body").animate({
    	scrollTop: $($.attr(this, "href")).offset().top
	}, 500);
	return false;
});

// Konami Code

const pressed = [];
const secretCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a']

window.addEventListener('keyup', (e) => {
  console.log(e.key);
  pressed.push(e.key);
  pressed.splice(-secretCode.length -1, pressed.length - secretCode.length);
  if(pressed.join('').includes(secretCode)){
    cornify_add();
  }
});

// WealthTable SlideShow

$(document).ready(function() {
	setInterval(function(){$('.project-image.wealthtable').toggleClass('wealthtable2')}, 3000);
});
