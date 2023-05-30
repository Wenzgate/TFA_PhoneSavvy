"use strict"

import {gsap} from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

console.log(gsap.version);

const openMenu = document.querySelector('.navigation__btn--open');
const closeMenu = document.querySelector('.navigation__btn--close');
const sections = document.querySelectorAll('.section-content');
const mainElement = document.querySelector('.main');

const currentHeight = mainElement.clientHeight;
const newHeight = currentHeight + 400 + "px";
const classe1 = "transition-section--hover";
const nombreElementsAttendu = 5;

let isScrollTriggerEnabled = true;
let closeSection = false;
let compteurClasse1 = 0;

var navbar = document.querySelector(".header")
var sticky = navbar.offsetTop;


mainElement.style.height = newHeight;


window.addEventListener("scroll", function() {
    if (window.pageYOffset >= sticky) {
        navbar.style.position = "fixed";
        navbar.style.top = "0";
    } else {
        navbar.style.position = "absolute";
        navbar.style.top = "100%";
    }
});

openMenu.addEventListener('click', () => {
    document.querySelector('.navigation__menu').classList.add('navigation__menu--open');
})

closeMenu.addEventListener('click', () => {
    document.querySelector('.navigation__menu').classList.remove('navigation__menu--open');
})

sections.forEach((section) => {
    section.addEventListener('click', () => {
        isScrollTriggerEnabled = false;
        closeSection = true;

        sections.forEach((section) => {
            section.classList.remove('transition-section--active');
            section.classList.add('transition-section--hover');
        })

        mainElement.style.height = "auto";
        section.classList.remove('transition-section--hover');
        setTimeout(() => {
            const scrollOffset = section.offsetTop - 96;
            window.scrollTo({
                top: scrollOffset,
                behavior: "smooth"
            });
        }, 150);
        updateScrollTrigger();
    })

    section.addEventListener("click", function(event) {
        const clickX = event.clientX;
        const clickY = event.clientY;
        const rect = section.getBoundingClientRect();

        if (clickX >= rect.right - 64 && clickX <= rect.right &&clickY >= rect.top &&clickY <= rect.top + 64) {
            section.classList.add('transition-section--hover');
            mainElement.style.height = newHeight;
            updateScrollTrigger();
            console.log(isScrollTriggerEnabled);
            const elementsClasse1 = document.querySelectorAll(".transition-section--hover");
            compteurClasse1 = elementsClasse1.length;

            if (compteurClasse1 === nombreElementsAttendu) {
                isScrollTriggerEnabled = true;
            }
        }
    });

    function updateScrollTrigger() {
        ScrollTrigger.refresh();
    }

    function onResize() {
        updateScrollTrigger();
    }

    window.addEventListener("resize", onResize);

    ScrollTrigger.create({
        trigger: section, 
        start: "top center",
        end: "110% center", 
        onEnter: function() {

            if (isScrollTriggerEnabled) {
                section.classList.add("transition-section--active");
                section.classList.remove('transition-section--hover');
            }
        },
        onLeave: function() {
            if (isScrollTriggerEnabled) {
                section.classList.remove("transition-section--active");
                section.classList.add('transition-section--hover');
            }
        },

        onEnterBack: function() {

            if (isScrollTriggerEnabled) {
                section.classList.add("transition-section--active");
                section.classList.remove('transition-section--hover');
            }
        },
        onLeaveBack: function() {
            if (isScrollTriggerEnabled) {
                section.classList.remove("transition-section--active");
                section.classList.add('transition-section--hover');
            }
        },
    });
});



//Redimensionnent du burgerMenu

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

//Redimensionnent du burgerMenu