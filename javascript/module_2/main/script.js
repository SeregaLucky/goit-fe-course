"use strict";

// ---1 (while(true)) ---
// let input;
// const numbers = [];
// let total = 0;

// while (true) {
// input = prompt("Введите число");

// if (input === null) break;
// else if (isNaN(Number(input)) || !input.trim()) {
// alert("Было введено не число, попробуйте еще раз");
// } else if (input !== "") {
// input = Number(input);
// numbers.push(input);
// }
// }
// console.log(numbers);

// /*
// Создаем условие при ктором вычисление суммы будет происходить когда массив не пустой.
// Создаем переменную.
// В которую при каждой итерации цыкла будет помещятся сделующая цыфра массива.
// В теле массива находим общую суму чисел введеных в масив.
// */

// if (numbers.length) {
// for (const num of numbers) {
// total += num;
// }

// alert(`Общая сумма чисел равна ${total}`);
// }

// ---1.1 (do...while)---
let input2;
const numbers2 = [];
let total2 = 0;

do {
  input2 = prompt("Введите число");

  if (input2 === null) {
    continue;
  }
  if (!Number.isNaN(Number(input2)) && input2.trim() !== "") {
    input2 = Number(input2);
    numbers2.push(input2);
  } else {
    alert("Было введено не число, попробуйте еще раз");
  }

  console.log(numbers2);
} while (input2 !== null);

if (numbers2.length) {
  for (const elem of numbers2) {
    total2 += elem;
  }
  alert(`Общая сумма чисел равна ${total2}`);
}

// ---2---
const passwords = ["qwerty", "111qwe", "123123", "r4nd0mp4zzw0rd"];
let attempts = 3;

do {
  const askPassword = prompt("Введите свой пароль");

  let isFindPassword = passwords.includes(askPassword);

  attempts -= 1;

  if (askPassword === null) {
    break;
  } else if (isFindPassword) {
    alert("Добро пожаловать!");
    break;
  } else if (attempts >= 1) {
    alert(`Неверный пароль, у вас осталось ${attempts} попыток`);
  } else {
    alert("У вас закончились попытки, аккаунт заблокирован!");
  }
} while (attempts >= 1);
