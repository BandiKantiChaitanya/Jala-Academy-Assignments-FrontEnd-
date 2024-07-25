document.getElementById('show-date-time').addEventListener('click', function() {
    const now = new Date();
    const formattedDateTime = now.toLocaleString();
    document.getElementById('date-time-display').textContent = `Current Date and Time: ${formattedDateTime}`;
});
