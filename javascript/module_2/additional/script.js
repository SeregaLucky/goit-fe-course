"use strict";

// // -- 1 --
// const users = ["Mango", "Poly", "Ajax", "Chelsey"];
// users.shift();
// console.log(users);

// users.pop();
// console.log(users);

// users.unshift('Lux');
// console.log(users);

// users.push('Jay', 'Kiwi');
// console.log(users);

// // const userToDelete = 'Ajax';
// // users.splice(2, 1);
// // console.log(users);

// const userToDelete = 'Ajax';
// for (let i = 0; i < users.length; i++) {
//     let findName = users[i];
//     if (findName === userToDelete) {
//         users.splice(i, 1);
//         break;
//     }
// }
// console.log(users);

// // const userToInsertBefore = "Jay";
// // users.splice(2, 0, 'Kong')
// // console.log(users);

// const userToInsertBefore = 'Jay';
// const addName = 'Kong';
// for (let i = 0; i < users.length; i++) {
//     let findName = users[i];
//     if (findName === userToInsertBefore) {
//         users.splice(i, 0, addName);
//         break;
//     }
// }
// console.log(users);

// // -- 2 --
// const users2 = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];
// for (let i = 0; i < users2.length; i++) {
//     console.log(`${i + 1} - ${users2[i]}`);
// }

// // -- 3 --  ??
// const message = "Proin sociis natoque et magnis parturient montes mus";
// let price = 0;

// const words = message.split(" ");
// console.log(words);
// console.log(words.length);

// // price = words.length * 10;
// // console.log(price); //  ???
// for (let i = 0; i <= words.length; i++) {
//   price = i * 10;
// }
// console.log(price);

// // -- 4 --
// let rightNumber;

// while (true) {
//   rightNumber = prompt("Введите число больше 100");

//   if (rightNumber == null) {
//     break;
//   }

//   rightNumber = Number(rightNumber);
//   if (rightNumber > 100) {
//     break;
//   }
// }

// // -- 5 --
// const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
// const num = 10;
// const matched = [];

// let findNumber;

// for (findNumber of numbers) {
//   if (findNumber > num) {
//     matched.push(findNumber);
//   }
// }
// console.log(matched);

// // -- 6 --
// const message = "May the force be with you";
// let longestWord;

// messageList = message.split(" ");
// let bigest = 0;

// for (let i = 0; i < messageList.length; i++) {
//   if (messageList[i].length > bigest) {
//     bigest = messageList[i].length;
//     longestWord = messageList[i];
//   }
// }

// console.log(bigest);
// console.log(longestWord);

// -- 7 --
const numbers = [12, 15, 25, 37, 41, 62, 74, 83];

const min = numbers[0];
const max = numbers[numbers.length - 1];

let findNum = prompt(`Введите цифру между ${min} и ${max}`);

findNum = Number(findNum);

if (numbers.includes(findNum)) {
  alert("Поздравляем, Вы угадали!");
} else {
  alert("Сожалеем, Вы не угадали!");
}
