/* Anatomia de uma funçao #1 */

// Function declaration

function sayHello() {
    console.log('Hello!');  
}

sayHello(); // Hello!


function sayHelloTo(name) {
    // console.log('Hello ' + name + '!');
    console.log(`Hello ${name}!`);
}

sayHelloTo('Eduardo'); // Hello Eduardo!

// sayHelloTo(); // Hello undefined!


function returnHi() {
    return 'Hi';
}
// var greeting = returnHi(); 
// let greeting = returnHi(); 
const greeting = returnHi();  // var, let or const
console.log(greeting);  // Hi


function returnHiTo(name) {
    return `Hi ${name}!`;
}
console.log(returnHiTo('John'))
