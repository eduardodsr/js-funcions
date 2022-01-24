/* 
    Higher-Order-Function
    ---------------------
    Functions that operate on other functions,
    either by taking them as arguments or by
    returning them, are called higher-order functions.
*/

// é possível retornar uma função a partir de uma outra função

// Curring

function finalPrice(tax) {

    return function(price) {

        return price * (1 + tax);
    }
}

const nycFinalPrice = finalPrice(0.0875);


console.log( nycFinalPrice(25.1) );
console.log( nycFinalPrice(21.7) );
console.log( nycFinalPrice(107.9) );