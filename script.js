'use strict';

let title;
let screens;
let screenPrice;
let rollback = 387;
let adaptive;
let service1;
let service2;

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
};

const getPrise = function (str, value) {
    let num;
    do {
        num = prompt(str, value);
    } while (!isNumber(num));

    return +num;
};

const asking = function () {
    title = prompt('Как называется ваш проект?');
    screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
    screenPrice = getPrise('Сколько будет стоить данная работа?');
    adaptive = confirm('Нужен ли адаптив на сайте?');
};

const getAllServicePrices = function () {
    let sum = 0;

    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            service1 = prompt('Какой дополнительный тип услуги нужен?');
        } else if (i === 1) {
            service2 = prompt('Какой дополнительный тип услуги нужен?');
        }
        sum += getPrise('Сколько это будет стоить?');
    }
    return isNumber(sum);
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

asking();
let allServicePrices = getAllServicePrices();
let fullPrice = getFullPrice(screenPrice, allServicePrices);
let servicePercentPrice = getServicePercentPrices(rollback, fullPrice);
title = getTitle();

console.log(showTypeOf(title));
console.log(showTypeOf(screenPrice));
console.log(showTypeOf(adaptive));
console.log(screens.toLowerCase().split(", "));
console.log(getRollbackMessage(fullPrice));
console.log("Процент отката посреднику за работу" + " " + servicePercentPrice);
