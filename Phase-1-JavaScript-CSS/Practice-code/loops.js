// LOOPS

// for loops
for(let i = 1; i < 5; i++){
    console.log(i)
}

// practice: to print the first 10 multiples of 3

for(let i=1; i<10; i++){
    console.log("number", i*3)
}

// while loop

let count = 1

while(count <=5){
   console.log(count)
   count++
}

// practice: print numbers from 10 to 1

let art = 10
while(art>=1){
   console.log(art)
   art--
}


// Do ... while
let number = 0;
do {
    console.log("Number:", number);
    number++;
} while (number < 5);

// practice: print the first 5 even numbers

let even = 1;
do{
    console.log("Number: ", even*2);
    even++
} while (even<6)                 

// for ... in loops: for objects

let person = {
    name: "Soala",
    age: 15,
    city: "Port-Harcourt"
}

for(let key in person){
    console.log(key + ":" + person[key])
}

let  friend = {
    name: "Sotonye",
    age: 14,
    city: "Port-Harcourt"
}

for(let key in friend){
    console.log(key + ":" + friend[key])
}

// For ... of Loop
let colors = ["red", "blue", "white"]

for(color of colors){
    console.log(color)
}

let people =[
    {name: "soala", age:15, city: "ph"},
    {name: "sotonye", age:14, city: "ph"}
]

for(person of people){
    console.log("name: " + person.name + " age: " + person.age + " city: " + person.city)
}

// Nested loops
for(let m = 1; m<=3; m++){
    for(n=1; n<=3; n++){
        console.log(`m: ${m} n:${n}`)
    }
}