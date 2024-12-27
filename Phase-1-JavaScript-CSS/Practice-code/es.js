// Template literals with ``
const identity = "soala"
const date = 15
const message = `${identity} is about ${date} years old`

console.log(message)

// Multi line String
const poem = `Roses are red,
Violets are blue,
Sugar is sweet,
And so are you.`;
console.log(poem);

// Destructuring Objects
const user ={
    name: "soala",
    age: 15,
    address: {
      city: "Port Harcourt",
      state: "Rivers"
    }
}
const {name, age} = user
console.log(name, age)

const {address: {city, state}} = user
console.log(city, state)

// Destructuring Arrays

const colors = ["red", "blue", "orange"]
const [primary, secondary, tertiary] = colors

console.log(primary, secondary, tertiary)

// Spread and Rest Operator
// For Arrays
const arr1 = [1,2,3,4]
const arr2 = [...arr1]
const arr3 = [...arr1, ...arr2]
console.log(arr2)
console.log(arr3)

// For Objects
const client = {call: "Soala", number: 15}
const updatedClient = {...client, city: "Port Harcourt"}
console.log(updatedClient)
console.log(updatedClient.call)

// Rest

function sum(...numbers){
  return numbers.reduce((total, num) => total + num)
}

console.log(sum(1,2,3,4,5))

//  Arrow Function
const square = (x) => x * x;
console.log(square(4));


// Practice

const addTask = (tasks, task) => {
   const newTask = [...tasks, task]
   console.log(`new task added: ${task}`)
   return newTask
}

const removeTask = (tasks, index) =>{
  const newTask = tasks.filter((_, i) => i !== index)
  console.log(`Tasks removed ${tasks[index]}`)
  return newTask
}

const listTasks = (tasks, index) => {
     tasks.forEach((task, index)=> {
       console.log( `${index + 1}. ${task}`)
     });
}

// Initialize tasks array
let tasks = [];

// Test the functions
tasks = addTask(tasks, "Learn JavaScript"); // Add task 1
tasks = addTask(tasks, "Complete the project"); // Add task 2
tasks = addTask(tasks, "Review ES6+"); // Add task 3
listTasks(tasks); // List all tasks

tasks = removeTask(tasks, 0); // Remove the first task
listTasks(tasks); // List remaining task