// A method can use values stored on the object that calls it.
function displayProfileName() {
    console.log(this.name);
}

const profile = {
    name: 'Sample Learner',
    showName: displayProfileName,
};

profile.showName(); // `this` refers to profile for this method call.
