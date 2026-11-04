const fruits = ['Apple', 'Banana', 'Mango'];

// for...in iterates over enumerable keys (array indexes in this example).
for (const index in fruits) {
    console.log('Index:', index);
}

// for...of iterates over the values of an iterable.
for (const fruit of fruits) {
    console.log('Fruit:', fruit);
}
