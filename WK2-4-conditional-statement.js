let age = 12;
if(age >= 18){
    console.log("You are an adult and can vote.");
}


let input = 35
if(input >= 30){
    console.log("You are a youth.");
} else {
    console.log("You are not a youth");
}

let score = 5;
let grade = "";

if(score >= 70 && score <= 100){
    grade = "A";
} else if(score >= 60 && score <= 69){
    grade = "B";
} else if(score >= 50 && score <= 59){
    grade = "C";
} else if(score >= 45 && score <= 49){
    grade = "D";
} else if(score >= 40 && score <= 44){
    grade = "E";
} else if(score >= 0 && score <= 39){
    grade = "F";
} else {
    grade = "Invalid score";
}

console.log(grade);

let gender = "female";
switch (gender) {
    case "male":
        console.log("You are a male");
        break;
    case "female":
        console.log("You are a female");
        break;
    default:
        console.log("Unknown gender");
        break;
}


let score2 = 12;
let grade2 = "";
switch(true){
    case score2 >= 70 && score2 <= 100:
        grade2 = "A";
        break;
    case score2 >= 60 && score2 <= 69:
        grade2 = "B";
        break;
    case score2 >= 50 && score2 <= 59:
        grade2 = "C";
        break;
    case score2 >= 45 && score2 <= 49:
        grade2 = "D";
        break;
    case score2 >= 40 && score2 <= 44:
        grade2 = "E";
        break;
    case score2 >= 0 && score2 <= 39:
        grade2 = "F";
        break;
    default:
        grade2 = "Invalid score";
        break;
}
console.log(grade2);
