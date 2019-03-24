"use strict";

// // ---1---
// let input;
// const numbers = [];
// let total = 0;

// while (true) {
//   input = prompt("Введите число");

//   if (input === null) break;
//   else if (isNaN(Number(input))) {
//     alert("Было введено не число, попробуйте еще раз");
//   } else if (input !== "") {
//     input = Number(input);
//     numbers.push(input);
//   }
// }
// console.log(numbers);

// /*
//  Создаем условие при ктором вычисление суммы будет происходить когда массив не пустой.
//  Создаем переменную.
//  В которую при каждой итерации цыкла будет помещятся сделующая цыфра массива.
//  В теле массива находим общую суму чисел введеных в масив.
// */

// if (numbers.length !== 0) {
//   let num;

//   for (num of numbers) {
//     total += num;
//   }

//   alert(`Общая сумма чисел равна ${total}`);
// }

// // ---2---
// const passwords = ["qwerty", "111qwe", "123123", "r4nd0mp4zzw0rd"];
// let attempts = 3;

// do {
//   const askPassword = prompt("Введите свой пароль");

//   let didFindPassword = passwords.includes(askPassword);

//   attempts -= 1;

//   if (didFindPassword) {
//     alert("Добро пожаловать!");
//     break;
//   } else if (attempts >= 1) {
//     alert(`Неверный пароль, у вас осталось ${attempts} попыток`);
//   } else {
//     alert("У вас закончились попытки, аккаунт заблокирован!");
//   }
// } while (attempts >= 1);

