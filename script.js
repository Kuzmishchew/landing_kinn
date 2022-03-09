'use strict';
let i = 1;
    for(let li of carousel.querySelectorAll('li')) {
      li.style.position = 'relative';
      li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
      i++;
}

let width = 320;
let count = 3;

let list = document.getElementById('carousel-container');
let listElems = carousel.querySelector('li');

let position = 0;

document.getElementById("prev").onclick = function() {
  
    position += width;
    list.style.marginLeft = position + 'px';
};

document.getElementById("next").onclick = function() {
    
    position -= width;

    // position = Math.max(position, -width * (listElems.length - count));
    list.style.marginLeft = position + 'px';
};