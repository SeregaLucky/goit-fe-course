// --- 1 ---
const ADMIN_PASSWORD = 'm4ng0h4ckz';
const askPassword = prompt('Введите пароль');
let message;

    if (askPassword == null) {
        message = 'Отменено пользователем!';
    }
    else if (askPassword !== ADMIN_PASSWORD) {
        message = 'Доступ запрещен, неверный пароль!';
    }
    else {
        message = 'Добро пожаловать!';
    }

alert(message);





// --- 2 ---
let credits = 23580;
const pricePerDroid = 3000;
const quantity = 1;
let total = pricePerDroid * quantity;
let totalPrice = credits - total;
    if (credits < total) {
        console.log('Недостаточно средств на счету!');
    }
    else {
        console.log(`Вы купили ${quantity} дроидов, на счету осталось ${totalPrice} кредитов.`);
    }

// --- 2 ---
// let credits = 23580;
// const pricePerDroid = 3000;
// const quantity = 3;
// let total = pricePerDroid * quantity;
// let totalPrice = credits - total;
// credits < total ? console.log('Недостаточно средств на счету!') : console.log(`Вы купили ${quantity} дроидов, на счету осталось ${totalPrice} кредитов.`);





// --- 3 ---
const country = 'Китай';
    switch (country) {
        case 'Китай':
            price = '100 кредитов'; 
            console.log(`Доставка в ${country} будет стоить ${price}`);
            break;
        case 'Южная Америка':
            price = '250 кредитов'; 
            console.log(`Доставка в ${country} будет стоить ${price}`);
            break;
        case 'Австралия':
            price = '170 кредитов'; 
            console.log(`Доставка в ${country} будет стоить ${price}`);
            break;
        case 'Индия':
            price = '80 кредитов'; 
            console.log(`Доставка в ${country} будет стоить ${price}`);
            break;
        case 'Ямайка':
            price = '120 кредитов'; 
            console.log(`Доставка в ${country} будет стоить ${price}`);
            break;

        default:
            console.log('В вашей стране доставка не доступна');
            break;
    }