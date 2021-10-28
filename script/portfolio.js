// Slider portfolio

const sliderPortfolio = document.querySelector('.slider-portfolio');
const currentSrcSlider = document.querySelector('.img-visible-slider');
const allPicsPorfolio = Array.from(document.querySelectorAll('.grid-item img'));

const rightBtnPortfolio = document.querySelector('.btn-right');
const leftBtnPortfolio = document.querySelector('.btn-left');
const btnCloseSlider = document.querySelector('.btn-close-slider');

let currentPic;
let currentIndex;

allPicsPorfolio.forEach(item => {

    item.addEventListener('click', (e) => {
        sliderPortfolio.style.display = "block";
        currentSrcSlider.src = e.target.src;
        currentPic = e.target;
        currentIndex = allPicsPorfolio.indexOf(currentPic);
    });
});



rightBtnPortfolio.addEventListener('click', () => {

    if(currentIndex === 11) {
        currentIndex = 0;
        currentSrcSlider.src = allPicsPorfolio[currentIndex].src;
        currentPic = allPicsPorfolio[currentIndex];
        return;
    }

    currentSrcSlider.src = allPicsPorfolio[currentIndex + 1].src;
    currentPic = allPicsPorfolio[currentIndex + 1];
    currentIndex = allPicsPorfolio.indexOf(currentPic);
});



leftBtnPortfolio.addEventListener('click', () => {

    if(currentIndex === 0) {
        currentIndex = 11;
        currentSrcSlider.src = allPicsPorfolio[currentIndex].src;
        currentPic = allPicsPorfolio[currentIndex];
        return;
    }

    currentSrcSlider.src = allPicsPorfolio[currentIndex - 1].src;
    currentPic = allPicsPorfolio[currentIndex - 1];
    currentIndex = allPicsPorfolio.indexOf(currentPic);
});



btnCloseSlider.addEventListener('click', () => {

    sliderPortfolio.style.display = "none";
});
