const person = {
    name: "Oga Niyi",
    age: 11,
    complexion: "dark",
    height: "150cm",
    dateOfBirth: function(){
        return 2025 - 11;
    }
}

person['age'] = 12;

console.log(person.name);
console.log(person.age);
console.log(person['complexion']);
console.log(person['height']);
console.log(person.dateOfBirth());


let today = new Date();
console.log(today);
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());

console.log(today.getDate());
console.log(today.getMonth());
console.log(today.getFullYear());

console.log(today.getDay());

console.log(`${today.getHours()}:${today.getMinutes()}`);

let fullname = new String("Sola");
console.log(fullname);





