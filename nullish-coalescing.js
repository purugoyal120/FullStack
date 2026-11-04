// Nullish coalescing (??) falls back only for null or undefined.
// Logical OR (||) falls back for every falsy value, including 0 and ''.
const user = { name: '', age: 0, city: null };
console.log(user.name ?? 'Guest'); // ''
console.log(user.age || 18);        // 18
console.log(user.city ?? 'Unknown'); // 'Unknown'

const profile = { name: 'Jordan', age: 30, address: {} };
profile.address.region ??= 'North';
console.log(profile.address.region);

// Array destructuring assigns array elements to variables.
let [first, second] = [1, 2];
console.log(first, second);

function getPair() {
    return [10, 11];
}
[first, second] = getPair();
console.log(first, second);

const [head, next, ...remaining] = [1, 2, 3, 4, 5];
console.log(head, next, remaining);
