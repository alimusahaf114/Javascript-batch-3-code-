let todoData = []
displayData()
function myTodo(){
    let todoInput = document.getElementById("todoInput").value
    let todoDate = document.getElementById("todoDate").value
    let todoStatus = document.getElementById("todoStatus").value
    todoData.push({text: todoInput , date:todoDate , sts:todoStatus})
    document.getElementById("todoInput").value = ''
    document.getElementById("todoDate").value = ''
    document.getElementById("todoStatus").value = ''
    displayData()
}

function displayData(){
    let todoDisplay = document.querySelector('#todoDisplay') 
    let myhtml  = ''  
    for(let i = 0 ; i < todoData.length ; i++){
        myhtml  += `
        <div>
        <span> ${todoData[i].text} </span>
        <span> ${todoData[i].date} </span>
        <span> ${todoData[i].sts} </span>
        <button onclick="todoData.splice(${i},1)
        displayData()
        "> Delete </button>
        </div>
        `        
}
todoDisplay.innerHTML = myhtml
}

