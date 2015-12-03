'use strict';

const test = require('tape');  // igy is lehet elvileg :( import test from 'tape';

const arabic2roman = require('./');

test('roman numeral converter', t => {
    t.equal(typeof arabic2roman, 'function');

    t.throws(arabic2roman, 'Please specify a number!');

    t.equal(arabic2roman(0), '');

    t.equal(arabic2roman(1), 'i');

    t.equal(arabic2roman(2), 'ii');

    t.equal(arabic2roman(4), 'iv');

    t.equal(arabic2roman(5), 'v');

    t.equal(arabic2roman(6), 'vi');

    t.equal(arabic2roman(9), 'ix');

    t.equal(arabic2roman(10), 'x');

    t.equal(arabic2roman(15), 'xv');

    t.equal(arabic2roman(40), 'xl');

	t.end();
});