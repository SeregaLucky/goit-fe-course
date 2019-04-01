"use strict";

// --1--
// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true
// };
// console.table(user);
// //добавляем новое
// user.mood = "happy";
// console.table(user);
// //изминяем
// user.hobby = "javascript";
// user.premium = false;
// console.table(user);
// //выводим ключ значение
// const keysUser = Object.keys(user);
// console.log(keysUser);
// for (const keyUs of keysUser) {
//   console.log(`${keyUs}:`, user[keyUs]);
// }
// //выводим ключ значение
// const keysUserEnt = Object.entries(user);
// console.log(keysUserEnt);
// for (const keyUs of keysUserEnt) {
//   const k = keyUs[0];
//   const v = keyUs[1];
//   console.log(`${k}:`, v);
// }
//
//

//
// --2--
// const tasksCompleted = {
//   ann: 29,
//   david: 35,
//   helen: 1,
//   lorence: 99
// };
// const nameVal = Object.entries(tasksCompleted);
// console.log(nameVal);

// let valueBigest = 0;
// let nameBest;
// let valueBig;

// for (const ent of nameVal) {
//   let name = ent[0];
//   let value = ent[1];
//   console.log(name, value);
//   //   console.log("============================================");

//   if (value > valueBigest) {
//     valueBigest = value;

//     nameBest = name;
//     valueBig = value;
//   }
// }
// console.log(`Найлучший сотрудник - ${nameBest}:`, valueBig);
//
//

//
// --3--
// const countProps = obj => {
//   const objEntry = Object.entries(obj);
//   const objLength = objEntry.length;
//   return objLength;
// };

// console.log(countProps({})); // 0
// console.log(countProps({ a: 1, b: 3, c: "hello" })); // 3
//
//

//
// --4--
// const isObjectEmpty = obj => {
//   const objEntry = Object.entries(obj);
//   console.log(objEntry);

//   const objLength = objEntry.length;
//   console.log(objLength);

//   const isObjEmpty = !objLength;
//   console.log(isObjEmpty);

//   if (isObjEmpty) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(isObjectEmpty({})); // true
// console.log(isObjectEmpty({ a: 1 })); // false
// console.log(isObjectEmpty({ a: 1, b: 2 })); // false
//
//

//
// --5--
// const countTotalSalary = salaries => {
//   const onlySalaries = Object.values(salaries);
//   //   console.log(onlySalaries);
//   let total = 0;

//   for (const salary of onlySalaries) {
//     total += salary;
//   }

//   return total;
// };

// console.log(countTotalSalary({})); // 0
// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80
//   })
// ); // 330
//
//

//
// --6--
// const users = [
//   { name: "Poly", age: 7, mood: "happy" },
//   { name: "Mango", age: 4, mood: "blissful" },
//   { name: "Ajax", age: 3, mood: "tired" }
// ];

// const getAllPropValues = (arr, prop) => {
//   const mass = [];

//   for (let i = 0; i < arr.length; i += 1) {
//     for (let key in arr[i]) {
//       if (key === prop) {
//         // console.log(key);
//         mass.push(arr[i][key]);
//         // console.log(mass);
//       }
//     }
//   }

//   return mass;
// };
// // Вызовы функции для проверки
// console.log(getAllPropValues(users, "name")); // ['Poly', 'Mango', 'Ajax']
// console.log(getAllPropValues(users, "mood")); // ['happy', 'blissful', 'tired']
// console.log(getAllPropValues(users, "active")); // []
//
//

//
// --7--
const names = [
  "Радар",
  "Сканер",
  "Дроид",
  "Захват",
  "Двигатель",
  "Топливный бак"
];
const prices = [1000, 2000, 1500, 2700, 1600, 8000];

const combine = (names, prices) => {
  let muss = {};

  for (let i = 0; i < names.length; i += 1) {
    let name = names[i];
    muss[name] = prices[i];
    // console.log(muss);
  }

  return muss;
};

const products = combine(names, prices);
console.log(products); // массив объектов со свойствами name и price
