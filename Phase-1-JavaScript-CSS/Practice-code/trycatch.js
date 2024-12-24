//  Syntax for the try...catch statement
// try {
  // Code that may throw an error
// } catch (error) {
//     // Handle the error
//   }

try {
    let result = 10 / 0;
    if (!isFinite(result)) {
      throw new Error("Division by zero is not allowed.");
    }
    console.log(result);
  } catch (error) {
    console.error("An error occurred:", error.message);
}


// Debugging Technique

let a = 5;
let b = 0;
console.log("Values:", { a, b });
if (b === 0) {
  console.error("Cannot divide by zero.");
}



// Form Validation 
const form = document.getElementById("userForm");


form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission

  let hasError = false;

  // Validate username
  const username = document.getElementById("username").value.trim();
  const usernameError = document.getElementById("usernameError");
  usernameError.textContent = ""; // Clear previous error

  if (!username || username.length < 3) {
    usernameError.textContent = "Username must be at least 3 characters long.";
    hasError = true; // Flag as error
  }

  // Validate age
  const age = document.getElementById("age").value.trim();
  const ageError = document.getElementById("ageError");
  ageError.textContent = ""; // Clear previous error

  if (!age || isNaN(age) || age <= 0) {
    ageError.textContent = "Age must be a positive number.";
    hasError = true; // Flag as error
  }

  if (!hasError) {
    alert("Form submitted successfully!");
  } else {
    console.error("Form submission failed due to errors.");
  }
});
