document.getElementById('my-form').addEventListener('submit', function(event) {
    const input = document.getElementById('my-input');
    const errorMessage = document.getElementById('error-message');

    if (input.value.trim() === '') {
        errorMessage.textContent = 'The text box cannot be empty.';
        event.preventDefault(); // Prevent the form from submitting
    } else {
        errorMessage.textContent = ''; // Clear any previous error message
    }
});
