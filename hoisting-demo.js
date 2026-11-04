// 1. var hoisting
console.log(a); // undefined
var a = 10;


// 2. let hoisting
// console.log(b); // ReferenceError
let b = 20;
console.log(b); // 20


// 3. const hoisting
// console.log(c); // ReferenceError
const c = 30;
console.log(c); // 30


// 4. Function declaration hoisting
greet(); // Hello!

function greet() {
    console.log("Hello!");
}


// 5. Function expression with var
// sayHi(); // TypeError: sayHi is not a function

var sayHi = function() {
    console.log("Hi!");
};

sayHi(); // Hi!


// 6. Arrow function with const
// welcome(); // ReferenceError

const welcome = () => {
    console.log("Welcome!");
};

welcome(); // Welcome!


// 7. Local var shadows global var
var x = 100;

function test() {
    console.log(x); // undefined
    var x = 200;
    console.log(x); // 200
}

test();

console.log(x); // 100


// 8. Function parameter
function show(value) {
    console.log(value);
}

show();    // undefined
show(500); // 500