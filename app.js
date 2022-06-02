const lapCartIncrement = document.getElementById('lapCartIncrement')
const itemIncrement = document.querySelectorAll('.itemIncrement')
const display1 = document.getElementById('display1')
const button1Plus = document.getElementById('button1Plus')


let laptops = [{
    title: 'Acer Predator Helios 300',
    description: 'Helios 300 Octa Core i7 10th Gen - (16 GB/1 TB HDD/256 GB SSD/Windows 10 Home/6 GB Graphics/NVIDIA GeForce RTX 3060',
    src: 'img/he1.jpg',
    price: 70000
},{
    title: 'Lenovo Legion 5',
    description: 'Lenovo Legion 5 Ryzen 5 Hexa Core 5600H - (8 GB/512 GB SSD/Windows 10 Home/4 GB Graphics/NVIDIA GeForce GTX 1650',
    src: 'img/he2.jpg',
    price: 90000
},{
    title: 'MSI GF65',
    description:  'MSI GF65 Thin Core i7 9th Gen - (16 GB/512 GB SSD/Windows 10 Home/6 GB Graphics/NVIDIA GeForce RTX 2060',
    src: 'img/he3.jpg',
    price: 75000
},{
    title: 'ASUS TUF',
    description: 'ASUS TUF Gaming F15 Core i5 10th Gen - (8 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce GTX GTX 1650',
    src: 'img/he4.jpg',
    price: 60000
}
]


// SHOP LIST ITEMS ITERATION ==============

let div = document.querySelector('#append')
let cartItems = [];
for(let i=0;i<laptops.length;i++){
    let div1 = document.createElement('div')
    let div2 = document.createElement('div')
    let img = document.createElement('img')
    let div3 = document.createElement('div')
    let h5 = document.createElement('h5')
    let p = document.createElement('p')
    let a = document.createElement('a')
    let button = document.createElement('button')
    let obj = laptops[i]
    div1.className = 'col-md-3 col-sm-6'
    div2.className = 'card'
    div2.style.width = '18rem'
    div1.appendChild(div2)
    img.src = obj.src
    img.className = 'card-img-top'
    div2.appendChild(img)
    div3.className = 'card-body'
    div2.appendChild(div3)
    h5.className = 'card-title'
    h5.textContent = obj.title
    div3.appendChild(h5)
    p.className = 'class-text'
    div3.appendChild(p)
    a.textContent = obj.description
    a.setAttribute("href", "")
    p.appendChild(a)
    button.className = 'btn btn-primary itemIncrement'
    button.textContent = 'Add to Cart'
    button.addEventListener('click',()=>{
      cartItems.push(obj)
      console.log(cartItems);
    })
div3.appendChild(button)
div.appendChild(div1) 
}

// CART LIST ITEMS===============

let cartItemAppend = document.querySelector('#cartItemAppend')
for(let i =0;i<cartItems.length;i++){
    let td1 = document.createElement('td')
    let td2 = document.createElement('td')
}







let value = 0;
itemIncrement.forEach(element =>{
    element.addEventListener('click', ()=>{
    value++
    lapCartIncrement.textContent = value;
    lapCartIncrement.style.fontWeight = 'bold'
         })
})

let value1 = 1;
button1Plus.addEventListener('click',()=>{
    value1++;
    display1.textContent = value1;
})