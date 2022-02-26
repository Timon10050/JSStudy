'use strict';

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