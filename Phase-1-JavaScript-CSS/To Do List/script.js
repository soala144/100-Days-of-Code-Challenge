const listContainer = document.getElementById("list-container")
const inputBox = document.getElementById("input-box")

const addTask = () => {
    if (inputBox.value === "") {
        alert("You must write something")
    } else {
        const li = document.createElement("li")
        li.innerHTML = inputBox.value
        listContainer.appendChild(li)
        const span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)

    }
    saveData()
    inputBox.value = ""
}

listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        saveData()
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
}, false)

function saveData (){
    localStorage.setItem("data", listContainer.innerHTML)
}

function showTask(){
   listContainer.innerHTML= localStorage.getItem("data")
}

showTask()