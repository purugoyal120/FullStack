// JavaScript primitive data types.
const learnerName = 'Sample Learner';
const learnerAge = 20;
const largeInteger = 12345678901234567890n;
const isEnrolled = true;
let pendingResult;
const emptyValue = null;
const uniqueId = Symbol('id');

console.log(typeof learnerName);   // string
console.log(typeof learnerAge);    // number
console.log(typeof largeInteger);  // bigint
console.log(typeof isEnrolled);    // boolean
console.log(typeof pendingResult); // undefined
console.log(typeof emptyValue);    // object (a historical JavaScript quirk)
console.log(typeof uniqueId);      // symbol
