'use strict'

const nav = document.querySelector('.navigation');
nav.addEventListener('click', evt => {
    const navLink = nav.querySelectorAll('.navigation__link');
    navLink.forEach(elem => elem.classList.remove('navigation__link--active'));
    evt.target.classList.add('navigation__link--active');
})


