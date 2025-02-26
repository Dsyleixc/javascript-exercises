const add = function (num1, num2) {
   return num1 + num2;
};

const subtract = function (num1, num2) {
   return num1 - num2;
};

const sum = function (array) {
   let sum = 0;
   for (const item of array) {
      sum += item;
   }
   return sum;
};

const multiply = function (array) {
   let sum = 1;
   for (const item of array) {
      sum *= item;
   }
   return sum;
};

const power = function (num1, num2) {
   return num1 ** num2;
};

const factorial = function (num) {
   let sum = 1;
   for (let i = 1; i <= num; i++) {
      sum *= i;
   }
   return sum;
};

// Do not edit below this line
module.exports = {
   add,
   subtract,
   sum,
   multiply,
   power,
   factorial,
};
