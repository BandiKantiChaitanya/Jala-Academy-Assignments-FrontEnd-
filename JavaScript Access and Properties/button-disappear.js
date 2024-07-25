document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('disappearButton');
    button.addEventListener('click', function() {
        this.style.display = 'none';
    });
});
