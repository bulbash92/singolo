'use strict'

//add active nav element
const nav = document.querySelector('.navigation');
nav.addEventListener('click', evt => {
    const navLink = nav.querySelectorAll('.navigation__link');
    navLink.forEach(elem => elem.classList.remove('navigation__link--active'));
    evt.target.classList.add('navigation__link--active');
})

const phone = document.querySelectorAll('.slider__img');
const phoneLeft = document.querySelector('.slider__img--left');
const phoneRight = document.querySelector('.slider__img--right');


const display1 = document.querySelector('.display-off--1');
const display2 = document.querySelector('.display-off--2');
const slider = document.querySelector('.slider')
const slideTwo = slider.querySelector('.slider-slide--2');
const slideOne = slider.querySelectorAll('.slider__slide--1');
const btnArrow = slider.querySelector('.slider__button')

// display off 
slider.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('slider__img--left') || target.classList.contains('display-off--1')) {
        if (display1.style.display === 'block') {
            display1.style.display = 'none';
        } else {
            display1.style.display = 'block';
        }
    }
    if (target.classList.contains('slider__img--right') || target.classList.contains('display-off--2')) {
        if (display2.style.display === 'block') {
            display2.style.display = 'none';
        } else {
            display2.style.display = 'block';
        }
    }
})

// portfolio tabs active 
const tabs = document.querySelector('.portfolio__tabs');
const GALLERY = document.querySelector('.portfolio__gallery');



GALLERY.addEventListener('click', evt => {
    GALLERY.querySelectorAll('.portfolio__gallery-image').forEach(el => el.classList.remove('portfolio__gallery-image-block--active'));
    if (evt.target.classList.contains('portfolio__gallery-image')) {
        evt.target.classList.add('portfolio__gallery-image-block--active');
    }
})

tabs.addEventListener('click', (evt) => {
    const images = [...GALLERY.children];
    const sortGallery = images.sort(() => 0.5-Math.random());
    const tab = tabs.querySelectorAll('.portfolio__tabs-tab');
    tab.forEach(el => el.classList.remove('portfolio__tabs-tab--active'));
    if (evt.target.classList.contains('portfolio__tabs-tab')) {
        evt.target.classList.add('portfolio__tabs-tab--active');
        GALLERY.innerHTML = sortGallery.map(s => s.outerHTML).join('');
    }
})


//popup
const FORM = document.querySelector('.get-a-quote__form');

const POPUP = document.querySelector('.popup')
const btnSubmit = document.querySelector('.get-a-quote__form-button');
const btnClose = document.querySelector('.popup__close');

// console.log(document.querySelector('.subject').value)


btnSubmit.addEventListener('click', event => {
    event.preventDefault();
    const formSubject = document.querySelector('.subject').value;
    if (formSubject !== '') {
        console.log(formSubject)
        document.querySelector('.popup__message-subject').innerText = 'Тема: ' + formSubject;
    } else {
        document.querySelector('.popup__message-subject').innerText = 'Без темы';
    }
    const formDescribe = document.querySelector('.get-a-quote__form-textarea').value;
    if (formDescribe !== '') {
        document.querySelector('.popup__message-describe').innerText = 'Описание: ' + formDescribe;
    } else {
        document.querySelector('.popup__message-describe').innerText = 'Без описания';
    }
    POPUP.classList.remove('hidden');

})
//close popup
btnClose.addEventListener('click', event => {
    POPUP.classList.add('hidden')
    document.querySelector('.popup__message-subject').innerText = '';
    document.querySelector('.popup__message-describe').innerText = '';
    FORM.reset();

})

