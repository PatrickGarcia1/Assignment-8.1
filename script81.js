// function isEven(num) {
//     if (num % 2 === 0) {
//         console.log("True");
//     } else {
//         console.log("False");
//     }
// }

// isEven(9)

// isEven(10)

// function factorial(x) {

//     if (x === 0) {
//         return 1;
//     }
//     return x * factorial(x - 1);

// }
// console.log(factorial(5));

function kebabToSnake(str) {
    //replace all dashes with
    var myString = str.replace(/-/g, "_");
    //return str
    console.log(myString);
    //try with: "this - is -a - ---test";
}

kebabToSnake("this - is - a - -- - test");