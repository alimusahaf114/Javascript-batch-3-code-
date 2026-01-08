let todoData = []
displayData()
function myTodo(){
    let todoInput = document.getElementById("todoInput").value
    let todoDate = document.getElementById("todoDate").value
    todoData.push({todo: todoInput , date:todoDate})
    document.getElementById("todoInput").value = ''
    displayData()
}

function displayData(){
    let todoDisplay = document.querySelector('#todoDisplay') 
    let myhtml  = ''  
    for(let i = 0 ; i < todoData.length ; i++){
        myhtml  += `
        <div>
        <span> ${todoData[i].todo} </span>
        <span> ${todoData[i].date} </span>
        <button onclick="todoData.splice(${i},1)
        displayData()
        "> Delete </button>
        </div>
        `        
}
todoDisplay.innerHTML = myhtml
}



