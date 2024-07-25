function greet(greeting, punctuation) {
    console.log(`${greeting}, ${this.name}${punctuation}`);
}

const person = {
    name: 'Alice'
};

document.addEventListener('DOMContentLoaded', () => {
    const callButton = document.getElementById('callButton');
    const applyButton = document.getElementById('applyButton');
    
    callButton.addEventListener('click', () => {
        greet.call(person, 'Hello', '!');
    });
    
    applyButton.addEventListener('click', () => {
        greet.apply(person, ['Hi', '.']);
    });
});
