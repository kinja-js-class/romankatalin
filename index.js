'use strict';

const TOKENS = {1: 'i', 4: 'iv', 5: 'v', 9: 'ix'};

function arabic2roman(number) {
	validateInput(number);
	return generateOutput(number);
}

function validateInput(input) {
	if (typeof input !== 'number') {
		throw new Error('Please specify a number!');
	}
}

function generateOutput(number) {
	let output = '';
	while (number > 0) {
		let currentToken = getCurrentToken(number);
		output += TOKENS[currentToken];
		number -= currentToken;
	}
	return output;
}

function getCurrentToken(currentNumber) {
	if (currentNumber >= 9) {
		return 9;
	} else if (currentNumber >= 5) {
		return 5;
	} else if (currentNumber >= 4) {
		return 4;
	} else {
		return 1;
	}
}

module.exports = arabic2roman;