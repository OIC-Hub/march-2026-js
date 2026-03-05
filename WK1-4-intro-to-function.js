function greeting(){
    alert("Good afternoon");
}

sum(2, 5);
sum(12, 5);
sum(2, 4);
sum(12, 15);
sum(22, 5);

function sum(num1, num2){
    let addition = num1 + num2;
    console.log(addition);   
}

let a = 5;
console.log(a);

{
    a = 7;
    console.log(a);
    
}
console.log(a);

function product(a, b){
    let multiply = a * b;
    return multiply;
}

let myProduct = product(12, 2);
console.log(myProduct);

let output = document.getElementById('output');
function add1(){
    output.value += 1;
}

function add2(){
    output.value += 2;
}

function add3(){
    output.value += 3;
}

let output2 = document.getElementById('output2');

function addInput(input){
    output2.value += input;
}

console.log(eval(1 + 2 + 3));
