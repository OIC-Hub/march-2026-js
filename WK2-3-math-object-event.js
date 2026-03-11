console.log(Math.E);
console.log(Math.PI);
console.log(Math.LOG10E);
console.log(Math.LN2);
console.log(Math.SQRT2);
console.log(Math.SQRT1_2);
console.log(Math.sqrt(16));
console.log(Math.abs(2));
console.log(Math.abs(-6));
console.log(Math.ceil(3.4));
console.log(Math.floor(3.6));
console.log(Math.round(3.5));
console.log(Math.round(3.2));
console.log(Math.max(1, -1, 2, 5));
console.log(Math.min(1, -1, -2, 5));
console.log(Math.pow(2, 5));
console.log(Math.random());
console.log(Math.floor(Math.random() * 10) + 1);

console.log(Math.floor(Math.random() * 11) + 10);

function generateRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function generateRandom(min, max){
//     let minNum = Math.min(min, max);
//     let maxNum = Math.max(min, max);

//     return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
// }


console.log(generateRandom(111, 999));

function mouseOverElem() {
    console.log("Yes");
    
    let greetingElem = document.querySelector('#greeting');
    greetingElem.style.color = "red";
    // greetingElem.style.fontSize = "30px";
}

function mouseOutElem() {
    let greetingElem = document.querySelector('#greeting');
    greetingElem.style.color = "black";
    greetingElem.style.fontSize = "16px";
}

function mouseDownElem(elem){
    alert(elem.innerHTML)
}

function keyDownElem(elem){
    console.log(elem.value);
}

function keyUpElem(elem){
    elem.style.textTransform = "uppercase";
    console.log(elem.value); 
}

function keyInputElem(elem){
    console.log(elem.value); 
}

function keyChangeElem(elem){
    console.log(elem.value); 
}



