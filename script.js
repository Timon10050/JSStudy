'use strict';

const appData = {
    title: '',
    screens: '',
    screenPrice: 0,
    rollback: 13,
    adaptive: true,
    services: {},
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,

    start: function () {
        appData.asking();
        appData.getAllServicePrices();
        appData.getFullPrice();
        appData.getServicePercentPrices();
        appData.getTitle();
        appData.logger();
    },

    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    },

    getPrise: function () {
        let num;
        do {
            num = prompt();
        } while (!appData.isNumber(num));

        return +num;
    },

    asking: function () {
        appData.title = appData.getTitle(prompt('Как называется ваш проект?'));
        appData.screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
        appData.screenPrice = appData.getPrise('Сколько будет стоить данная работа?');
        appData.adaptive = confirm('Нужен ли адаптив на сайте?');

        for (let i = 0; i < 2; i++) {
            let name = prompt('Какой дополнительный тип услуги нужен?');
            let prise = 0;

            do {
                prise = prompt('Сколько это будет стоить?');
            } while (!appData.isNumber(prise));

            appData.services[name] = +prise;
        }
        //appData.allServicePrices =  appData.isNumber(sum);

    },

    getAllServicePrices: function () {

        for (let key in appData.services) {
            appData.getAllServicePrices += appData.services[key];
        }

    },

    getFullPrice: function () {
        appData.fullPrice = appData.screenPrice + appData.allServicePrices;
    },

    getTitle: function () {
        appData.title = appData.title.trim()[0].toUpperCase + appData.title.slice(1).toLowerCase;
    },

    getServicePercentPrices: function () {
        appData.servicePercentPrice = Math.ceil(appData.fullPrice - appData.fullPrice * (appData.rollback / 100));
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

    logger: function () {
        //console.log(appData.showTypeOf(appData.title));
        //console.log(appData.showTypeOf(appData.fullPrice));
        //console.log(appData.showTypeOf(appData.adaptive));
        console.log(appData.screens.toLowerCase().split(", "));
        console.log(appData.getRollbackMessage(appData.fullPrice));
        console.log("Процент отката посреднику за работу" + " " + appData.servicePercentPrice);
    },
};
appData.start();