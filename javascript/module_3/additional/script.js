"use strict";

// --1.0--
// const checkNumberType = num => {
//   const g = num % 2;

//   if (g === 0) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// };

// console.log(checkNumberType(2));
// console.log(checkNumberType(46));
// console.log(checkNumberType(3));
// console.log(checkNumberType(17));

// --1.1--
// const checkNumberType = function(num) {
//   const g = num % 2;

//   if (g === 0) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// };
// console.log(checkNumberType(2));
// console.log(checkNumberType(46));
// console.log(checkNumberType(3));
// console.log(checkNumberType(17));

// --1.2--
// function checkNumberType(num) {
//   const g = num % 2;

//   if (g === 0) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// }
// console.log(checkNumberType(2));
// console.log(checkNumberType(46));
// console.log(checkNumberType(3));
// console.log(checkNumberType(17));
//

//
// --2--
// function formatString(str) {
//   const maxLong = 40;
//   const long = str.length <= maxLong;

//   console.log(long);

//   if (long) {
//     return str;
//   } else {
//     return (str = str.slice(0, 39) + "...");
//   }
// }
// console.log(formatString("Curabitur ligula sapien, tincidunt non.")); // вернется оригинальная строка
// console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis.")); // вернется форматированная строка
// console.log(formatString("Curabitur ligula sapien.")); // вернется оригинальная строка
// console.log(
//   formatString(
//     "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
//   )
// ); // вернется форматированная строка
//

//
// --3--
// const checkForSpam = str => {
//   const findWord = "spam";
//   const findWord1 = "sale";

//   str = str.toLowerCase();
//   console.log(str);

//   let isFind;
//   return (isFind = str.includes(findWord) || str.includes(findWord1));
// };
// console.log(checkForSpam("Latest technology news")); // false
// console.log(checkForSpam("JavaScript weekly newsletter")); // false
// console.log(checkForSpam("Get best sale offers now!")); // true
// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
//

//
// --4--

