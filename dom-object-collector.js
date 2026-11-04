// Read two form fields and store their values as an object.
// This file is intended to run from the companion HTML practice page.
const collectedEntries = [];

function addEntry() {
    const firstValue = document.getElementById('val1').value.trim();
    const secondValue = document.getElementById('val2').value.trim();

    if (!firstValue || !secondValue) {
        console.warn('Please enter a value in both fields.');
        return;
    }

    const entry = {
        value1: firstValue,
        value2: secondValue,
    };

    collectedEntries.push(entry);
    console.log('Saved entries:', collectedEntries);
}
