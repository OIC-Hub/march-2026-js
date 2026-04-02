let carts = JSON.parse(localStorage.getItem('carts')) || [];

let cartsElem = document.querySelector('#carts');

cartsElem.innerHTML = carts.map(function(value, index, array){
    return `
    <div>
        <img src="${value.image}">
        <p>${value.name}</p>
        <p>${value.price}</p>
        <p>Qty: ${value.quantity}</p>
    </div>
    `
}).join('')