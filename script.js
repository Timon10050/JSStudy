'use strict';
const appData = {
    title: '',
    screens: '',
    screenPrice: 0,
    rollback: 387,
    adaptive: true,
    service1: '',
    service2: '',

    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    },

    getPrise: function (str, value) {
        let num;
        do {
            num = prompt(str, value);
        } while (!appData.isNumber(num));

        return +num;
    },

    asking: function () {
        appData.title = appData.getTitle(prompt('Как называется ваш проект?'));
        appData.screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
        appData.screenPrice = appData.getPrise('Сколько будет стоить данная работа?');
        appData.adaptive = confirm('Нужен ли адаптив на сайте?');
    },

    getAllServicePrices: function () {
        let sum = 0;

        for (let i = 0; i < 2; i++) {
            if (i === 0) {
                appData.service1 = prompt('Какой дополнительный тип услуги нужен?');
            } else if (i === 1) {
                appData.service2 = prompt('Какой дополнительный тип услуги нужен?');
            }
            sum += appData.getPrise('Сколько это будет стоить?');
        }
        return appData.isNumber(sum);
    },

    getFullPrice: function (screen, allservice) {
        return screen + allservice;
    },

    getTitle: function (title) {
        title = title.trim();
        return title[0].toUpperCase + title.slice(1).toLowerCase;
    },

    getServicePercentPrices: function (persen, overPrise) {
        return Math.ceil(overPrise - overPrise * (persen / 100));
    },

    showTypeOf: function (variable) {
        return typeof variable;
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
        appData.allServicePrices = appData.getAllServicePrices();
        appData.fullPrice = appData.getFullPrice(appData.screenPrice, appData.allServicePrices);
        appData.servicePercentPrice = appData.getServicePercentPrices(appData.rollback, appData.fullPrice);
        appData.logger();

    },
    logger: function () {
        console.log(appData.showTypeOf(appData.title));
        console.log(appData.showTypeOf(appData.fullPrice));
        console.log(appData.showTypeOf(appData.adaptive));
        console.log(appData.screens.toLowerCase().split(", "));
        console.log(appData.getRollbackMessage(appData.fullPrice));
        console.log("Процент отката посреднику за работу" + " " + appData.servicePercentPrice);
    },
};
appData.start();