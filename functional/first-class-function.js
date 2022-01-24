/* 
    First Class Function 
    --------------------
    A programming language is said to have 
    First-class functions when functions in that language are threated like any other variable 
*/

/* 
const sum = function(a, b) {
    return a + b;
}
const subtraction = function(a, b) {
    return a - b;
}
const divison = function(a, b) {
    return a / b;
}
const multiplication = function(a, b) {
    return a * b;
}
*/

const sum = (a, b) => a + b;

const subtraction = (a, b) => a - b;

const divison = (a, b) => a / b;

const multiplication = (a, b) => a * b;


console.log(sum(10, 20)); 

console.log(subtraction(30, 20)); 

console.log(divison(12, 6)); 

console.log(multiplication(6, 6)); 