const eqArrays = (arr1, arr2) => {
  if (arr1.length === arr2.length){
    for (i of arr1) {
      return arr1[i] === arr2[i];
    }
  }
}; 

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual,expected)) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
