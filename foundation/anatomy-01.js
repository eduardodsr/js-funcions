/* Seção 2: Fundamentos - Anatomia de uma funçao #01 */

// Function declaration

// Ex1 - Função que não recebe parametro de entrada e não retorna nada.
function sayHello() {
    console.log('Hello!');  
}

sayHello(); // Hello!

// Ex2 - Função que recebe parametro de entrada e não retorna nada.

function sayHelloTo(name) {
    
    console.log(`Hello ${name}!`); // console.log('Hello ' + name + '!');
}

sayHelloTo('Eduardo'); // Hello Eduardo!

// sayHelloTo(); // Hello undefined!


// Ex3 - Função que recebe um parametro de entrada e retorna um valor.

function returnHi() {
    return 'Hi';
}
const greeting = returnHi();  // var, let or const  
console.log(greeting);  // Hi


// Ex4 - Função que recebe um parametro de entrada e retorna um valor.

function returnHiTo(name) {
    return `Hi ${name}!`;
}
console.log(returnHiTo('John Travolta'))
