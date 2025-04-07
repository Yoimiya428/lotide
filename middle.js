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

const middle = function(array) {
  let middleArray = [];
  if (array.length % 2 === 0 && array.length > 2) {
    middleArray.push(array[array.length/2 - 1]);
    middleArray.push(array[array.length/2]);
  } else if (array.length % 2 !== 0 && array.length > 2) {
    middleArray.push(array[Math.floor(array.length/2)]);
  } 
  console.log(middleArray);
}

// TEST CODE
middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]
middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]
