// JavaScript Document

var elementIds = new Array("pagelet_welcome_box", "pinnedNav", "appsNav", "groupsNav", "pagesNav");

window.onload = function() {
	$("pagelet_welcome_box").hide();
}

function hideDivElement()
{
	this.hide();
}