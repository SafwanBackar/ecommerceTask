const lapCartIncrement = document.getElementById('lapCartIncrement')
const display1 = document.getElementById('display1')
const button1Plus = document.getElementById('button1Plus')
const searchBtn = document.getElementById('searchBtn')
const checkoutBtn = document.getElementById('checkoutBtn')
const totalAmount = document.getElementById('totalAmount')
let total = 0

let laptops = [{
    id:1,
    title: 'Predator Helios 300',
    description: 'Helios 300 Octa Core i7 10th Gen - (16 GB/1 TB HDD/256 GB SSD/Windows 10 Home/6 GB Graphics/NVIDIA GeForce RTX 3060',
    src: 'img/he1.jpg',
    price: 70000,
    initialPrice: 70000,

    count: 1
},{
    id:2,
    title: 'Lenovo Legion 5',
    description: 'Lenovo Legion 5 Ryzen 5 Hexa Core 5600H - (8 GB/512 GB SSD/Windows 10 Home/4 GB Graphics/NVIDIA GeForce GTX 1650',
    src: 'img/he2.jpg',
    price: 90000,
    initialPrice: 90000,

    count: 1
},{
    id:3,
    title: 'MSI GF65',
    description:  'MSI GF65 Thin Core i7 9th Gen - (16 GB/512 GB SSD/Windows 10 Home/6 GB Graphics/NVIDIA GeForce RTX 2060',
    src: 'img/he3.jpg',
    price: 75000,
    initialPrice: 75000,

    count: 1
},{
    id:4,
    title: 'ASUS TUF',
    description: 'ASUS TUF Gaming F15 Core i5 10th Gen - (8 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce GTX GTX 1650',
    src: 'img/he4.jpg',
    price: 60000,
    initialPrice: 60000,

    count: 1
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
      let foundIndex = cartItems.findIndex((value)=>{
        return value.id === obj.id
      })
      if(foundIndex === -1){
          cartItems.push(obj)
          total+=obj.price
          totalAmount.textContent = total
      }else{
        cartItems[foundIndex].count += 1;
        let foundIndex1 = laptops.findIndex((value)=>{
            return value.id === obj.id
        })
        let initialPrice = laptops[foundIndex1].initialPrice          
        cartItems[foundIndex].price = initialPrice *  cartItems[foundIndex].count 
        total += initialPrice
        totalAmount.textContent = total
      }
      lapCartIncrement.textContent = cartItems.length ;
      lapCartIncrement.style.fontWeight = 'bold'

    })    
div3.appendChild(button)
div.appendChild(div1) 
}


checkoutBtn.addEventListener('click', ()=>{
    makeTable()
})

function makeTable(){
    let cartItemAppend = document.querySelector('#cartItemAppend')
    cartItemAppend.innerHTML = '';
    for(let i =0;i<cartItems.length;i++){
    let tr = document.createElement('tr')
    let td1 = document.createElement('td')
    let td2 = document.createElement('td')
    let td3 = document.createElement('td')
    let td4 = document.createElement('td')
    let td5 = document.createElement('td')
    let td6 = document.createElement('td')
    let button1 = document.createElement('button')
    let button2 = document.createElement('button')
    let button3 = document.createElement('button')
    let icon = document.createElement('i')
    let cartObjects = cartItems[i]
    td1.textContent = cartObjects.title
    td2.textContent = cartObjects.price
    td3.style.textAlign = 'center'
    td3.textContent = cartObjects.count
    td3.style.fontWeight = 'bold'
    button1.textContent = '+'
    button2.textContent = '-'
    button3.textContent = 'X'
    icon.className = 'fa-solid fa-circle-trash'
    button3.appendChild(icon)
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    td4.appendChild(button1)
    td5.appendChild(button2)
    td6.appendChild(button3)
    tr.appendChild(td4)
    tr.appendChild(td5)
    tr.appendChild(td6)
    cartItemAppend.appendChild(tr)
    button1.addEventListener('click',()=>{
        let foundIndex = cartItems.findIndex((value)=>{
            return value.id === cartObjects.id
          })
        let foundIndex1 = laptops.findIndex((value)=>{
            return value.id === cartObjects.id
        })
          cartItems[foundIndex].count += 1;
          let initialPrice = laptops[foundIndex1].initialPrice          
          cartItems[foundIndex].price = initialPrice *  cartItems[foundIndex].count
          total += initialPrice
          totalAmount.textContent = total
          makeTable()
    })
    button2.addEventListener('click', ()=>{
        let foundIndex = cartItems.findIndex((value)=>{
            return value.id === cartObjects.id
          })
          if(cartItems[foundIndex].count === 1){
              return
          }
          let foundIndex1 = laptops.findIndex((value)=>{
            return value.id === cartObjects.id
        })
            cartItems[foundIndex].count --
            let initialPrice = laptops[foundIndex1].initialPrice          
            cartItems[foundIndex].price -=  initialPrice
            total -= initialPrice
            totalAmount.textContent = total
            makeTable()          

    })
    button3.addEventListener('click',()=>{
        cartItems = cartItems.filter((value)=>{
            return value.id !== cartObjects.id
        })
        makeTable()
        lapCartIncrement.textContent = cartItems.length;
        let foundIndex1 = laptops.findIndex((value)=>{
            return value.id === cartObjects.id
        })
        let initialPrice = laptops[foundIndex1].initialPrice          
        total-= initialPrice*cartObjects.count
        totalAmount.textContent = total

       })
    }
}








