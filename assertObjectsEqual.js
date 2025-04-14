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
