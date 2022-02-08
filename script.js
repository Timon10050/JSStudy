'use strict';

let title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
let screenPrice = +prompt('Сколько будет стоить данная работа?', 12000);
let rollback = 387;
let adaptive = confirm('Нужен ли адаптив на сайте?');
let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?');
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = Math.ceil((fullPrice - fullPrice * (rollback / 100)));

if (fullPrice > 30000) {
    console.log('Даем скидку 10%');
} else if (fullPrice >= 15000 && fullPrice < 30000) {
    console.log('Даем скидку в 5%');
} else if (fullPrice >= 0 && fullPrice < 15000) {
    console.log('Скидка не предусмотрена');
} else {
    console.log('Что-то пошло не так!');
}

//console.log(typeof title, fullPrice, adaptive);
//console.log(typeof fullPrice);
//console.log(typeof adaptive);

console.log(screens.length);

console.log("Стоимость верстки экранов" + " " + screenPrice + " " + "юаней.");

console.log("Стоимость разработки сайта" + " " + fullPrice + " " + "юаней.");

console.log(screens.toLowerCase());

console.log(screens.split(", "));

console.log("Процент отката посреднику за работу" + " " + fullPrice * (rollback / 100));
