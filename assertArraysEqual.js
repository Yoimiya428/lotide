const eqArrays = (arr1, arr2) => {
    return arr1.toString() === arr2.toString();
} 

const assertEqual1 = function(actual, expected) {
  if (eqArrays(actual,expected) === true) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual1(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
