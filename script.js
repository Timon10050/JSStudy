let title = 'Название проекта';
let screens = 'Простые, Сложные, Интерактивные';
let screenPrice = 487;
let rollback = 35;
let fullPrice = 10000000;
let adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);

console.log("Стоимость верстки экранов" + " " + screenPrice + " " + "юаней.");

console.log("Стоимость разработки сайта" + " " + fullPrice + " " + "юаней.");

console.log(screens.toLowerCase());

console.log(screens.split(", "));

console.log("Процент отката посреднику за работу" + " " + fullPrice * (rollback/100));
