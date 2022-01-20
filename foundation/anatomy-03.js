/* Seção 2: Fundamentos - Anatomia de uma funçao #03 */

// Function expression

const increment1 = function(n) {
    return n + 1;
}

// Arrow function is always anonymous

const increment2 = (n) => {
    return n + 1;
}

const increment3 = n => {
    return n + 1;
}

const increment4 = n => n + 1; 

console.log(increment1(1)); // 2
console.log(increment2(5)); // 6
console.log(increment3(25)); // 26
console.log(increment4(99)); // 100


const sum = (a, b) => a + b;
console.log(sum(3, 8)); // 11