/* 
    Higher-Order-Function
    ---------------------
    Functions that operate on other functions,
    either by taking them as arguments or by
    returning them, are called higher-order functions.
*/

// é possível passar uma função com parametro para outra função

function run(fn) {
    return `Result: ${fn()}`
}

function sayHello() {
    console.log('Hello!!!');
}

// run(sayHello()); // Error

run(sayHello); // Hello!!! 

run(function() {
    console.log('Run!!!'); // Run!!! 
})

const result = run( Math.random );
console.log(result);