import { compareNumbers } from '../numUtils.js';
const test = QUnit.test;

test('should return 0 when player guesses correct number', (expect) => {
    const guess = 4;
    const correctNumber = 4;
    const expected = 0;
    const actual = compareNumbers(guess, correctNumber);
    expect.equal(actual, expected);
});

test('should return -1 when player guess is less than correct number', (expect) => {
    const guess = 2;
    const correctNumber = 5;
    const expected = -1;
    const actual = compareNumbers(guess, correctNumber);
    expect.equal(actual, expected);
});

test('should return 1 when player guess is greater than correct number', (expect) => {
    const guess = 10;
    const correctNumber = 4;
    const expected = 1;
    const actual = compareNumbers(guess, correctNumber);
    expect.equal(actual, expected);
});