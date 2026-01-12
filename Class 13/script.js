// // let result = Math.floor(Math.random()*5)
// // console.log(result);

// // const changeColor= () =>{

// // }
// function changeColor(){
//     let num = Math.floor(Math.random()*10)
//     if(num==1){
//         document.querySelector('body').style.backgroundColor = 'red'
//     } else if(num ==2){
//         document.querySelector('body').style.backgroundColor = 'green'

//     }else if(num ==3){
//         document.querySelector('body').style.backgroundColor = 'yellow'

//     }else if(num ==4){
//         document.querySelector('body').style.backgroundColor = 'orange'

//     }else if(num ==5){
//         document.querySelector('body').style.backgroundColor = 'blue'

//     }else if(num ==6){
//         document.querySelector('body').style.backgroundColor = 'black'

//     }else if(num ==7){
//         document.querySelector('body').style.backgroundColor = 'violet'

//     }else if(num ==8){
//         document.querySelector('body').style.backgroundColor = 'aqua'

//     }else if(num ==9){
//         document.querySelector('body').style.backgroundColor = 'green'

//     }
// }
let score = 0
function playGame(){
    let num = Math.floor(Math.random()*7)
    score += num
    if(num == 1){
        document.querySelector('h1').textContent = "Single Run"
    } else if(num == 2){
        document.querySelector('h1').textContent = "Double Run"

    }else if(num == 3){
        document.querySelector('h1').textContent = "Triple Run"

    }else if(num == 4){
        document.querySelector('h1').textContent = "Boundary 😂"

    }else if(num == 5){
        document.querySelector('h1').textContent = "Five Runs ☹️"

    }else if(num == 6){
        document.querySelector('h1').textContent = "Six 🤩"

    }

    if(score >= 50){
        alert("Half Century")
    }
    console.log(score);
}
