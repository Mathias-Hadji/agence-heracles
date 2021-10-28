const itemsSlide = document.querySelectorAll('.container-slides img');
const nbSlide = itemsSlide.length;
const next = document.querySelector('.right');
const back = document.querySelector('.left');
let count = 0;

next.addEventListener('click', nextSlide);

function nextSlide(){
    itemsSlide[count].classList.remove('active');

    if(count < nbSlide -1) {
        count++;
    } else {
        count = 0;
    }

    itemsSlide[count].classList.add('active');
}


back.addEventListener('click', backSlide);


function backSlide(){
    itemsSlide[count].classList.remove('active');

    if(count > 0) {
        count--;
    } else {
        count = nbSlide - 1;
    }

    itemsSlide[count].classList.add('active');
}