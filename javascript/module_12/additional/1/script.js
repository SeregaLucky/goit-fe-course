"use strict";

// console.log(111);

// setTimeout(() => {
//   console.log(222);
// }, 2000);

// console.log(333);

//
//
//
//

//
//
//
//

// function aaa() {
//   console.log(111);
// }
// const timer = setTimeout(aaa, 2000);
// clearTimeout(timer);

//
//
//
//

//
//
//
//

// const obj = {
//   classicFoo() {
//     setTimeout(function() {
//       console.log(`${this} in object scope`); // window
//     }, 1000);
//   },
//   arrowFoo() {
//     setTimeout(() => {
//       console.log(`${this} in object scope`); // obj
//     }, 1000);
//   }
// };

// setTimeout(function() {
//   console.log(`${this} in global scope`); // window
// }, 1000);

// setTimeout(() => {
//   console.log(`${this} in global scope`); //window
// }, 1000);

// obj.classicFoo(); // window
// obj.arrowFoo(); // obj

//
//
//
//

//
//
//
//

// const date = new Date(1000000);
// console.log(date);

//
//
//
//

//
//
//
//

// const date = Date.now();
// console.log(date);

//
//
//
//

//
//
//
//

// const date = new Date();
// console.log(date);
// console.log(date.getDate());
// console.log(date.getDay());

//
//
//
//

//
//
//
//

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("YEEESSS=)");
//   }, 2000);
// });

// console.log(promise);
// setTimeout(() => {
//   console.log(promise);
// }, 1000);

//
//
//
//

//
//
//
//

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Data passed into resolve function :)");
//     reject("1111111111111 :(");
//   }, 2000);
// });

// // Выполнится мгновенно
// console.log("BEFORE promise.then");

// const onResolve = data => {
//   console.log("INSIDE promise.then - onResolve");
//   console.log(data); // "Data passed into resolve function :)"
// };

// const onReject = error => {
//   console.log("INSIDE promise.then - onReject");
//   console.log(error); // "Error passed into reject function :("
// };

// promise.then(onResolve, onReject);

// // Выполнится мгновенно
// console.log("AFTER promise.then");

//
//
//
//

//
//
//
//

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("There was an error :(");
//   }, 2000);
// });

// /*
//  * then не выполнится так как в функции fn, внутри new Promise(fn),
//  * был вызван reject(). А catch как раз выполнится через 2 секунды
//  */
// promise
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error);
//   });

//
//
//
//

//
//
//
//

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("success!");
//   }, 2000);
// });

// promise
//   .then(data => console.log(data)) // "success"
//   .catch(error => console.log(error))
//   .finally(() => console.log("finished!")); // "finished"

//
//
//
//

//
//
//
//

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(5);
//   }, 2000);
// });

// promise
//   .then(value => {
//     console.log(value); // 5
//     return value * 2;
//   })
//   .then(value => {
//     console.log(value); // 10
//     return value * 3;
//   })
//   .then(value => {
//     console.log(value); // 30
//   })
//   .catch(error => {
//     console.log(error);
// });

//
//
//
//

//
//
//
//

// const makePromise = (text, delay) => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(text), delay);
//   });
// };

// const promiseA = makePromise("promiseA", 1000);
// const promiseB = makePromise("promiseB", 5000);

// /*
//  * Выполнится спустя 3 секунды, когда выполнится второй промис с задержкой в 3c.
//  * Первый выполнится через секунду и просто будет готов
//  */
// Promise.all([promiseA, promiseB])
//   .then(result => console.log(result)) //["promiseA", "promiseB"]
//   .catch(err => console.log(err));

//
//
//
//

//
//
//
//

// const getMessage = function(callback) {
//   const input = prompt("Введите сообщение");

//   callback(input);
// };

// const logger = message => console.log(message);

// getMessage(logger);
//

//
// const getMessage = function() {
//   const input = prompt("Введите сообщение");

//   return Promise.resolve(input);
// };

// const logger = message => console.log(message);

// // getMessage().then(message => logger(message));

// // Или еще короче
// getMessage().then(logger);

//
//
//
//

//
//
//
//

// setInterval(() => {
//   console.log(Date.now());
// }, 10000);

