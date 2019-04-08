"use strict";

// Массив с логинами уже существующими
const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

// Проверяет что бы новый логин отвечал требованиям по количеству символов
const isLoginValid = function(login) {
  const isLoginGoodLength = login.length >= 4 && login.length <= 16;
  return isLoginGoodLength;
};

// Проверяет что бы новый логин был с уникальным названием
const isLoginUnique = function(allLogins, login) {
  const makeLoginLower = login.toLowerCase();

  const akeLoginsSting = allLogins.join(" ");
  const makeLoginsLowerAll = akeLoginsSting.toLowerCase();

  const isLogRepeat = makeLoginsLowerAll.includes(makeLoginLower);
  const isLogUnique = !isLogRepeat;

  return isLogUnique;
};

// Добавляет логин если отвечает требованиям по количеству символов и если уникальный
const addLogin = function(allLogins, login) {
  const isSuitLogLength = isLoginValid(login);
  if (!isSuitLogLength) {
    console.log("Ошибка! Логин должен быть от 4 до 16 символов");
    return;
  }

  const isSuitLogUnique = isLoginUnique(allLogins, login);
  if (!isSuitLogUnique) {
    console.log("Такой логин уже используется!");
    return;
  }

  allLogins.push(login);
  console.log("Логин успешно добавлен!");
};

// Вызовы функции для проверки
addLogin(logins, "Ajax"); // 'Логин успешно добавлен!'
addLogin(logins, "robotGoogles"); // 'Такой логин уже используется!'
addLogin(logins, "Zod"); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, "jqueryisextremelyfast"); // 'Ошибка! Логин должен быть от 4 до 16 символов'

// console.log(isLoginValid("Ajax"));
// console.log(isLoginUnique(logins, "Ajax"));
console.log(logins);
