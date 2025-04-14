const eqObjects = require('./eqObjects');
const inspect = require('util').inspect;

const assertObjectsEqual = function(actual, expected) {
  const equalOrNot = eqObjects(actual, expected);

  if (equalOrNot) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;

const object1 = { a: '1', b: 2 };
const object2 = { b: 2, a: '1' };
assertObjectsEqual(object1, object2); // => true