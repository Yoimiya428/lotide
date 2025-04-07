const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (string) {
  let countOfLetter = {};

  for (const i of string) {
    
    countOfLetter[i] = (countOfLetter[i] || 0) + 1;
  
  }
   return countOfLetter;
};

countLetters('LHL');
