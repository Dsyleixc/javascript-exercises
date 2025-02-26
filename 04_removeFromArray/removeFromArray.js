const removeFromArray = function (inputArray, ...remove) {
   let array = inputArray;
   for (const item of remove) {
      while (array.includes(item)) {
         let index = array.indexOf(item);
         array.splice(index, 1);
      }
   }
   return array;
};

console.log(removeFromArray([1, 2, 3, 4], 3));

// Do not edit below this line
module.exports = removeFromArray;
