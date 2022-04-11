/* Exercise 1:
--------------
Write a JS program to check two numbers and return true if one of the numbers is 100 or if the sum of the two numbers is 100
*/

const isEqualTo100 = (a, b) => a === 100 || b === 100 || (a + b) === 100;

/*or we can also write it like this:
function isEqualTo100(a, b){
    if(a === 100 || b === 100 || (a+b) === 100){
        return true
    }
}
*/

console.log(isEqualTo100(100, 0));
console.log(isEqualTo100(0, 100));
console.log(isEqualTo100(50, 50));
console.log(isEqualTo100(30, 70));
console.log(isEqualTo100(20, 70));