// Callback

// const fetchData = (callback) => {
//     setTimeout(() => {
//       console.log("data fetched")
//       callback()
//     }, 2000)

  
// }
// fetchData(() => {
//     console.log("Call Back")
// })


// Promises
const getData = new Promise((resolve, reject) => {
    let success = true;
    setTimeout(() => {
      success ? resolve("Data fetched!") : reject("Fetch failed!");
    }, 2000);
});
  
  getData
    .then((message) => console.log(message))
    .catch((error) => console.error(error));
  


// Async Await

async function fetchData() {
    try {
      const data = await new Promise((resolve) =>
        setTimeout(() => resolve("Data fetched!"), 2000)
      );
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  
  fetchData();

  
//   Fetching data from an API
 
// Format
// fetch(url)
//   .then((response) => response.json()) // Parse JSON from the response
//   .then((data) => console.log(data))
//   .catch((error) => console.error("Error:", error));


// Test: Random joke API
const setupElement = document.getElementById("setup");
const punchlineElement = document.getElementById("punchline");
const button = document.getElementById("new-joke");

const apiUrl = "https://official-joke-api.appspot.com/random_joke";

async function fetchJoke() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    setupElement.textContent = data.setup;
    punchlineElement.textContent = data.punchline;
  } catch (error) {
    setupElement.textContent = "Oops! An error occurred.";
    punchlineElement.textContent = "Please try again later.";
    console.error("Error fetching joke:", error);
  }
}

button.addEventListener("click", fetchJoke);

// Fetch a joke on page load
fetchJoke();
