/* Seção 2: Fundamentos - Parametros */

// Function Declaration

function logParams (a, b, c) {
    console.log(a, b, c);
}

logParams(1, 2, 3);         // 1 2 3

logParams(1, 2, 3, 4);      // 1 2 3    // ignore 4
logParams(1, 2, 3, 4, 5);   // 1 2 3    // ignore 4 and 5

logParams(1, 2);            // 1 2 undefined
logParams(1);               // 1 undefined undefined

let x = logParams(1, 2);
console.log(x);             // undefined

logParams();                // undefined undefined undefined


function defaultParams(a, b, c = 0) {
    console.log(a, b, c);
}
defaultParams(7, 8, 9);     // 7 8 9
defaultParams(7, 8);        // 7 8 0

defaultParams(7);           // 7 undefined 0


// spread / rest -> essa função consegue receber uma qtd variável de parametros
function logsNums(...nums) {
    // console.log(Array.isArray(nums)) // true
    for(let n of nums) {
        console.log(n);
    }
}
logsNums(1, 2, 3, 4, 5);     
logsNums([ 1, 2, 3, 4, 5 ]);     // [ 1, 2, 3, 4, 5 ]


// spread / rest (simplify)
function logsNumsSimplify(...nums) {
        console.log(nums);
}
logsNumsSimplify(1, 2, 3, 4);     // [ 1, 2, 3, 4 ]


// spread / rest
function sumAll(...nums) {
    let total = 0;
    for(let n of nums) {
        total += n;
    }
    return total;
}
console.log(sumAll(1, 2, 3));       // 6
console.log(sumAll(1, 2, 3, 4, 5)); // 15