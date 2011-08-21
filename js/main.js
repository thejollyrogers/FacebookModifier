// JavaScript Document

var elementIds = new Array("pagelet_welcome_box", "pinnedNav", "appsNav", "groupsNav", "pagesNav");
var currentElement;
var showingX;

window.onload = function() {
	for(var i = 0; i < elementIds.length; i++){
			$(elementIds[i]).observe("mouseover", addX);
	}
}

function addX(){
	if(!showingX)
	{
		showingX = true;
		currentElement = this;
		var xElement = $(document.createElement("div"));
		xElement.addClassName("xbox");
		xElement.observe("mouseover", addMouseOver);
		xElement.observe("mouseout", removeMouseOver);
		xElement.observe("click", hideDivParentElement);
		xElement.innerHTML = ":)";
		this.appendChild(xElement);
	}
}

function removeMouseOver(){
	this.removeClassName("mouseoverxbox");
}

function addMouseOver(){
	this.addClassName("mouseoverxbox");	
}

function hideDivElement()
{
	showingX = false;
	this.hide();
}

function hideDivParentElement(){
	currentElement.hide();
}