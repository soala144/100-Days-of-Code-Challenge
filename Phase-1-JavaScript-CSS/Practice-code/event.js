//  event Listeners syntax: element.addEventListener(event, listener, useCapture);
const btn = document.getElementById("button")

btn.addEventListener("click", () => {
    alert("click")
})
// Click Event
const myBtn = document.getElementById("myButton")
myBtn.addEventListener("click", () =>{
    document.body.style.backgroundColor = "yellow"
})

// Mouse Over Event
const box = document.getElementById("box");

box.addEventListener("mouseover", () => {
  box.style.backgroundColor = "yellow";
});


// key event

document.addEventListener("keydown", (event) => {
    console.log(`Key pressed: ${event.key}`); 
});
 
// input event
const input = document.getElementById("input")
const result = document.getElementById("result")
input.addEventListener("input", () => {
    result.innerHTML = input.value
})


// Practice Test: Create 3 buttons that will change the color of the page
const greenBtn = document.getElementById("green")
const redBtn = document.getElementById("red")
const resetBtn = document.getElementById("reset")

greenBtn.addEventListener("click", ()=>{
    document.body.style.backgroundColor = "green"
})

redBtn.addEventListener("click", ()=>{
    document.body.style.backgroundColor = "red"
})

resetBtn.addEventListener("click", ()=>{
    document.body.style.backgroundColor = "white"
})



const list = document.getElementById("dynamic-list");

    // Add event listener to the parent (ul)
    list.addEventListener("click", (event) => {
      // Check if the clicked element is an li
      if (event.target && event.target.tagName === "LI") {
        alert(`Selected: ${event.target.textContent}`);
      }
    });