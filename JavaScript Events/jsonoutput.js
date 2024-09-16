let jsonOutput=document.getElementById('jsonOutput')

async function fetchAndDisplayData() {
    try {
        const response = await fetch('person.json');
        const person = await response.json();

        // Accessing JSON object properties using dot notation
        const name = person.name;
        const age = person.age;
        const city = person.address.city;
        const firstHobby = person.hobbies[0];


        jsonOutput.textContent = `Name: ${name}, Age: ${age}, City: ${city}, First Hobby: ${firstHobby}`;
    } catch (error) {
        console.error('Error fetching the JSON data:', error);
    }
}


fetchAndDisplayData();
