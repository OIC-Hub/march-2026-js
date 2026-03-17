let s1 = "I am going to school";
// split returns an array
console.log(s1.split(" "));
console.log(s1.split("to"));
console.log(s1.split(""));
console.log(s1.split("egg"));

console.log(s1.toUpperCase());
console.log(s1.toLowerCase());

let s2 = "    He is going to school         ";
console.log(s2.length);
let tr1 = s2.trim();
console.log(tr1.length);

let tr2 = s2.trimStart();
console.log(tr2.length);

let tr3 = s2.trimEnd();
console.log(tr3.length);

let num1 = 31;
// to convert a number to string, use toString() method
console.log(num1.toString().padStart(4, 0));
console.log(num1.toString().padEnd(5, 0));

let num2 = 213567788;
console.log(num2.toString().padEnd(5, 0));

let s3 = "2";
console.log(s3.repeat(3));





