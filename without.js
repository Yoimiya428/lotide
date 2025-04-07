const eqArrays = (arr1, arr2) => {
  if (arr1.length === arr2.length){
    for (i in arr1) {
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

const without = (source, itemsToRemove) =>{
  let outputArray = [];

  for (i of source){
    if (itemsToRemove.includes(i) === false){
      outputArray.push(i);
    }
  }
  return outputArray;
}

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
