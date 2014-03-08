// Function to gets all elements with a certain attribute.
function getElementsWithAtt( attribute ) {
	// Array is to be returned
	var matchingElements = [],
		allElements = document.getElementsByTagName("*");  // get all elements in document

	// Loop over all elements
	for(var i = 0; i < allElements.length; i++) {
		
		var hasAttribute = allElements[i].getAttribute( attribute );
		
		// push to array if attribute exists
		if ( hasAttribute ) {
			matchingElements.push(allElements[i]);
		}
	}

	return matchingElements;
}

function processCycle( element ) {
	var cycleChildren = element.children,	 // get all top level children of element
		cycleListString = element.getAttribute( "data-cycle-list" ),	// get list of classes to cycle through
		cycleListArray = cycleListString.split( " " ),	// Arrayify the list
		listLength = cycleListArray.length;

	// Loop over all child elements and append appropriate class.
	for ( var i = 0; i < cycleChildren.length; i++ ) {		
		var modulo = i % listLength,
			newClass = " " + cycleListArray[ modulo ];

		// Append class.
		cycleChildren[i].className += newClass;
	}
}

// get all elements with data-cycle-list attributes
var classCycleElements = getElementsWithAtt( "data-cycle-list" );

// Loops over all relevant elements and passes them to the main processCycle function
if (classCycleElements) {
	for ( var i = 0; i < classCycleElements.length; i++ ) {
		processCycle( classCycleElements[i] );
	}
}