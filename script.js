'use strict';
let i = 1;
    for(let li of carousel.querySelectorAll('li')) {
      li.style.position = 'relative';
      li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
      i++;
}

let width = 320;
let count = 0;

let list = document.getElementById('carousel-container');
let listElems = carousel.querySelector('li');

let position = 0;

document.getElementById("prev").onclick = function() {
    if (count > 0) {
        position += width;
        list.style.marginLeft = position + 'px';
        count--;
    }
    
};

document.getElementById("next").onclick = function() {
    
    if (count < 3) {
        position -= width;
        list.style.marginLeft = position + 'px';
        count++;
    }
    
};