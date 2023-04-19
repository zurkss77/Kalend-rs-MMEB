// Function to toggle the dropdown menu
function toggleDropdown() {
    document.getElementById("dropdown-content").classList.toggle("show");
}

// Function to set the mode
function setMode(mode) {
    if (mode === 'dark') {
        document.body.style.backgroundColor = 'black';
        // Save the user's preference to localStorage
        localStorage.setItem('mode');
    } else if (mode === 'light') {
        document.body.style.backgroundColor = 'white';
        // Save the user's preference to localStorage
        localStorage.setItem('mode');
    } else if (mode === 'default') {
        document.body.style.backgroundColor = 'pink';
        // Remove any saved preference from localStorage
        localStorage.removeItem('mode');
    }
}

// Check the user's preference when the page loads
if (localStorage.getItem('mode') === 'dark') {
    setMode('dark');
} else if (localStorage.getItem('mode') === 'light') {
    setMode('light');
} else {
    setMode('default');
}