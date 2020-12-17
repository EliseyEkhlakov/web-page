'use strict';

const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const hearts = document.querySelectorAll('.heart');
const oneHeart = document.querySelector('.heart');
const wrapper = document.querySelector('.wrapper');

console.dir(box);

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';
// box.style.cssText = 'background-color:blue; width: 300px';
// btns[1].style.borderRadius = '100%';

const div = document.createElement('div');
//const text = document.createTextNode('Тут был z');

div.classList.add('black');
document.querySelector('.wrapper').append(div);
//wrapper.prepend.append(div);
// hearts[0].before(div);
//hearts[0].after(div);
//circles[0].remove();
//hearts[0].replaceWith(circles[0]);

div.innerHTML = "<h2>Hello</h2>";
//div.textContent = "qqqqq";
div.insertAdjacentHTML('afterbegin', 'Bye');



