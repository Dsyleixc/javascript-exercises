const leapYears = function (year) {
   // A year is a leap year if:
   // - It's divisible by 4 AND
   // - Either it's NOT divisible by 100 OR it's divisible by 400
   return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};
// Do not edit below this line
module.exports = leapYears;
