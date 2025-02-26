const getTheTitles = function (array) {
   const titles = [];

   for (const obj of array) {
      titles.push(Object.values(obj)[0]);
   }

   return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
