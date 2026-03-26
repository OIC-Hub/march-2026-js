const arr1 = [11, 56, 98, 45];

let someCheck = arr1.some(function(value, index, array){
    // console.log(value);
    // console.log(index);
    // console.log(array);
    return value > 50;
});

console.log(someCheck);

let arr2 = [
    {
        name: "Wasiu",
        balance: 10,
    },
    {
        name: "Tunde",
        balance: 0,
    },
    {
        name: "Tafa",
        balance: 45,
    },
    {
        name: "Segun",
        balance: 100,
    },
    {
        name: "Owolabi",
        balance: 0,
    },
    {
        name: "Sikiru",
        balance: 10,
    }
];

let debtors = arr2.some(function(value, index, array){
    // console.log(value);
    return value.balance > 0;
});
console.log(debtors);

let everyCheck = arr1.every(function(value){
    return value > 50;
});

console.log(everyCheck);

let debtors2 = arr2.every(function(value, index, array){
    // console.log(value);
    return value.balance > 0;
});
console.log(debtors2);

const arr3 = [11, 56, 98, 45, 20];
let findCheck = arr3.find(function(value, index, array){
    return value > 40;
});

console.log(findCheck);

let filterCheck = arr3.filter(function(value, index, array){
    return value > 40;
});

console.log(filterCheck);

let reduceCheck = arr3.reduce(function(total, value, index, array){
    return total + value;
}, 0);

console.log(reduceCheck);

let people = [
    {
        name: "Niyi Tejumola",
        id: '001',
        image: 'man.jpg',
    },
    {
        name: "Faridat Abefe",
        id: '002',
        image: 'woman.jpg',
    },
    {
        name: "Augustine Ajanlekoko",
        id: '003',
        image: 'man.jpg',
    },
    {
        name: "Idris Osowande",
        id: '004',
        image: 'man.jpg',
    },
    {
        name: "Israel Jagunlabi",
        id: '005',
        image: 'man.jpg',
    },
    {
        name: "Luqman Ogunbiyi",
        id: '006',
        image: 'man.jpg',
    },
    {
        name: "Zainab Akinwande",
        id: '007',
        image: 'woman.jpg',
    }
];

let peopleContainer = document.querySelector('#people');
people.forEach(function(value, index, array){
    peopleContainer.innerHTML +=
    `
    <div class="idCard">
        <img src="${value.image}">
        <p>${value.name}</p>
        <p>${value.id}</p>
    </div>
    `;
});

let people2Container = document.querySelector('#people2');

people2Container.innerHTML = people.map(function(value, index, array){
    return `
    <div class="idCard">
        <img src="${value.image}">
        <p>${value.name}</p>
        <p>${value.id}</p>
    </div>
    `;
}).join('');

let searcForm = document.querySelector('#searchForm');

searcForm.addEventListener('submit', function(e){
    e.preventDefault();
    let searchInput = document.querySelector('#search').value;

    let filterCheck = people.filter(function(value, index, array){
        return value.name.toLowerCase().includes(searchInput.toLowerCase());
    });

    console.log(filterCheck);

    peopleContainer.innerHTML = filterCheck.map(function(value, index, array){
        return `
        <div class="idCard">
            <img src="${value.image}">
            <p>${value.name}</p>
            <p>${value.id}</p>
        </div>
        `;
    }).join('');
    
})

function getPeople(myarray){
    return myarray.map(function(value, index, array){
        return `
        <div class="idCard">
            <img src="${value.image}">
            <p>${value.name}</p>
            <p>${value.id}</p>
        </div>
        `;
    }).join('')
}