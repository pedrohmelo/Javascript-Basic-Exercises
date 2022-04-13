/*Exercise 9:
-------------
Write a JavaScript program that, given two values, find which of them is nearest to 100
*/

const closestTo100 = (a, b) => (100 - a) < (100 - b) ? a : b

console.log(closestTo100(10, 20))
console.log(closestTo100(99, 1))
console.log(closestTo100(101, 200))