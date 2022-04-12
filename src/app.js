// Place your DOM creation code here

//These fall under Section > Main > Body
const header = document.createElement('h1');
header.textContent = 'Homework 01';

const p1 = document.createElement('p');
p1.textContent = 'For this homework, I want you to recreate this HTML page using JavaScript and the DOM API. This means, the HTML should have a blank body and minimal head. Once the page loads, use JavaScript to recreate all the elements from the original page. ';

const p2 = document.createElement('p');
p2.textContent = 'To make it fun, and maybe a bit tricky, I\'ve added several types of elements. Some elements are pretty simple like these \<p\> tags. Others are more going to require extra attributes or mixing text nodes with element nodes.'; 


//These fall under Aside > Body
const mimg = document.createElement('aside');
mimg.setAttribute('src', 'assets/mario.png');

const mquote = document.createElement('aside');
mquote.textContent = 'Mario says "Wahoo!" to homework';

const mtalk = document.createElement('aside');
mtalk.setAttribute('src', 'assets/Super Mario Bros. medley.mp3');


//Append sections into Main then Body
const section = document.createElement('section');
section.appendChild(header);
section.appendChild(p1);
section.appendChild(p2);

const main = document.createElement('main');
main.appendChild(section);


//Append asides into Body
const aside = document.createElement('aside');
aside.appendChild(mimg);
aside.appendChild(mquote);
aside.appendChild(mtalk);


const body = document.createElement('body');
body.appendChild(main);
body.appendChild(aside);

document.body.appendChild(body);
