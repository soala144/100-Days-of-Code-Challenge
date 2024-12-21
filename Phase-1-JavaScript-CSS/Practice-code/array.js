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
