const assertEqual = require('./assertEqual');
const eqArrays = require("./eqArrays");

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {

  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  let arr1 = [];
  let arr2 = [];

  for (let key of keys1) {
    arr1.push(object1[key]);
    arr2.push(object2[key]);
  }

  eqArrays(arr1,arr2);
  //assertEqual(arr1,arr2);

};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject, anotherShirtObject); // => true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject, longSleeveShirtObject); // => false