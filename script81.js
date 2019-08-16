// function isEven(value) {

//     if(value%2 == 0) {
//         return true;
//     } else {
//             return false;
//     }   
// }

// isEven(2)

 

// function factorial(value) {
//     return value * factorial(value-1);

// }

// console.log(factorial(3));

function kebabToSnake(string) {
    var newString = string.replace(/-/ , "_");
    return newString;
}

console.log(kebabToSnake ("hello-world"))