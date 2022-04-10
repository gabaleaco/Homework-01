// Place your DOM creation code here
const header = document.createElement('h1');
header.textContent = 'Homework 01';

const p1 = document.createElement('p');
p1.textContent = 'For this homework, I want you to recreate this HTML page using JavaScript and the DOM API. This means, the HTML should have a blank body and minimal head. Once the page loads, use JavaScript to recreate all the elements from the original page. ';

const p2 = document.createElement('p');
p2.textContent = 'To make it fun, and maybe a bit tricky, I\'ve added several types of elements. Some elements are pretty simple like these \<p\> tags. Others are more going to require extra attributes or mixing text nodes with element nodes.';

const mario = document.createElement('aside'); //why not moving aside?
mario.setAttribute('src', 'assets/mario.png'); 
// mario.getElementById('img').src = 'assets/mario.png'; //no - make id?
mario.textContent = 'Mario says "Wahoo!" to homework';
mario.setAttribute('src', 'assets/Super Mario Bros. medley.mp3');

const div = document.createElement('div');
div.appendChild(header);
div.appendChild(p1);
div.appendChild(p2);
div.appendChild(mario);

document.body.appendChild(div);
