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
  if (arr1.length === arr2.length){
    for (i of arr1) {
      return arr1[i] === arr2[i];
    }
  }
} 

console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false 

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
