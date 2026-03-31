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

let productContainer = document.querySelector('#products');
let products = [];
fetch(url, fetchData)
// .then(response => response.json())
.then(function(response){
    // console.log(response);
    return response.json();
})
.then(function(data){
    products = data.products;
    console.log(products);
    productContainer.innerHTML = products.map(function(value, index, array){
        return `
        <div class="eachProduct">
            <img src="${value.images[0]}">
            <p>${value.title}</p>
            <p>$${value.price}</p>
            <button>Add to Cart</button>
        </div>
        `
    }).join('');  
})
.catch(function(error){
    console.log(error);
    // alert("Error fetching product")
    productContainer.innerHTML = "Error fetching product"
    productContainer.style.color = "red"
})
.finally(function(){
    console.log('Fetching done');
    
});