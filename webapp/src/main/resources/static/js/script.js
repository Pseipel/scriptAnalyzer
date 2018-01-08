$(document).ready(function($){
	setDimensions();
});

$("footer a").click(function(){
	$("html, body").animate({ 
		scrollTop: 0 
	}, "slow");
});

function setDimensions() {
	var navHeight = $("nav").css("height");
	var margin = parseInt(navHeight) + 10;
	
	console.log("margin: " + margin)
	
	$("footer").css("height", navHeight);
	$("body").css("margin", margin + "px 0px");
}

/*
var caret = '<span class="caret"></span>';

$('.collapse').on('show.bs.collapse', function () {
	dropCollapse('<span class="dropup">' + caret + '</span>');
});
$('.collapse').on('hide.bs.collapse', function () {
	dropCollapse(caret);
});

function dropCollapse(str) {
	$("#collapse").html(str);
}
*/