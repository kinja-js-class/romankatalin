'use strict';

const TOKENS = {1: 'i', 4: 'iv', 5: 'v', 9: 'ix', 10: 'x', 40: 'xl'};

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

	let keys = Object.keys(TOKENS).reverse();

	while (keys.length > 0) {
		if (currentNumber >= keys[0]) {
			return keys[0];
		}

		keys.splice(0, 1);
	}
}


module.exports = arabic2roman;
