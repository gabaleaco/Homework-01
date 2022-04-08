// Place your DOM creation code here
const header = document.createElement('h1');
header.textContent = 'Homework 01';

const p1 = document.createElement('p1');
p1.textContent = 'paragraph 1';

const p2 = document.createElement('p2');
p2.textContent = 'paragraph 2';

const mario = document.createElement('mario');
mario.setAttribute('href', '\assets\mario.png');
mario.textContent = 'Mario says "Wahoo!" to homework';
mario.setAttribute('href', '\assets\Super Mario Bros. medley.mp3');

const div = document.createElement('div');
div.appendChild(header);
div.appendChild(p1);
div.appendChild(p2);
div.appendChild(mario);

document.body.appendChild(div);
