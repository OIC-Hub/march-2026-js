let num = document.querySelector('#num');

let i = 1;
while(i <= 10){
    console.log(i);
    num.innerHTML += `${i}<br>`;
    i++;
}

const arr1 = [12, 13, 56, 98, 90];
let sum1 = 0;

let j = 0;
while(j < arr1.length){
    console.log(arr1[j]);
    sum1 += arr1[j];

    j++;
}

console.log("Sum is", sum1);

let k = 1;
while(true){
    if(k === 12){
        break;
    }
    console.log(k);
    k++;
}

let l = 10;
while(l >= 1){
    console.log(l);
    l--;
}

let m = 15;
do{
    console.log(m);
    m++;
} while(m <= 10);

const myObj = {
    name: "Oga Niyi",
    occupation: "Agbe",
    complexion: "chocolate caramel",
    level: 100
}

console.log(myObj.name);
console.log(myObj['complexion']);


for(let key in myObj){
    // console.log(key);
    console.log(myObj[key]);
}


const arr2 = [12, 13, 56, 98, 90];
let sum2 = 0;
for (let i of arr2) {
    // console.log(i);
    sum2 += i;
}

console.log(sum2);

let redColor = document.querySelectorAll('.red');
console.log(redColor);
for(let value of redColor){
    // console.log(value);
    value.style.color = "red";
    
}
