// Function declarations, function expressions, and arrow functions.

const firstNumber = 5;
const secondNumber = 10;

// A function declaration can be called before its definition (hoisting).
function addWithDeclaration(a, b) {
    return a + b;
}

// Function expression: the function is assigned to a variable.
const addWithExpression = function (a, b) {
    return a + b;
};

// Arrow function: concise syntax for a function expression.
const addWithArrow = (a, b) => a + b;
const square = (value) => value * value;

console.log(addWithDeclaration(firstNumber, secondNumber));
console.log(addWithExpression(firstNumber, secondNumber));
console.log(addWithArrow(firstNumber, secondNumber));
console.log(square(4));
