const input = document.getElementById("input")
const message = document.getElementById("display")
const contains = document.getElementById("contains")
const mainButton = document.getElementById("button")



const randomMessages =() =>{
    const random = Math.floor(Math.random() * 10) + 1
    const guess = input.value.trim()
    if(guess === ""){
        message.innerHTML = "Please Enter a number"
        message.style.color = "red"
        return
    }


    if(guess.value === random ){~
        message.innerHTML = `You guessed Correctly, How did u get to know it was ${random}`

    }else{
        message.innerHTML = `You guessed wrongly, the number is ${random}`
        message.style.color = "red"
        
    }
    
  
    input.value = ""
}
