const middle = function(array) {
  let middleArray = [];
  if (array.length % 2 === 0 && array.length > 2) {
    middleArray.push(array.length/2);
    middleArray.push(array.length/2 + 1);
  } else if (array.length % 2 !== 0 && array.length > 2) {
    middleArray.push(Math.round(array.length/2));
  } else if (array.length <= 2) {

  }
  console.log(middleArray);
}

// TEST CODE
middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]
middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]
