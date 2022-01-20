/* Seção 2: Fundamentos - Anatomia de uma funçao #04 */

// Anonymous function
(function (a, b, c) {
    console.log (a + b + c);
});

// IIFE - Immediately Invoked Function Expression
(function (a, b, c) {
    console.log(`Result: ${a + b + c}`);
})(1, 2, 3); 
// Result: (1 + 2 + 3) = 6


(function (){
    let x = 300;
    console.log(x);
})(); 
// 300


(() => {
    console.log('arrow #01');
})();
// arrow #01


(() => console.log('arrow #02'))();
// arrow #02