let mobiles = [
  {
    brand: "Samsung",
    model: "Galaxy S23",
    price: 220000,
    storage: "256GB",
    color: "Black",
    img: "./Pictures/pic1.jpg"
  },
  {
    brand: "Apple",
    model: "iPhone 14",
    price: 300000,
    storage: "128GB",
    color: "Blue",
    img: "./Pictures/pic2.jpg"
  },
  {
    brand: "Xiaomi",
    model: "Redmi Note 12",
    price: 55000,
    storage: "128GB",
    color: "Gray",
    img: "./Pictures/pic3.jpg"
  }
];

let box = document.querySelector(".container")
mobiles.forEach((item)=>{
    box.innerHTML += `
    <div class="card">
    <img src=${item.img} >
    <h1> ${item.brand} </h1>
    <h2> ${item.model} </h2>
    <p> ${item.price} </p>
    </div>    
    
    `

})

