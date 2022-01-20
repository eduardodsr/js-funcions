/* Seção 2: Fundamentos - Anatomia de uma funçao #02 */

// Anonymous function

(function (a, b, c) {
    return a + b + c;
});


// Function expression

const sum = function (a, b) {
    return a + b;
}
console.log(sum(4, 6)); // (4 + 6) = 10

const result = (sum(3, 6)); 
console.log(result); // (3 + 6) = 9

const anotherSum = sum;
console.log(anotherSum(5, 3)); // (5 + 3) = 8