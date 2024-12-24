// const header = document.getElementById("header")
// const paragraph = document.getElementsByClassName("text")
// const add = document.getElementById("myClass")
// const para = document.getElementsByTagName("span")
// console.log(header.innerText)
// console.log(paragraph[0].innerText)
// console.log(para.length)
// E

const paragraph = document.getElementById("text")
paragraph.innerText ="This is soala"

// styling Syntax
paragraph.style.backgroundColor = "red"

// Adding and Removing Elements
const list = document.getElementById("list")
const newItem = document.createElement("li")
newItem.innerText = "new llist"
list.appendChild(newItem)

// Removing item use 
const oldItem = document.getElementById("remove")
oldItem.remove()

// Event listeners

const btn = document.getElementById("example-btn")

btn.addEventListener('click', () =>{
    paragraph.style.backgroundColor = "blue"
})