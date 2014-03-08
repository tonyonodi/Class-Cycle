// Function to gets all elements with a certain attribute.
function getElementsWithAtt( attribute ) {
	// Array is to be returned
	var matchingElements = []
	// get all elements in document
	var allElements = document.getElementsByTagName("*");

	// Loop over all elements
	for(var i = 0; i < allElements.length; i++) {
		
		var hasAttribute = allElements[i].getAttribute("data-cycle-list");
		
		// push to array if attribute exists
		if ( hasAttribute ) {
			matchingElements.push(allElements[i]);
		}
	}

	return matchingElements;
}

function processCycle( element ) {
	// get all top level children of element
	var cycleChildren = element.childNodes;
	// get list of classes to cycle through
	var cycleListString = element.getAttribute("data-cycle-list");
	// Arrayify the list
	var cycleListArray = cycleListString.split(" ");
	var listLength = cycleListArray.length;

	// Loop over all child elements and append appropriate class.
	for ( var i = 0; i < cycleChildren.length; i++ ) {		
		var modulo = i % listLength;
		var newClass = " " + cycleListArray[modulo];

		// Append class.
		cycleChildren[i].class += newClass;
	}
}

// get all elements with data-cycle-list attributes
var classCycleElements = getElementsWithAtt("data-cycle-list");

// Loops over all relevant elements and passes them to the main processCycle function
if (classCycleElements) {
	for ( var i = 0; i < classCycleElements.length; i++ ) {
		processCycle( classCycleElements[i] );
	}
}