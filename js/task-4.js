const credits = 23580;
const pricePerDroid  = 3000;
let message = prompt('количество единиц');

let order = Number(message);
let totalPrice = order * pricePerDroid;
let balance = credits - totalPrice;

if(message === null){
    console.log('отменено пользователем');
} else if(
    totalPrice > credits
){
    console.log('Недостаточно средств на счету!');
} else{console.log(`Вы купили ${order} дроидов, на счету осталось ${balance} кредитов.`);}

