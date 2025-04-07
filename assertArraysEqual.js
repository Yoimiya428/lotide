const eqArrays = (arr1, arr2) => {
    return arr1.toString() === arr2.toString();
} 

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual,expected)) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
