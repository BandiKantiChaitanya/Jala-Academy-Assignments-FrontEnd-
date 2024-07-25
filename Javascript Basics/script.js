// Array of fruit names
const fruits = ['Apple', 'Orange', 'Banana', 'Mango', 'Pineapple', 'Grapes', 'Strawberry'];

// Function to display fruits in the list
function displayFruits() {
    const fruitList = document.getElementById('fruit-list');
    fruitList.innerHTML = '';
    fruits.forEach(fruit => {
        const li = document.createElement('li');
        li.textContent = fruit;
        fruitList.appendChild(li);
    });
}

// Function to sort fruits in descending order
function sortFruits() {
    fruits.sort((a, b) => b.localeCompare(a));
    displayFruits();
}

// Display the initial list of fruits
displayFruits();
