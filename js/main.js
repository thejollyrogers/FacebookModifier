// JavaScript Document

var elementIds = new Array("pagelet_welcome_box", "pinnedNav", "appsNav", "groupsNav", "pagesNav");
var currentElement;

window.onload = function() {
	for(var i = 0; i < elementIds.length; i++){
		$(elementIds[i]).observe("mousemove", addX);	
	}
}

function addX(){
	currentElement = this;
	var xElement = $(document.createElement("div"));
	xElement.addClassName("xbox");
	xElement.observe("mousemove", addMouseOver);
	xElement.observe("mouseout", removeMouseOver);
	xElement.observe("click", hideDivParentElement);
	this.appendChild(xElement);
}

function removeMouseOver(){
	this.removeClassName("mouseoverxbox");	
}

function addMouseOver(){
	this.addClassName("mouseoverxbox");	
}

function hideDivElement()
{
	this.hide();
}

function hideDivParentElement(){
	currentElement.hide();
}