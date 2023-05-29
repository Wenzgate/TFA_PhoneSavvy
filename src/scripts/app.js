import { gsap } from "gsap";
console.log(gsap.version);


const openMenu = document.querySelector('.navigation__btn--open');
const closeMenu = document.querySelector('.navigation__btn--close');

openMenu.addEventListener('click', () => {
    document.querySelector('.navigation__menu').classList.add('navigation__menu--open');
})

closeMenu.addEventListener('click', () => {
    document.querySelector('.navigation__menu').classList.remove('navigation__menu--open');
})



//Redimensionnent du viweport

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

//Redimensionnent du viweport


