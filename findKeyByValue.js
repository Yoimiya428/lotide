const assertEqual = require('./assertEqual');

const findKeyByValue = function(obj, showName){
  for (let i in obj) {
    if (obj[i] === showName) {
        return i;
    }
    
    
  }
  return undefined;
};

module.exports = findKeyByValue;

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};



assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);