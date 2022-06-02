const lapCartIncrement = document.getElementById('lapCartIncrement')
const itemIncrement = document.querySelectorAll('.itemIncrement')
console.log(itemIncrement);

let value = 0;
itemIncrement.forEach(element =>{
    element.addEventListener('click', ()=>{
    value++
    lapCartIncrement.textContent = value;
    lapCartIncrement.style.fontWeight = 'bold'
         })
})
