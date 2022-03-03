'use strict';
// заголовок через тэг h1
const screenTitle = document.getElementsByTagName('h1')[0];
// кнопки Расчитать и Сброс по классу
const btnCalculate = document.getElementsByClassName('handler_btn')[0];
const btnCancel = document.getElementsByClassName('handler_btn')[1];
// кнопочка "+"  через querySelector по классу 
const btnAddScreen = document.querySelector('.screen-btn');
// получаем other-items сперва percent 
const otherItemsPercent = document.querySelectorAll('.other-items.percent');
const otherItemsNumber = document.querySelectorAll('.other-items.number');
// получаем одним запросом inpute type=range через rollback
const rollbackInput = document.querySelector('.rollback input');
// получаем span с классом range-value через его родителя с классом rollback одним запросом
const rollbackSpan = document.querySelector('.rollback .range-value');
// получаем все инпуты с классом total-input 
const totalInput = document.getElementsByClassName('total-input');

for (let elem of totalInput) {
    console.log(elem);
}

// получаем все блоки  с классом screen в изменzемую переменную let
let screenBlocks = document.querySelectorAll('.screen');


const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    rollback: 13,
    adaptive: true,
    services: {},
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,


    isNumber: function (num) {
        num = num.trim();
        if (num === null || num[0] === ' ' || num[num.length - 1] === ' ') {
            return false;
        }
        return !isNaN(parseFloat(num)) && isFinite(num);
    },

    asking: function () {

        do {
            appData.title = prompt('Как называется ваш проект?');
        } while (appData.isNumber(appData.title));


        for (let i = 0; i < 2; i++) {
            let name;

            do {
                name = prompt('Какие типы экранов нужно разработать?');

            } while (appData.isNumber(name));
            let price = 0;

            do {
                price = prompt('Сколько будет стоить данная работа?');

            } while (!appData.isNumber(price));
            appData.screens.push({ id: i, name: name, price: +price });
        }

        for (let i = 0; i < 2; i++) {
            let name;

            do {
                name = prompt('Какой дополнительный тип услуги нужен?');
            } while (appData.isNumber(name));

            let price = 0;

            do {
                price = prompt('Сколько это будет стоить?');
            } while (!appData.isNumber(price));
            appData.services[i + ' ' + name] = +price;
        }

        appData.adaptive = confirm('Нужен ли адаптив на сайте?');
    },

    addPrice: function () {
        appData.screenPrice = appData.screens.reduce(function (sum, accum) {
            return sum + accum.price;
        }, 0);

        for (let key in appData.services) {
            appData.allServicePrices += appData.services[key];
        }
    },

    getAllServicePrices: function () {

        for (let key in appData.services) {
            appData.getAllServicePrices += appData.services[key];
        }

    },

    getFullPrice: function () {
        appData.fullPrice = +appData.screenPrice + appData.allServicePrices;
    },

    getTitle: function () {
        appData.title = appData.title.trim()[0].toUpperCase() + appData.title.slice(1).toLowerCase();
    },

    getServicePercentPrices: function () {
        appData.servicePercentPrice = Math.ceil(appData.fullPrice - appData.fullPrice * (appData.rollback / 100));
    },

    getRollbackMessage: function (price) {
        if (price > 30000) {
            return 'Даем скидку 10%';
        } else if (price >= 15000 && appData.fullPrice < 30000) {
            return 'Даем скидку в 5%';
        } else if (price >= 0 && appData.fullPrice < 15000) {
            return 'Скидка не предусмотрена';
        } else {
            return 'Что-то пошло не так!';
        }
    },

    start: function () {
        appData.asking();
        appData.addPrice();
        appData.getFullPrice();
        appData.getServicePercentPrices();
        appData.getTitle();

        appData.logger();
    },

    logger: function () {
        console.log(appData.title);
        console.log(appData.fullPrice);
        console.log(appData.servicePercentPrice);
        console.log(appData.screens);
        console.log(appData.services);

    },
};
appData.start();