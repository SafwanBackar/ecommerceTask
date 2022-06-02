const lapCartIncrement = document.getElementById('lapCartIncrement')
const itemIncrement = document.querySelectorAll('.itemIncrement')
const display1 = document.getElementById('display1')
const button1Plus = document.getElementById('button1Plus')


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