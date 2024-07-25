document.addEventListener('DOMContentLoaded', () => {
    let count = 0;
    const countValue = document.getElementById('countValue');
    const countButton = document.getElementById('countButton');

    countButton.addEventListener('click', () => {
        count++;
        countValue.textContent = count;
    });
});
