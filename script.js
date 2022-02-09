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

const getAllServicePrices = function (servicePr, servicePr1) {
    return servicePr + servicePr1;
};

function getFullPrice(screen, allservice) {
    return screen + allservice;
}

function getTitle() {
    title = title.trim();
    return title[0].toUpperCase + title.slice(1).toLowerCase;
}

function getServicePercentPrices(persen, overPrise) {
    return Math.ceil(overPrise - overPrise * (persen / 100));
}

const showTypeOf = function (variable) {
    return typeof variable;
};

const getRollbackMessage = function (price) {
    if (price > 30000) {
        return 'Даем скидку 10%';
    } else if (price >= 15000 && fullPrice < 30000) {
        return 'Даем скидку в 5%';
    } else if (price >= 0 && fullPrice < 15000) {
        return 'Скидка не предусмотрена';
    } else {
        return 'Что-то пошло не так!';
    }
};

let allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);
let fullPrice = getFullPrice(screenPrice, allServicePrices);
let servicePercentPrice = getServicePercentPrices(rollback, fullPrice);
title = getTitle();

console.log(showTypeOf(title));
console.log(showTypeOf(screenPrice));
console.log(showTypeOf(adaptive));
console.log(screens.toLowerCase().split(", "));
console.log(getRollbackMessage(fullPrice));
console.log("Процент отката посреднику за работу" + " " + servicePercentPrice);
