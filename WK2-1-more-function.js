function sum(a, b){
    let addition = a + b;
    return addition;
}

// let num1 = prompt("Enter the first number:");
// let num2 = prompt("Enter the second number");

// let mySum = sum(Number(num1), Number(num2));
// if you don't want to use Number(), you can use parseFloat
// console.log(mySum);

function convertToNaira(kobo){
    return kobo / 100;
}

// document.getElementById('myform').addEventListener('submit', function(e){
//     e.preventDefault();
//     let kobo =  Number(document.querySelector('#kobo').value);

//     let result = convertToNaira(kobo);

//     document.getElementById('result').innerHTML = `The conversion of ${kobo.toLocaleString()} Kobo to Naira is ${result.toLocaleString()} Naira`;
// });

// document.forms['myform'].addEventListener('submit', function(e){
//     e.preventDefault();
//     let kobo =  Number(document.querySelector('#kobo').value);

//     let result = convertToNaira(kobo);

//     document.getElementById('result').innerHTML = `The conversion of ${kobo.toLocaleString()} Kobo to Naira is ${result.toLocaleString()} Naira`;
// });

let myFormElem = document.forms['myform'];
myFormElem.addEventListener('submit', function(e){
    e.preventDefault();
    let kobo =  Number(myFormElem['kobo'].value);

    let result = convertToNaira(kobo);

    document.getElementById('result').innerHTML = `The conversion of ${kobo.toLocaleString()} Kobo to Naira is ${result.toLocaleString()} Naira`;
});



document.querySelector('#google').addEventListener('click', function(event){
    event.preventDefault();
})





