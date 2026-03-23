const myArr = ["Orange", "Banana", 2, "Ade", true];
console.log(myArr[0]);
console.log(myArr[10]);

myArr[1] = "Pineapple";
console.log(myArr[1]);

const products = [
    {
        id: 1,
        name: "Egg1",
        price: 20
    },
    {
        id: 2,
        name: "Egg2",
        price: 20
    },
    {
        id: 3,
        name: "Egg3",
        price: 20
    },
    {
        id: 4,
        name: "Egg4",
        price: 20
    }
];

console.log(products[2].name);
console.log(products[2]['price']);

console.log("Length", myArr.length);

console.log(Array.isArray(products));

const aa = 20;
console.log(Array.isArray(aa));

console.log(typeof products);

console.log(Object.keys(myArr));
console.log(Object.values(myArr));
console.log(Object.entries(myArr));

const myArr2 = [10, 23, 11, 23];
const myArr3 = myArr2.fill("xx");
// fill will modify the original array
console.log(myArr2);
console.log(myArr3);

const myArr4 = [12, 11, 87, 20];
const myArr5 = myArr4.join("++");
// join does not modify the original array
console.log(myArr4);
console.log(myArr5);

const myArr6 = ["Egg", "Banana", "Carrot"];
myArr6.push("Okro");
console.log(myArr6);
myArr6.push("Gizzard", "Pineapple", "Efo");
console.log(myArr6);

myArr6.pop();
console.log(myArr6);

// to get the element that was deleted, store it in a variable
let deleted = myArr6.pop();
console.log(deleted);
console.log(myArr6);

myArr6.unshift("Tuwo");
console.log(myArr6);
myArr6.unshift("Ewa", "Eba");
console.log(myArr6);

myArr6.shift();
console.log(myArr6);

myArr6.splice(2, 1, "Ade");
console.log(myArr6);

// slice does not modify the original array
const myArr7 = myArr6.slice(2, 4);
console.log(myArr7);
console.log(myArr6);

console.log(myArr6.includes("Jagunlabi"));
console.log(myArr6.includes("Eba"));

const myArr8 = [2, 1, 6];
const myArr9 = myArr8.concat([2, 5, 6], ["Ade", "Wale"]);
console.log(myArr9);