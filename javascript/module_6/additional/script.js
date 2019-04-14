"use strict";

// --1--
/*
  Напиши функцию-конструктор Account, которая добавляет будущему
  объекту поля login, email. 
  
  В prototype функции-конструктора добавь метод getInfo(), 
  который выводит в консоль значения полей login и email. 
  
  Обрати внимание, метод всего один, в поле prototype функции-конструктора, 
  а использовать его смогут все экземпляры, по ссылке.
  
  Создать несколько экземпляров с разными значениями свойств, вывесди их в консоль.
*/

// const Account = function(login, email) {
//   this.login = login;
//   this.email = email;
// };

// Account.prototype.getInfo = function() {
//   console.log(`login: ${this.login}, email: ${this.email}`);
// };
// const account = new Account("Mangozedog", "mango@dog.woof");
// console.log(Account.prototype.getInfo); // function
// account.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

// const account2 = new Account("3333", "2323232@dog.woof");
// account2.getInfo(); // Login: Mangozedog, Email: mango@dog.woof
//
//
// --2--
/*
  Напиши ES6 класс StringBuilder.
  
  На вход (в конструкторе) он получает один параметр string - строку,
  которую записывает в свойство _value.
  
  Добавь классу следующие методы:
  
    - геттер value - возвращает текущее значение поля _value
  
    - append(str) - получает парметр str (строку) и добавляет ее в конец _value
    
    - prepend(str) - получает парметр str (строку) и добавляет ее в начало value
  
    - pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value
*/

// class StringBuilder {
//   constructor(string) {
//     this._value = string;
//   }

//   get value() {
//     return this._value;
//   }

//   append(str) {
//     this._value = this._value + str;
//   }

//   prepend(str) {
//     this._value = str + this._value;
//   }

//   pad(str) {
//     this._value = str + this._value + str;
//   }
// }

// const builder = new StringBuilder(".");
// console.log(builder);
// console.log(builder.value);

// builder.append("^");
// console.log(builder.value); // '.^'

// builder.prepend("^");
// console.log(builder.value); // '^.^'

// builder.pad("=");
// console.log(builder.value); // '=^.^='
//
//

//
//
// --3--
/*
 * Напиши класс Car с указанными свойствами и методами
 */

// class Car {
//   constructor(maxSpeed = 0) {
//     this.speed = 0;
//     this.maxSpeed = maxSpeed.maxSpeed;
//     this.running = false;
//     this.distance = 0;
//   }

//   turnOn() {
//     this.running = true;
//   }

//   turnOff() {
//     this.running = false;
//   }

//   accelerate(spd) {
//     const isSpeedGood = spd <= this.maxSpeed;

//     if (isSpeedGood) {
//       this.speed = spd;
//     }
//   }

//   decelerate(spd) {
//     const isSpeedGood = 0 < spd && spd <= this.maxSpeed;

//     if (isSpeedGood) {
//       this.speed = spd;
//     }
//   }

//   drive(hours) {
//     const isCarTurnOn = this.running;

//     if (isCarTurnOn) {
//       this.distance = hours * this.speed;
//     }
//   }
// }
// const car = new Car({ maxSpeed: 100 });
// console.log(car);

// car.turnOn();
// console.log(car);

// car.accelerate(95);
// console.log(car);

// car.decelerate(95);
// console.log(car);

// car.drive(3);
// console.log(car);
//
//

//
//
// --4--
// class Car {
//   constructor(maxSpeed = 0) {
//     this.speed = 0;
//     this.maxSpeed = maxSpeed.maxSpeed;
//     this.running = false;
//     this.distance = 0;
//   }

//   turnOn() {
//     this.running = true;
//   }

//   turnOff() {
//     this.running = false;
//   }

//   accelerate(spd) {
//     const isSpeedGood = spd <= this.maxSpeed;

//     if (isSpeedGood) {
//       this.speed = spd;
//     }
//   }

//   decelerate(spd) {
//     const isSpeedGood = 0 < spd && spd <= this.maxSpeed;

//     if (isSpeedGood) {
//       this.speed = spd;
//     }
//   }

//   drive(hours) {
//     const isCarTurnOn = this.running;

//     if (isCarTurnOn) {
//       this.distance = hours * this.speed;
//     }
//   }

//   static getSpecs(car) {
//     console.log(car);
//   }
// }

// const car = new Car({ maxSpeed: 100 });
// console.log(car);

// car.turnOn();
// car.accelerate(50);
// car.drive(2);

// Car.getSpecs(car); // maxSpeed: 100, speed: 50, running: true, distance: 100
// // console.log(car);
//
//

//
//
// --5--
/*
 * Добавь классу Car свойство цены автомобиля, назови его сам.
 * Добавь геттер и сеттер value, который будет работать с свойством цены автомобиля.
 */
// , price = 2000
class Car {
  constructor({ maxSpeed = 0, price }) {
    this.speed = 0;
    this.maxSpeed = maxSpeed;
    this.running = false;
    this.distance = 0;
    this._price = price;
  }

  turnOn() {
    this.running = true;
  }

  turnOff() {
    this.running = false;
  }

  accelerate(spd) {
    const isSpeedGood = spd <= this.maxSpeed;

    if (isSpeedGood) {
      this.speed = spd;
    }
  }

  decelerate(spd) {
    const isSpeedGood = 0 < spd && spd <= this.maxSpeed;

    if (isSpeedGood) {
      this.speed = spd;
    }
  }

  drive(hours) {
    const isCarTurnOn = this.running;

    if (isCarTurnOn) {
      this.distance = hours * this.speed;
    }
  }

  static getSpecs(car) {
    console.log(car);
  }

  get value() {
    return this._price;
  }

  set value(newPrice) {
    return (this._price = newPrice);
  }
}

const car = new Car({ maxSpeed: 50, price: 2000 });
console.log(car);

console.log(car.value); // 2000

car.value = 4000;
console.log(car.value); // 4000
console.log(car);
