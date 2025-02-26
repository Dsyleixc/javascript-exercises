const sumAll = function (start, end) {
   // Check if inputs are valid numbers
   if (
      typeof start !== 'number' ||
      typeof end !== 'number' ||
      !Number.isInteger(start) ||
      !Number.isInteger(end) ||
      start < 0 ||
      end < 0
   ) {
      return 'ERROR';
   }

   // Determine which is smaller/larger
   let smallNum = Math.min(start, end);
   let largeNum = Math.max(start, end);

   // Calculate sum
   let sum = 0;
   for (let i = smallNum; i <= largeNum; i++) {
      sum += i;
   }

   return sum;
};

// Do not edit below this line
module.exports = sumAll;
