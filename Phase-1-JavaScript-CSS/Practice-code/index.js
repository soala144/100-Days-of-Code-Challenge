// Variables

// var
var name = "soala"
console.log(name)

//const  
const age = 15
console.log(age)

//let
let age15= true
console.log(age15)


//Datatypes 
console.log(`Name: ${name}, Type: ${typeof name}`);
console.log(`Age: ${age}, Type: ${typeof age}`);
console.log(`Age: ${age}, Type: ${typeof age}`);

// Array
const ageAccepted = [20, 30, 50]
console.log(ageAccepted[0])

// Object 
const person = {
  gender: "male",
  class: "SSS3",
  stack: "frontend"
}

console.log(person.gender)
console.log(person.class)
console.log(person.stack)



// function

function greetUser(userName){
    return `hello, ${userName}! Welcome to Day of your challenge`
}

const thankUser = (userName) =>{
    return `thank you, ${userName} for completing today's task`
}
console.log(greetUser(name))
console.log(thankUser(name))

document.getElementById('example-btn').addEventListener('click', () => {
    alert('You clicked the button!');
  })