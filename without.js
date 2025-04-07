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
