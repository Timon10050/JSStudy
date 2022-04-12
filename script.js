'use strict';

const btn = document.getElementById('btn');
const btn2 = document.getElementById('e_btn');
const input = document.getElementById('text');
const range = document.getElementById('range');
const range_span = document.getElementById('range-span');
const square = document.getElementById('square');
const circle = document.getElementById('circle');

function changeColor() {
    let color = input.value;
    square.style.backgroundColor = color;
}

function changeSettings() {
    let num = range.value;
    range_span.textContent = num;
    circle.style.width = `${num}%`;
    circle.style.height = `${num}%`;
}

btn.addEventListener('click', changeColor);
range.addEventListener('input', changeSettings);

btn2.style.display = "none";