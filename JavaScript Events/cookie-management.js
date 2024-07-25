// Function to set a cookie
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Function to get a cookie
function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Function to check if a cookie exists
function checkCookie(name) {
    const cookie = getCookie(name);
    return cookie !== null;
}

// Event listeners for buttons
document.getElementById('set-cookie').addEventListener('click', () => {
    setCookie('testCookie', 'This is a test cookie', 7);
    document.getElementById('cookie-output').textContent = 'Cookie "testCookie" has been set.';
});

document.getElementById('check-cookie').addEventListener('click', () => {
    const exists = checkCookie('testCookie');
    document.getElementById('cookie-output').textContent = exists ? 'Cookie "testCookie" exists.' : 'Cookie "testCookie" does not exist.';
});

document.getElementById('get-cookie').addEventListener('click', () => {
    const value = getCookie('testCookie');
    document.getElementById('cookie-output').textContent = value ? `Cookie value: ${value}` : 'Cookie "testCookie" not found.';
});
