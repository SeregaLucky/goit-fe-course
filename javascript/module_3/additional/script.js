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
// const getPx = str => {
//   let hhh;
//   hhh = str !== Number(str);

//   console.log(hhh);

//   if (hhh) {
//     return parseFloat(str);
//   } else {
//     return null;
//   }
// };
// console.log(getPx("10px")); // true
// console.log(getPx("10.5")); // true
// console.log(getPx("0")); // true
// console.log(getPx(-1)); // null
// console.log(getPx(10)); // null
//

//
// --5--
// const findLongestWord = str => {
//   const strList = str.split(" ");
//   console.log(strList);

//   let item;
//   let word;
//   let eee = 0;

//   for (item of strList) {
//     if (item.length > eee) {
//       eee = item.length;
//       word = item;
//     }
//   }
//   return word;
// };

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'
// console.log(findLongestWord("Google do a roll")); // 'Google'
// console.log(findLongestWord("May the force be with you")); // 'force'

//
// --6--
// const findLargestNumber = numbers => {
//   let num = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     let number = numbers[i];

//     if (number > num) {
//       num = number;
//     }
//   }
//   return num;
// };
// console.log(findLargestNumber([1, 2, 3])); // 3
// console.log(findLargestNumber([27, 12, 18, 5])); // 27
// console.log(findLargestNumber([31, 128, 14, 74])); // 128
//

//
// --7--
// const uniqueNumbers = [2, 1, 4, 9];

// const addUniqueNumbers = (...args) => {
//   let isFind;

//   for (const element of args) {
//     isFind = uniqueNumbers.includes(element);
//     console.log(isFind);

//     if (isFind) {
//       continue;
//     } else {
//       uniqueNumbers.push(element);
//     }
//   }
// };
// addUniqueNumbers(1, 2, 3);
// console.log(uniqueNumbers); // [2, 1, 4, 9, 3]

// addUniqueNumbers(12, 2, 3, 19);
// console.log(uniqueNumbers); // [2, 1, 4, 9, 3, 12, 19]

// addUniqueNumbers(4, 5, 12, 3, 1, 2, 8);
// console.log(uniqueNumbers); // [2, 1, 4, 9, 3, 12, 19, 5, 8]
//

//
// --8--
// const filterFromArray = function(arr) {
//   console.log(arguments);
//   const newArrey = arr;
//   // console.log(newArrey);
//   for (let element of arguments) {
//     // console.log(element);

//     let findIndexNum = arr.indexOf(element);
//     // console.log(findIndexNum);

//     if (findIndexNum === -1) {
//       continue;
//     } else {
//       newArrey.splice(findIndexNum, 1);
//     }
//   }

//   return newArrey;
// };
// console.log(filterFromArray([1, 2, 3, 4, 5], 2, 4)); // [1, 3, 5]
// console.log(filterFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4)); // [12, 8, 17]

let newArray = [];
const filterFromArray = function(arr) {
  console.log(arr);
  console.log(arguments);
  for (let i = 1; i < arguments.length; i += 1) {
    console.log(arguments[i]);

    let isInclude = arr.includes(arguments[i]);
    console.log(isInclude);
    if (!isInclude) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
};
console.log(filterFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4));
