let todos=[]
let ctrl=0
function addToDo(){
    const input=document.querySelector("input").value
    if (input === "") {
        alert("Task cannot be empty!");
        return;
    }
    
    todos.push({
        id:ctrl++,
        title: input
    })
    render(todos)
}

function render(todos){
    const rootDiv=document.querySelector("#todos")
    rootDiv.innerHTML=""
    todos.forEach(todo=>{
        const div= document.createElement("div")
        const para=document.createElement("p")
        const del=document.createElement("button")
        const edit=document.createElement("button")
        div.className="todos-item"
        del.innerHTML= "🗑️"
        edit.innerHTML="✏️"
        del.onclick=()=>deleteToDo(todo.id)
        edit.onclick=()=>editToDo(todo.id, para)
        
        para.textContent=`• ${todo.title}`

        div.append(para)
        div.append(edit)
        div.append(del)
        rootDiv.append(div)
    })
}

function clearToDo(){
    todos=[]
    render(todos)
}

function deleteToDo(id){
    todos=todos.filter(todo=>todo.id!==id)
    render(todos)
}

function editToDo(id, para){
    const todo = todos.find(todo => todo.id === id)
    const newPara = document.createElement("input")

    newPara.type = "text"
    newPara.value = todo.title
    para.textContent = "" 

    para.appendChild(newPara)

    newPara.addEventListener("blur", ()=>{
        todo.title=newPara.value
        render(todos)
    })

    newPara.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            newPara.blur() 
        }
    })
}