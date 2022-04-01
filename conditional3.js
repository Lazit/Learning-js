const age = parseInt(prompt("how old are you?"));

console.log(isNaN());
//isNaN returns boolean.

//make it more conditional

if (isNaN(age)|| age<0) {
    console.log("please type a real positive number");
} else if(age<18){
    console.log("You are too young.");
}
else if(age >= 18 && age <= 50){
    console.log("you can drink");
}
else {
    console.log("you should't drink");
}


if ((a && b) || (c && d)) {
    
}