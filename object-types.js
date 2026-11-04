// Examples of common non-primitive values and built-in objects.
const learner = { name: 'Sample Learner', age: 20 };
const scores = [10, 20, 30];
const add = (a, b) => a + b;
const currentDate = new Date();
const profileMap = new Map([['name', learner.name]]);
const uniqueScores = new Set([1, 2, 2, 3]);
const greetingPattern = /hello/i;
const sampleError = new Error('Something went wrong');

console.log(learner, scores, add(10, 20), currentDate);
console.log(profileMap, uniqueScores);
console.log(greetingPattern.test('Hello'));
console.log(sampleError.message);
