// Function to get a cookie by name
function getCookie(name) {
    const cookies = document.cookie.split('; ');
    for (let c of cookies) {
        const[key, value] = c.split('=');
        if (key === name) return decodeURIComponent(value);
    }
    return null;
}

// Retrieve cookies if they exist
let userName = getCookie('name');
let userTheme = getCookie('theme');

// If name or theme is missing ask the user and store in cookies
if (!userName || !userTheme) {
    userName = prompt("What's your name?");
    userTheme = prompt("Do you prefer dark or light theme?").toLowerCase();

    // Validate the theme input
    if (userTheme !== 'dark' && userTheme !== 'light') {
        userTheme = 'light'; // Default to light
    }

    // Set cookies for 7 days
    document.cookie = `name=${encodeURIComponent(userName)}; max-age=${60 * 60 * 24 * 7}; path=/`;
    document.cookie = `theme=${userTheme}; max-age=${60 * 60 * 24 * 7}; path=/`;

    console.log('Cookies set:', document.cookie);
}

// Welcome message
const welcome= document.getElementById("welcome-message");
if (welcome && userName) {
    welcome.textContent = `Welcome back, ${userName}`;
}

// Apply dark or light theme by changing styles
if (userTheme === 'dark') {
    document.body.style.backgroundColor = "#121212";
    document.body.style.color = "#f1f1f1";

    const cards = document.querySelectorAll('.content-home, .content-facts, .sidebar-home, .sidebar-facts, .gallery-section article, .fun-facts, .abilities-section article, .contact-info');
    cards.forEach(card => {
        card.style.backgroundColor = "#1e1e1e";
        card.style.color = "#f1f1f1";
    });
} else {
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.color = "#121212";
}


