const palindromes = function (string) {
   const stringOriginal = string;

   const stringTextOnly = stringOriginal
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '');

   let stringBackwards = '';

   const reverseString = function (string) {
      for (const item of stringTextOnly) {
         stringBackwards = item + stringBackwards;
      }
   };

   reverseString(string);

   return stringTextOnly === stringBackwards || false;
};

// Do not edit below this line
module.exports = palindromes;
