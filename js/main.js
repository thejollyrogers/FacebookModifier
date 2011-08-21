// JavaScript Document

alert("test");
alert("sup");

window.onload = function() {
	$("pagelet_welcome_box").hide();
	for(var i = 0; i < elementIds.length; i++){
		$(elementIds[i]).observe("mouseover", hideDivElement);	
	}
}

