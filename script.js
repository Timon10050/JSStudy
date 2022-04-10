const books = document.querySelectorAll('.book');
const backgraund = document.querySelector('body');
const change = books[4].querySelector('h2 > a');
const adv = document.querySelector('.adv');
const li2 = books[0].querySelectorAll('li');
const li5 = books[5].querySelectorAll('li');
const book6 = books[2].querySelectorAll('li');
const clone = book6[0].cloneNode(true);

books[2].before(books[4]);
books[0].before(books[1]);
books[4].after(books[3]);
books[2].before(books[5]);

backgraund.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

change.textContent = 'Книга 3. this и Прототипы Объектов';

adv.remove();

li2[10].before(li2[2]);
li2[4].before(li2[6]);
li2[4].before(li2[8]);

li5[2].before(li5[9]);
li5[5].before(li5[2]);
li5[8].before(li5[5]);

clone.textContent = 'Глава 8: За пределами ES6';
book6[8].append(clone);