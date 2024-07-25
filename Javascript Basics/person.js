// Object "person" with properties firstname and lastname
const person = {
    firstname: 'John',
    lastname: 'Doe'
};

// Function to display properties of the person object
function displayProperties() {
    // Accessing properties using dot notation
    const firstnameDot = person.firstname;
    const lastnameDot = person.lastname;

    // Accessing properties using bracket notation
    const firstnameBracket = person['firstname'];
    const lastnameBracket = person['lastname'];

    // Displaying the properties in the console
    console.log('Dot notation - Firstname: ' + firstnameDot + ', Lastname: ' + lastnameDot);
    console.log('Bracket notation - Firstname: ' + firstnameBracket + ', Lastname: ' + lastnameBracket);

    // Displaying the properties on the web page
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `
        <p>Dot notation - Firstname: ${firstnameDot}, Lastname: ${lastnameDot}</p>
        <p>Bracket notation - Firstname: ${firstnameBracket}, Lastname: ${lastnameBracket}</p>
    `;
}


