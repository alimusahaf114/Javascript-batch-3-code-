let todoData = ['work' , 'play' , 'go']
displayData()
function myTodo(){
    let todoInput = document.getElementById("todoInput").value
    todoData.push(todoInput)
    document.getElementById("todoInput").value = ''
    displayData()
}

function displayData(){
    let todoDisplay = document.querySelector('#todoDisplay') 
    let myhtml  = ''  
    for(let i = 0 ; i < todoData.length ; i++){
        myhtml  += `
        <div>
        <span> ${todoData[i]} </span>
        <button onclick="todoData.splice(${i},1)
        displayData()
        "> Delete </button>
        </div>
        `        
}
todoDisplay.innerHTML = myhtml
}



