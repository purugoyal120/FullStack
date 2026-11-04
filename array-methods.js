// Common array methods. Each method below returns a value without changing
// the original numbers array (unless otherwise noted by the method).
const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map((number) => number ** 2);
const evenNumbers = numbers.filter((number) => number % 2 === 0);
const firstNumberAboveThree = numbers.find((number) => number > 3);
const total = numbers.reduce((sum, number) => sum + number, 0);

console.log('Original:', numbers);
console.log('Squared:', squaredNumbers);
console.log('Even numbers:', evenNumbers);
console.log('First value above 3:', firstNumberAboveThree);
console.log('Total:', total);
