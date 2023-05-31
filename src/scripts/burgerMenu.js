"use strict"




const openMenu = document.querySelector('.navigation__btn--open');
const closeMenu = document.querySelector('.navigation__btn--close');
const mainElement = document.querySelector('.main');

const currentHeight = mainElement.clientHeight;
const newHeight = currentHeight + 400 + "px";

mainElement.style.height = newHeight;




openMenu.addEventListener('click', () => {
    document.querySelector('.navigation__menu').classList.add('navigation__menu--open');
})

closeMenu.addEventListener('click', () => {
    document.querySelector('.navigation__menu').classList.remove('navigation__menu--open');
})

