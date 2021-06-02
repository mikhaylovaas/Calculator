var plusButton = document.getElementById('plus');
var text = document.getElementById('text');
var clearButton = document.getElementById("clear");
var multipleButton = document.getElementById("multiple");
var divisionButton = document.getElementById("division");
var subtractionButton = document.getElementById("subtraction");

var inputValue = 0;
var inputValueLast = null;

plusButton.onclick = plusButtonCallback;
clearButton.onclick = clearButtonCallback;
multipleButton.onclick = multipleButtonCallback;
divisionButton.onclick = divisionButtonCallback;
subtractionButton.onclick = subtractionButtonCallback;

text.focus();

function plusButtonCallback() {
	inputValue = parseInt(text.value);

	if (inputValueLast !== null) {
		inputValueLast = inputValueLast + inputValue;
		text.value = inputValueLast;
	}
	else {
		inputValueLast = inputValue;
		text.value = "";
	}
	text.focus();

}

function clearButtonCallback() {
	inputValue = 0;
	inputValueLast = null;
	text.value = 0;
}

function multipleButtonCallback() { 
	inputValue = parseInt(text.value);

	if (inputValueLast !== null) {
		inputValueLast = inputValueLast * inputValue;
		text.value = inputValueLast;
	}
    else {
		inputValueLast = inputValue;
	}
	//text.focus();
}

function divisionButtonCallback() {
	inputValue = parseInt(text.value);

	if (inputValueLast === null) {
		inputValueLast=inputValue;
		text.value = "";
	}
	else {
		inputValueLast = inputValueLast / inputValue;
		text.value = inputValueLast;
	} 
	text.focus();
}

function subtractionButtonCallback() {
	inputValue = parseInt(text.value);

	if (inputValueLast === null) {
		inputValueLast=inputValue;
		text.value = "";
	}
	else {
		inputValueLast = inputValueLast - inputValue;
		text.value = inputValueLast;
	}
	text.focus();

}

var Duck = {
	'name': 'Donald',
	'cash': 1000000000,
	'jumpToPoolOfGold': function() {
		console.log('URAAAAAA!!!!');
	}
}


var testL = 1;

function testVar() {
	testL = 2;
	console.log(testL);
}

function testVar2() {
	testL = 3;
	console.log(testL);
}


console.log(testL);






