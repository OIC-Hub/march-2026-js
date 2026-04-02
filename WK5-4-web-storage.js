localStorage.setItem('name', 'Oga Niyi');
localStorage.setItem('age', 11);

const scores = [12, 11, 15];
localStorage.setItem('scores', JSON.stringify(scores));

const person = {
    name: "FT",
    age: 11,
    course: "Applied Mechanics"
};

localStorage.setItem('myObj', JSON.stringify(person));

console.log(localStorage.getItem('name'));
console.log(localStorage.getItem('age'));
console.log(JSON.parse(localStorage.getItem('scores')));
console.log(JSON.parse(localStorage.getItem('myObj')));
console.log(JSON.parse(localStorage.getItem('myObj'))['age']);

console.log(localStorage.length);

localStorage.removeItem('age')

console.log(localStorage.length);

// localStorage.clear();

let products = [];
let productContainer = document.querySelector('#products');

async function getProducts() {
    try{
        const url = 'https://dummyjson.com/products?limit=50&sortBy=title&order=asc';
        const fetchData = {
            method: "GET",
            // headers:  {
            //     Authorization: "Bearer dhdjhd",
            //     Accept: 'application/json',
            //     'Content-Type': 'application/json'
            // },
            // body: JSON.stringify({

            // })
        };

        const response = await fetch(url, fetchData);
        const data = await response.json();

        console.log(data);
        products = data.products;

        console.log(products);

        productContainer.innerHTML = products.map(function(value, index, array){
            let id = value.id;
            let name = value.title;
            let price = value.price;
            let image = value.images[0];

            return `
            <div class="eachProduct">
                <img src="${value.images[0]}">
                <p>${value.title}</p>
                <p>$${value.price}</p>
                <button onclick="addToCart(${id}, '${name}', ${price}, '${image}')">Add to Cart</button>
            </div>
            `
        }).join('');
        
    } catch(error){

    }
}

getProducts();

function addToCart(id, name, price, image){
    // alert("Product added");
    // console.log(price);
    let carts = JSON.parse(localStorage.getItem('carts')) || [];

    let qty = 1;

    let checkProd = carts.find(function(value, index, array){
        return value.id === id;
    });

    if(checkProd){
        qty = checkProd.quantity + 1;
        let prodIndex = carts.findIndex(function(value, index, array){
            return value.id === id;
        });
        carts[prodIndex].quantity = qty;
    } else {
        carts.push({
            id: id,
            name: name,
            price: price,
            image: image,
            quantity: qty
        });
    }
    localStorage.setItem('carts', JSON.stringify(carts));
    alert("Item added to cart");

}