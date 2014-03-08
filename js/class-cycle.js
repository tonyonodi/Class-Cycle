// Function to gets all elements with a certain attribute.
function getElementsWithAtt(attribute) {
	// Array is to be returned
	matchingElements = []
	// get all elements in document
	allElements = document.getElementsByTagName("*");

	// Loop over all elements
	for(var i = 0; i < allElements.length; i++) {
		
		hasAttribute = allElements[i].getAttribute();
		
		// push to array if attribute exists
		if ( hasAttribute ) {
			matchingElements.push(allElements[i]);
		}
	}

	return matchingElements;
}

// get all elements with data-cycle-list attributes
var classCycleElements = getElementsWithAtt("data-cycle-list");

if (classCycleElements) {
	for ( var i = 0; i < classCycleElements.length; i++ ) {
		processCycle( classCycleElements[i] );
	}
}