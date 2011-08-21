// JavaScript Document

// for elements with IDs to target
var elementIds = new Array("pagelet_welcome_box", "pinnedNav", "appsNav", "groupsNav", "pagesNav", "pagelet_eventbox");

// for elements with classes to target
var elementClasses = new Array("ego_section");

// current element we're interacting with right now
var currentElement;

// TODO remove this
var showingX;

window.onload = function() {
	for(var i = 0; i < elementIds.length; i++){
		var element = $(elementIds[i]);
		element.observe("mouseover", showXBox);
		element.observe("mouseout", hideXBox);
	}
	
	// is there a better way to handel these?
	for(var i = 0; i < elementClasses.length; i++){
		var classArray = $$(elementClasses[i]);
		for(var j = 0; j < elementClasses.length; j++)
			classArray[j].observe("mousemove", addX);
			
	}
}

function addXBoxToElement(element){
	if(!showingX)
	{
		showingX = true;
		currentElement = this;
		var xElement = $(document.createElement("div"));
		xElement.addClassName("xbox");
		//xElement.observe("mouseover", addMouseOverClass);
		//xElement.observe("mouseout", removeMouseOverClass);
		xElement.observe("click", hideDivParentElement);
		xElement.innerHTML = ":)";
		this.insertBefore(xElement, this.firstChild);
	}
}

function removeX(){
	this.firstChild.remove();
	showingX = false;	
	currentElement = null;
}

function removeMouseOverClass(){
	this.removeClassName("mouseoverxbox");
}

function addMouseOverClass(){
	this.addClassName("mouseoverxbox");	
}

function hideDivElement()
{
	showingX = false;
	this.hide();
	if(currentElement != null)
		currentElement.hide();
}

function hideDivParentElement(){
	if(currentElement != null)
		currentElement.hide();
	showingX = false;
}