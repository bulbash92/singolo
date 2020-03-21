'use strict'
const items = slider.querySelectorAll('.slider__item');
let currentItem = 0;
let isEnabled = true;
const sliderBtnBack = document.querySelector('.slider__button--left');
const sliderBtnNext = document.querySelector('.slider__button--right');

function changeCurrentItem(n) {
    currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
    isEnabled = false;
    items[currentItem].classList.add(direction);
    items[currentItem].addEventListener('animationend', function() {
        this.classList.remove('active', direction);
    });
}

function showItem(direction) {
    items[currentItem].classList.add('next', direction);
    items[currentItem].addEventListener('animationend', function() {
        this.classList.remove('next', direction);
        this.classList.add('active');
        isEnabled = true;
    });
}

function nextItem(n) {
    hideItem('to-left');
    changeCurrentItem(n + 1);
    showItem('from-right')
}

function prevItem(n) {
    hideItem('to-right');
    changeCurrentItem(n - 1);
    showItem('from-left');
}


sliderBtnBack.addEventListener('click', function () {
    if (isEnabled) {
        prevItem(currentItem);
    }
});

sliderBtnNext.addEventListener('click', function () {
    if (isEnabled) {
        nextItem(currentItem);
    }
});