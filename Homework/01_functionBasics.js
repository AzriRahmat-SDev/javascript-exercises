/*function showAddition(num2) {
	let sum = 'The sum is ' + (7 + num2);
	alert(sum);
}
showAddition(10);*/

//let showMultiple = (num1, num2) => alert(num1 * num2);
//showMultiple(10, 50);

function capitalFirstLetter(myString) {
	let modifiedString =
		myString.charAt(0).toUpperCase() + myString.slice(1).toLowerCase();
	alert(modifiedString);
}

function lastChar(myString2) {
	let target = myString2.length - 1;
	let modifiedString = myString2.slice(target);
	alert(modifiedString);
}

capitalFirstLetter('hENNLLllo');
lastChar('kajsdfbaksfudb');
