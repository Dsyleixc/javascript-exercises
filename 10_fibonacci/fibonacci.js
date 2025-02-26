const fibonacci = function (input) {
   let number = Number(input);

   if (number === 0) return 0;

   if (number < 1) return 'OOPS';

   let fibArray = [1, 1];

   for (let i = 1; i <= input; i++) {
      let sum = fibArray[i - 1] + fibArray[i];
      fibArray.push(sum);
   }

   return fibArray[input - 1];
};

// Do not edit below this line
module.exports = fibonacci;
