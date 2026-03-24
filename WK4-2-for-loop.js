let num = document.querySelector('#num');
for(let i = 1; i <= 10; i++){
    console.log(i);
    num.innerHTML += `${i}<br>`;
}

let ints = document.getElementById('ints');
for (let i = 1; i <= 100; i++) {
    if(i % 2 === 1){
        ints.innerHTML += `${i} is odd<br>`;
    } else {
        ints.innerHTML += `${i} is even<br>`;
    }   
}

let sum = 0;
for(let i = 1; i <= 10; i++){
    sum += i;
}

console.log(sum);

const arr1 = [12, 13, 56, 98, 90];
let sum1 = 0;
for(let i = 0; i < arr1.length; i++){
    // console.log(i);
    console.log(arr1[i]);
    sum1 += arr1[i];
    
}

console.log(sum1);

let multTable = document.querySelector('#mult-table');
for(let i = 1; i <= 12; i++){
    for(let j = 1; j <= 12; j++){
        multTable.innerHTML += `${i} x ${j} = ${i * j}<br>`
    }
    multTable.innerHTML += "---------------<br>";
}

for(let i = 1; i <= 5; i++){
    console.log(i);
    if(i === 3){
        break;
    }
    
}

for(let i = 1; i <= 5; i++){
    if(i === 3){
        continue;
    }
    console.log(i);
    
}

function isPrime(num){
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}

console.log(isPrime(29));

const startTime = performance.now();
for(let i = 2; i <= 100; i++){
    if(isPrime(i)){
        console.log(`${i} is prime`);
    }
}
const endTime = performance.now();
const elapsedTime = endTime - startTime;
console.log(`Loop run time: ${elapsedTime} milliseconds`);