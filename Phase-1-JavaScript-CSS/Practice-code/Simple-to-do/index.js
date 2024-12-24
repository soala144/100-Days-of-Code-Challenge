const toDoInput = document.getElementById("todoInput")
const listContainer = document.getElementById("listContainer")
const errorMsg = document.getElementById("error-msg")
const addTask = () =>{
    if(toDoInput.value === ""){
        errorMsg.innerText = "You must input a todo"
    }else{
        let li = document.createElement("li")
        li.innerHTML = toDoInput.value
        listContainer.appendChild(li)
    }
    toDoInput.value = ""
}