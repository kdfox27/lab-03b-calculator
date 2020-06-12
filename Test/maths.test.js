// IMPORT MODULES under test here:
import {add, sub, mult, div} from '../mathUtils.js'
// import example from '../src/example.js';

const test = QUnit.test;

test('addition', function(expect) {
    //Arrange
    // Set up your parameters and expectations
    const firstNumber = 15;
    const secondNumber = 5;
    //Act 
    // Call the function you're testing and set the result to a const
    // function sub(firstNumber, secondNumber) {
        // return firstNumber - secondNumber;
    // };
    const expected = 75
    const actual = mult(firstNumber, secondNumber);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(expected, actual);
});
