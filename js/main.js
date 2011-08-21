// JavaScript Document

var elementIds = new Array("pagelet_welcome_box", "pinnedNav", "appsNav", "groupsNav", "pagesNav");

window.onload = function() {
	for(var i = 0; i < elementIds.length; i++){
		$(elementIds[i]).observe("mouseover", hideDivElement);	
	}
}

function hideDivElement()
{
	this.hide();
}