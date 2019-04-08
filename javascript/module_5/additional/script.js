"use strict";

// --1--
/*
 * Расставь отсутствующие this в методах объекта account
 */
// const account = {
//   owner: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["order-1", "order-2", "order-3"],
//   changeDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost;
//     this.orders.push(order);
//   }
// };
// account.changeDiscount(0.15);
// console.log(account.discount); // 0.15

// const orders = account.getOrders();
// console.log(orders); // ['order-1', 'order-2', 'order-3']

// account.addOrder(5000, "order-4");
// console.log(account.balance); // 19000
// console.log(account.orders); // ['order-1', 'order-2', 'order-3', 'order-4']
//
//

//
// --2--
/*
 * Расставь отсутствующие this в конструкторе Account
 */
// function Account(login, password, type = "regular") {
//   this.login = login;
//   this.password = password;
//   this.type = type;

//   this.changePassword = function(newPassword) {
//     this.password = newPassword;
//   };

//   this.getInfo = function() {
//     console.log(`
//         Login: ${this.login},
//         Pass: ${this.password},
//         Type: ${this.type}
//       `);
//   };
// }

// const account = new Account("Mango", "qwe123", "premium");
// console.log(account);

// console.log(account.login); // 'Mango'
// console.log(account.password); // 'qwe123'
// console.log(account.type); // 'premium'

// account.changePassword("asdzxc");
// console.log(account.password); // 'asdzxc'

// account.getInfo(); // Login: 'Mango', Pass: 'asdzxc', Type: 'premium'
//
//

//
// --3--
/*
  Напиши функцию-конструкор User для создания 
  пользователя со следующим свойствами:
    - name - строка (имя)
    - age - число (возраст)
    - friends - число (кол-во друзей)

  Имя, активность, возраст и друзей, 
  будут переданы при вызове конструктора User.
  
  Добавь метод getInfo(), который, выводит строку:
  `User ${имя} is ${возраст} years old and has ${кол-во друщзей} friends`
*/

// const User = function(all) {
//   const { name, age, friends } = all;
//   this.name = name;
//   this.age = age;
//   this.friends = friends;
//   console.log(all);
//   this.getInfo = function() {
//     console.log(
//       `User ${this.name} is ${this.age} years old and has ${
//         this.friends
//       } friends`
//     );
//   };
// };

// const mango = new User({ name: "Mango", age: 2, friends: 20 });
// mango.getInfo(); // User Mango is 2 years old and has 20 friends

// const poly = new User({ name: "Poly", age: 3, friends: 17 });
// poly.getInfo(); // User Poly is 3 years old and has 17 friends
//
//

//
// --4--

