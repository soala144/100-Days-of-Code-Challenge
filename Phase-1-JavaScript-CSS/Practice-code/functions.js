// Basic Syntax of a function

function add(a, b){
    return a + b
}
console.log(add(5,6))

function calculateTotal(price, quantity) {
    return price * quantity;
}
console.log(calculateTotal(10, 3)); 

// Scopes
let globalVar = "I am global"; //Global scope

function showScope() {
    let localVar = "I am local"; //local scope
    console.log(globalVar); // Access global
    console.log(localVar); // Access local
}
showScope();


// default parameters

function greet(name = "Guest") {
    return `Hello, ${name}!`;
}
console.log(greet()); 

// High Order function
function repeatTask(task, times) {
    for (let i = 0; i < times; i++) {
        task();
    }
}
repeatTask(() => console.log("Task executed"), 3);


// Tasks 
// 1. Create a function to calculate the total cost of items in a cart (price × quantity), include a discount parameter with a default value.

const totalCost = (price, quantity, discount = 10) =>{
    let total = price*quantity
    console.log( total -((total)*(10/100)))
}

totalCost(50, 3)

// 2. Write a function that accesses both local and global variables. Ensure you understand the differences.

let global = "I am global"
 
const identifyGlobal = () =>{
    let local= "I am local "
    console.log(local)
    console.log(global)
}

identifyGlobal()

// 3.Write a function that filters an array of numbers to return only even numbers. Pass the filtering logic as a separate function

const filterNumber = () =>{
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    filtered = numbers.filter(num => num%2 === 0)
    console.log(filtered)
}

const filterIt = () => {
    filterNumber()
}

filterIt()