// DAY 2
// // Variables

// // var
// var name = "soala"
// console.log(name)

// //const  
// const age = 15
// console.log(age)

// //let
// let age15= true
// console.log(age15)


// //Datatypes 
// console.log(`Name: ${name}, Type: ${typeof name}`);
// console.log(`Age: ${age}, Type: ${typeof age}`);
// console.log(`Age: ${age}, Type: ${typeof age}`);

// // Array
// const ageAccepted = [20, 30, 50]
// console.log(ageAccepted[0])

// // Object 
// const person = {
//   gender: "male",
//   class: "SSS3",
//   stack: "frontend"
// }

// console.log(person.gender)
// console.log(person.class)
// console.log(person.stack)



// // function

// function greetUser(userName){
//     return `hello, ${userName}! Welcome to Day of your challenge`
// }

// const thankUser = (userName) =>{
//     return `thank you, ${userName} for completing today's task`
// }
// console.log(greetUser(name))
// console.log(thankUser(name))

// document.getElementById('example-btn').addEventListener('click', () => {
//     alert('You clicked the button!');
//   })


// Day 3

// Operators
  //Arithmetic Operators 
    const addNumbers = (a, b) => {
        return a + b
    } 
    const subtractNumbers = (a, b) => {
        return a - b
    } 
    
    let c = 30
    let d = 5

    console.log(addNumbers(5, 10))
    console.log(subtractNumbers(10, 15))
    console.log(c*d)
    console.log(c/d)
    console.log(c%d) //modulus
    console.log(c**d) //exponential
    
    
    // Assignment Operators
    let e = 10 //=
    
    let total = 50
    total += 25

    let sub = 50
    sub -= 25
    
    let mult = 50
    mult *= 25

    let div = 50
    div /= 25

    console.log(total)
    console.log(sub)
    console.log(mult)
    console.log(div)
    // Comparison Operator

    let u = 10
    let v = "10"
    let w = 15

    console.log(u == v)
    console.log(u === v)
    console.log(u > w)
    console.log(u < w)
    console.log(u <= w)
    console.log(u >= w)

    // Logical Operator
    let age = 20
    let hasID = true

    if (age >=18 && hasID) {
        console.log("Allowed entry")
    } else {
        console.log("Access Denied")
    }

    if (age <=18 && !hasID) {
        console.log("Allow entry")
    } else {
        console.log("Access Denied")
    }

    // Increment and Decrement Operator
    let g = 5
    console.log(g++) //Prints 5 but has avalue of 6
    console.log(g--) //Printa 5 but has a value of 4

    // Tenary Operator
    let myAge = 15
    let canCode = (age <=15) ? "Yes" : "No"
// CONTROL FLOW

// IF ... ELSE

let score = 75;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

// SWITCH STATEMENT

let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}

let number = 15;

switch (true) {
  case number < 10:
    console.log("Less than 10");
    break;
  case number >= 10 && number <= 20:
    console.log("Between 10 and 20");
    break;
  case number > 20:
    console.log("Greater than 20");
    break;
  default:
    console.log("Invalid number");
}

