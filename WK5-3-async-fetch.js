let productContainer = document.querySelector('#products');
let products = [];


async function fetchProducts(){
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
            return `
            <div class="eachProduct">
                <img src="${value.images[0]}">
                <p>${value.title}</p>
                <p>$${value.price}</p>
                <button>Add to Cart</button>
            </div>
            `
        }).join('');  

    } catch(error){
        console.log(error);
        // alert("Error fetching product")
        productContainer.innerHTML = "Error fetching product"
        productContainer.style.color = "red"
    } finally {
        console.log('Fetching done');
    }
}

fetchProducts();