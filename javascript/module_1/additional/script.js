// -- 1 --
// var name = 'Генератор защитного поля';
// var price = 1000;

// var price = 2000;
// var text = `Выбран "${name}", цена за штуку ${price} кредитов`;
// console.log(text);


// -- 2 --
// const day = 17;
// const month = 10;
// const year = 2048;

// const date = `${day}\\${month}\\${year}`;
// console.log(date);
// const message = `"Доброе утро, сегодня ${date}, за бортом отличная погода!"`;
// console.log(message);


// -- 3 --
// const name = 'Mango';
// const date = '14/08/2137';
// const roomType = 'люкс';

// const message = `${name} прибывает на отдых ${date} в ${roomType}`;
// console.log(message);


// -- 4 --
// const correctPassword = 'jqueryismyjam';

// let askPassword = prompt('Введите пароль доступа');
// if (askPassword == null) {
//     alert('Ожидаю ввода пароля');
//                 for (var i; i<1000; i++) {
//                     askPassword = prompt('Введите пароль доступа');
//                 }
// }
// else if (askPassword == correctPassword) {
//     alert('Доступ в секретный бункер разрешен!');
// }
// else {
//     alert('Активирована система защиты!');
// }


// -- 5 --
// const total = 100;
// const ordered = 50;

// // const ordered = prompt('Сколько товара вам надо?');
// if (total < ordered) {
//     alert('На складе недостаточно твоаров!');
// }
// else if (total == ordered) {
//     alert('Вы забираете весь товар cо склада!');
// }
// else {
//     alert('Заказ оформлен, с вами свяжется менеджер');
// }


// -- 6 --
// const num = prompt('Введите произвольное целое число');
//     if (num == null) {
//         alert('Ну и ладно, пока!');
//     }
//                 // else if (!isNaN(num)) {
//                 //     alert('Спасибо!');
//                 // }
//                         // else if (typeof num ==) {
//                         //     alert('Спасибо!');
//                         // }
//         // else if ( Number.isInteger( +num ) ) {
//         //     alert('Спасибо!');
//         // }  //  или это или нижнее
//     // else if ( Math.floor(num) == num) {
//     //     alert(`Спасибо! ${num}`);
//     // }
//     else {
//         alert('Необходимо было ввести целое число!');
//     }
//                 // Math.floor(num);
//                 // console.log(num);


// -- 7 --
// const value = parseInt( Math.random() * Math.pow(10,4) );
// console.log(value);

// let type;
// let num = value % 2;
// if(num === 0) {
//     type = 'even';
// }
// else {
//     type = 'odd';
// }
// console.log(`${value} is ${type}`);


// -- 8 --
// const hotelSearth = prompt('Введите количество желаймых звест в желаймом отеле');
    
//     if (hotelSearth == null) {
//         alert('Очень жаль, приходите еще!');
//     }
//     else if (Number.isInteger(+hotelSearth) && +hotelSearth <= 5 && +hotelSearth >= 1) {
//         switch (+hotelSearth) {
//             case 1:
//                 alert('Каталог хостелов');
//                 break;
//             case 2:
//                 alert('Каталог бюджетных отелей');
//                 break;
//             case 3:
//                 alert('Каталог отелей ***');
//                 break;
//             case 4:
//                 alert('Каталог отелей ****');
//                 break;
//             case 5:
//                 alert('Каталог лучших отелей');
//                 break;
//         }
//     }
//     else {
//         alert('Неверный ввод, возможные варианты 1-5!');
//     }




const hotelSearth = prompt('Введите количество желаймых звест в желаймом отеле');

let hotelSearthNum = +hotelSearth;
console.log(hotelSearthNum);

    if (hotelSearthNum == false) {
        alert('Очень жаль, приходите еще!');
    }
    else if (Number.isInteger(hotelSearthNum) && hotelSearthNum <= 5 && hotelSearthNum >= 1) {
        switch (hotelSearthNum) {
            case 1:
                alert('Каталог хостелов');
                break;
            case 2:
                alert('Каталог бюджетных отелей');
                break;
            case 3:
                alert('Каталог отелей ***');
                break;
            case 4:
                alert('Каталог отелей ****');
                break;
            case 5:
                alert('Каталог лучших отелей');
                break;
        }
    }
    else {
        alert('Неверный ввод, возможные варианты 1-5!');
    }