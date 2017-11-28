$("navbar a").click(function(){
	var href = $.attr(this, "href");
	$("html, body").animate({
    	scrollTop: $($.attr(this, "href")).offset().top
	}, 500);
	return false;
});
