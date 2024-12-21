const fruit = ["grape", "orange", "apple", "paw-paw", "banana"]

// logging arrays based on their position

console.log(fruit[0])
console.log(fruit[2])

// modifying elements in the array

fruit[1] = "paw-paw"
console.log(fruit)

//Array methods
fruit.push("coconut")//Adds to the last
fruit.unshift("carrot")// Adds to the beginning

console.log(fruit)

fruit.pop() //removes the last item
fruit.shift() //removes the first item

console.log(fruit)


// Tasks
// 1. Create a shopping list array that removed the last item, add a new item to the beginning

const shoppingCart = ["shoe", "bags", "watches","rings", "phones"]

shoppingCart.pop()
shoppingCart.unshift("fan")

console.log(shoppingCart)

// 2. use the reverse() method: This makes the last element to be the first and vice versa and the preceeding elements follows it.

shoppingCart.reverse()
console.log(shoppingCart)

// 3. using the indexof() method to check for the index of  perticular element in an array


console.log(shoppingCart.indexOf("bags"))

// .map()
let digits = [1, 2, 3, 4, 5]
doubled = digits.map(num => num*2)
console.log(doubled)

// .filter()

let evens = digits.filter(num => num%2 === 0)
console.log(evens)

// .filter and .map
 const result = digits.filter(num => num%2 === 0).map(num => num*2)
 console.log(result)

// Practice
// 1. Given an array of student objects, use .filter() to get students who scored above 50, and then use .map() to extract their names

const students = [
    { name: 'John', score: 45 },
    { name: 'Jane', score: 75 },
    { name: 'Bob', score: 60 },
]

const nick = students.map(stud => stud.name)
console.log(nick)

const position = students.filter(stud => stud.score > 50).map(stud => stud.name)
console.log(position)


const numbers = [2, 3, 4, 5, 6]

const relate = numbers.map(num => num*num)
console.log(relate)

const array = [1, null, 2, undefined, 3, null, 4, undefined, 5];
const filteredArray = array.filter(Boolean);

console.log(filteredArray); // [1, 2, 3, 4, 5]
