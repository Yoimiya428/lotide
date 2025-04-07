const without = (source, itemsToRemove) =>{
  let outputArray = [];

  for (i in source){
    if (itemsToRemove.includes(i) === false){
      outputArray.push(i);
    }
  }

}

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); 
