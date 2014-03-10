// Function to gets all elements with a certain attribute.
function getElementsWithAtt( attributePattern ) {
	var matchingElements = [],	// Array is to be returned
		allElements = document.getElementsByTagName( "*" );  // get all elements in document

	// Loop over all elements
	for( var i = 0; i < allElements.length; i++ ) {
		var currentElement = allElements[i],
			allAttributes = currentElement.attributes;

		for ( var j = 0; j < allAttributes.length; j++ ) {
			var attributeNode = allAttributes[j],
				attributeString = attributeNode.nodeName,
				patternLength = attributePattern.length,
				attributeSubStr = attributeString.substring( 0, patternLength );

			if ( attributeSubStr == attributePattern ) {
				var attributeDetails = [	// Array containing name of attribute and containing node
					currentElement,
					attributeString					
				];

				// Push to main array
				matchingElements.push( attributeDetails );				
			}
		}
	}

	return matchingElements;
}

function processCycle( element, classList ) {
	var cycleChildren = element.children,		// get all top level children of element
		cycleListString = element.getAttribute( classList ),	// get list of classes to cycle through
		cycleListArray = cycleListString.split( " " ),	// Arrayify the list
		listLength = cycleListArray.length;

	// Loop over all child elements and append appropriate class.
	for ( var i = 0; i < cycleChildren.length; i++ ) {		
		var modulo = i % listLength,
			childElement = cycleChildren[i],
			hasClasses = childElement.className.length,	// flag for existing classes
			spacer,
			newClass = " " + cycleListArray[ modulo ];

		// add space if child element has classes
		spacer = ( hasClasses ) ? " " : "";

		// Append class.
		childElement.className += spacer + newClass;
	}
}

function classCycle() {
	// get all elements with data-cycle-list attributes
	var classCycleElements = getElementsWithAtt( "data-cycle" );

	// Loops over all relevant elements and passes them to the main processCycle function
	if (classCycleElements) {
		for ( var i = 0; i < classCycleElements.length; i++ ) {
			var subArray = classCycleElements[i];
			processCycle( subArray[0], subArray[1] );
		}
	}
}