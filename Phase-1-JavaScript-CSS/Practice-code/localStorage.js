// Store data
localStorage.setItem('username', 'Soala');

// Retrieve data
const username = localStorage.getItem('username');
console.log(username); // Output: Soala

// Remove a key
localStorage.removeItem('username');

// Clear all data
localStorage.clear();


// Session Storage
// Store data
sessionStorage.setItem('sessionId', '12345');

// Retrieve data
const sessionId = sessionStorage.getItem('sessionId');
console.log(sessionId); // Output: 12345

// Clear session storage
sessionStorage.clear();

// Save the theme
localStorage.setItem('theme', 'dark');

// Retrieve and apply the theme
const theme = localStorage.getItem('theme');
if (theme) {
  document.body.className = theme; // Apply theme
}
