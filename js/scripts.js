// main function
function oneToHundred() {
	var oneToHundred = Array.from(Array(101).keys()).slice(1);

	divisibleBy4or5(oneToHundred);
	divisibleBy4(oneToHundred);
	divisibleBy5(oneToHundred);
	printObjectElements(oneToHundred);
}

// work out what elements in object are divisible by both 4 and 5
function divisibleBy4or5 (ob) {
	for (i = 0; i < ob.length; i++) {
		if (Number.isInteger(ob[i]) && (ob[i] % 4 === 0 && ob[i] % 5 === 0)) {
			ob[i] = "HelloWorld";
		}
	}
	return ob;
}

// work out what elements in object are divisible by 4
function divisibleBy4 (ob) {
	for (i = 0; i < ob.length; i++) {
		if (Number.isInteger(ob[i]) && ob[i] % 4 === 0) {
			ob[i] = "Hello";
		}
	}
	return ob;
}

// work out what elements in object are divisible by 5
function divisibleBy5 (ob) {
	for (i = 0; i < ob.length; i++) {
		if (Number.isInteger(ob[i]) && ob[i] % 5 === 0) {
			ob[i] = "World";
		}
	}
	return ob;
}

//print out object elements
function printObjectElements(ob) {
	var textnode;

	for (i = 0; i < ob.length; i++) {
		var liNode = document.createElement("li");

		textnode = document.createTextNode(ob[i]);
		liNode.appendChild(textnode);
		document.getElementById("division-list").appendChild(liNode);
	}
}