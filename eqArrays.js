// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`Assertion Failed: ${actual} !== ${expected}`);
    }
  };
  
  // TEST CODE
  //assertEqual("Lighthouse Labs", "Bootcamp");
  //assertEqual(1,1);

const eqArrays = (arr1, arr2) => {
    return arr1.toString() === arr2.toString();
} 



console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false 

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
