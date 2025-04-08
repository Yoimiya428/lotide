// FUNCTION IMPLEMENTATION
const head = function(arr){
    if (arr.length === 0) {
        return undefined;}
    return arr[0];
};


// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const assertEqual = require("./assertEqual");

// assertEqual(head([]), undefined);
// assertEqual(head([5, 6, 7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
module.exports = head;
