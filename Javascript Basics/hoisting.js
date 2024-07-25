function demonstrateHoisting() {
    // Try to use the variable before declaration and initialization
    outputMessage = 'The value of the variable before declaration: ' + message;
    
    // Display the output message on the web page
    document.getElementById('output').innerHTML = outputMessage;

    // Log the value of the variable to the console before declaration and initialization
    console.log('The value of the variable before declaration: ' + message);

    // Variable declaration and initialization
    var message = 'Hello, this is a demonstration of variable hoisting!';

    // Log the value of the variable after declaration and initialization
    console.log('The value of the variable after declaration: ' + message);

    // Update the output message to include the value after initialization
    outputMessage += '<br>The value of the variable after declaration: ' + message;

    // Display the updated output message on the web page
    document.getElementById('output').innerHTML = outputMessage;
}

