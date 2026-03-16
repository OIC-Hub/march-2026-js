let s1 = "Hello, JS.";
console.log("Length is", s1.length);
console.log("Char At 4", s1.charAt(4));
console.log("Char Code At 4", s1.charCodeAt(4));

let s2 = "What happened?"
let s3 = s1.concat(" ", s2)
console.log(s3);

console.log("Index of e", s1.indexOf('e'));
console.log("Index of l", s1.indexOf('l'));
// Note: indexof is case sensitive
console.log("Index of JS", s1.indexOf('JS'));

// indexof returns -1 when it cannot find the element
console.log("Index of z", s1.indexOf('z'));


console.log("Last Index of e", s1.lastIndexOf('e'));
console.log("Last Index of l", s1.lastIndexOf('l'));

let s4 = "I am going to the market.";
console.log(s4.replace("going", "wenting"));
// replace does not modify the original string
console.log(s4);

console.log(s4.replace("markeT", "shop"));
// to make it case insensitive, you use regular expression (regex)
console.log(s4.replace(/marKET/i, "shop"));

// replace will only replace the first occurrence.
let s5 = "I am going to the market and to the mall.";
console.log(s5.replace("to", "in"));

// replaceAll replaces all occurrence
console.log(s5.replaceAll("to", "in"));

// to replace all occurrence with replace, use regex
console.log(s5.replace(/to/g, "in"));

let s6 = "Kunle is very stubborn and jovial";
let slice1 = s6.slice(3);
console.log(slice1);
let slice2 = s6.slice(3, 10);
console.log(slice2);

let slice3 = s6.slice(-5);
console.log(slice3);

let slice4 = s6.slice(-9, -4)
console.log(slice4);


let substring1 = s6.substring(3);
console.log(substring1);

let substring2 = s6.substring(3, 10);
console.log(substring2);

// substring does not accept negative values
let substring3 = s6.substring(-9, -4)
console.log(substring3);

let finalSentence = "I am very tired";
let substr1 = finalSentence.substr(0, 8);
console.log(substr1);







