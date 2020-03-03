let menu = document.querySelector('.menu');
let menuElement = document.querySelectorAll('.menu-item');

menu.insertBefore(menuElement[2], menuElement[1]);
let newElement = document.createElement('li');
newElement.classList.add('menu-item');
newElement.textContent = 'Пятый пункт';
menu.appendChild(newElement);

let body = document.querySelector('body');
body.style.backgroundImage = 'url(./img/apple_true.jpg)';

let title = document.querySelector('#title');
title.textContent = 'Мы продаем только подлинную технику Apple';

let column = document.querySelectorAll('.column');

let adv = column[1].querySelectorAll('div');
column[1].removeChild(adv[1]);

let answer = prompt('Какое у Вас отношение к технике apple?');
adv[2].textContent = answer;


