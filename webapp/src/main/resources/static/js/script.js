var topBottomHeight;

$(document).ready(function($) {
	setDimensions();
	
	$("footer a").click(function() {
		$("html, body").animate({
			scrollTop : 0
		}, "slow");
	});
});

function setDimensions() {
	if (topBottomHeight == null)
		topBottomHeight = getTopBottomHeight();

	$("footer").height(topBottomHeight);

	var margin = topBottomHeight + "px 0px " + topBottomHeight + "px";
	//	console.log("margin: " + margin)
	$("body").css("margin", margin);
}

function getTopBottomHeight() {
	var navHeight = $("nav").height();
	return parseInt(navHeight);
}

function getInnerHeight() {
	var winHeight = $(window).height();
	
	if (topBottomHeight == null)
		topBottomHeight = getTopBottomHeight();

	return winHeight - (2 * topBottomHeight);
}