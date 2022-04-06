const age = parseInt(prompt("how old are you?"));

console.log(isNaN());
//isNaN returns boolean.

//make it more conditional

if (isNaN(age)) {
    console.log("please type a number")
} else {
    console.log("Thank you for your time")
}
...