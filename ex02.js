/* Exercise 2:
--------------
Write a JavaScript program to get the extesion of a filename.
*/

const getFileExtension = (str) => str.slice(str.lastIndexOf('.'));

/* or we can also write like this:
function getFileExtension(str){
    return(
        str.slice(str.lastIndexOf('.'))
    )
}
*/

console.log(getFileExtension('index.html'))
console.log(getFileExtension('test.js'))
console.log(getFileExtension('index.html'))