"use strict"

import {gsap} from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

console.log(gsap.version);

const openMenu = document.querySelector('.navigation__btn--open');
const closeMenu = document.querySelector('.navigation__btn--close');
const sections = document.querySelectorAll('.section-content');
const mainElement = document.querySelector('.main');

const mediaQueryMobile = window.matchMedia('(max-width: 1023px)')
const mediaQueryDesktop = window.matchMedia('(min-width: 1024px)')


const currentHeight = mainElement.clientHeight;
const newHeight = currentHeight + 400 + "px";
const nombreElementsAttendu = 5;

let closeSection = false;
let isScrollTriggerEnabled = true;
let compteurClasse1 = 0;

var navbar = document.querySelector(".header")

if (mediaQueryMobile.matches) {
    function homeFunction () {

        if (document.body.classList.contains('page-home')) {
        
        mainElement.style.height = newHeight;
        var sticky = navbar.offsetTop;
        window.addEventListener("scroll", function() {
            if (window.pageYOffset >= sticky) {
                navbar.style.position = "fixed";
                navbar.style.top = "0";
            } else {
                navbar.style.position = "absolute";
                navbar.style.top = "100%";
            }
        });
        }
        }
        
        homeFunction();

        openMenu.addEventListener('click', () => {
            document.querySelector('.navigation__menu').classList.add('navigation__menu--open');
        })
        
        closeMenu.addEventListener('click', () => {
            document.querySelector('.navigation__menu').classList.remove('navigation__menu--open');
        })
        
        
        
        sections.forEach((section) => {
            const paths = section.querySelectorAll('.svg-border path');
        
            ScrollTrigger.create({
                trigger: section, 
                start: "top center",
                end: "110% center", 
                markers : true,
                onEnter: function() {
        
                    if (isScrollTriggerEnabled) {
                        paths.forEach((path) => {
                            path.classList.add("loading-border");
                        });
                        section.addEventListener('animationend', ()=>{
                            paths.forEach((path) => {
                                path.classList.remove("loading-border");
                            });                    
                            section.classList.remove('transition-section--hover');
                            section.classList.add("transition-section--active");
                            
                            const previousElement = section.previousElementSibling;
                            const nextElement = section.nextElementSibling;
                            
                            // if (previousElement && previousElement.classList.contains("section-content")) {
                            //     previousElement.classList.remove("transition-section--hover--waiting");
                            // }
                        
                            // if (nextElement) {
                            //     nextElement.classList.remove("transition-section--hover--waiting");
                            // }
                        })
                    
                    }
                },
        
                onLeave: function() {
                    if (isScrollTriggerEnabled) {
                        paths.forEach((path) => {
                            path.classList.remove("loading-border");
                        });
                        if(section.classList.contains("transition-section--active")) {
                        section.classList.remove("transition-section--active");
                        section.classList.add('transition-section--hover');
        
        
                            const previousElement = section.previousElementSibling;
                            const nextElement = section.nextElementSibling;
        
                            // if (previousElement && previousElement.classList.contains("section-content")) {
                            //     previousElement.classList.add("transition-section--hover--waiting");
                            // }
        
                            // if (nextElement) {
                            //     nextElement.classList.add("transition-section--hover--waiting");
                            // }
                        }
                    }
                },
        
                onEnterBack: function() {
        
                    if (isScrollTriggerEnabled) {
                        paths.forEach((path) => {
                            path.classList.add("loading-border");
                        });                
                        section.addEventListener('animationend', ()=>{
                            paths.forEach((path) => {
                                path.classList.remove("loading-border");
                            });
                            section.classList.remove('transition-section--hover');
                            section.classList.add("transition-section--active");
                            
                            const previousElement = section.previousElementSibling;
                            const nextElement = section.nextElementSibling;
                            
                            // if (previousElement && previousElement.classList.contains("section-content")) {
                            //     previousElement.classList.remove("transition-section--hover--waiting");
                            // }
                        
                            // if (nextElement) {
                            //     nextElement.classList.remove("transition-section--hover--waiting");
                            // }
                        })
                        
                    }
                },
                onLeaveBack: function() {
                    if (isScrollTriggerEnabled) {
                        paths.forEach((path) => {
                            path.classList.remove("loading-border");
                        });
                        if(section.classList.contains("transition-section--active")) {
                        section.classList.remove("transition-section--active");
                        section.classList.add('transition-section--hover');
        
        
                            const previousElement = section.previousElementSibling;
                            const nextElement = section.nextElementSibling;
                            
                            // if (previousElement && previousElement.classList.contains("section-content")) {
                            //     previousElement.classList.add("transition-section--hover--waiting");
                            // }
                        
                            // if (nextElement) {
                            //     nextElement.classList.add("transition-section--hover--waiting");
                            // }
                        }
                    }
                },
            });
        
            section.addEventListener('click', () => {
                if(section.classList.contains('transition-section--active')) {
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
            }
            })
        
            section.addEventListener("click", function(event) {
                const clickX = event.clientX;
                const clickY = event.clientY;
                const rect = section.getBoundingClientRect();
        
                if (clickX >= rect.right - 64 && clickX <= rect.right &&clickY >= rect.top &&clickY <= rect.top + 64) {
                    section.classList.add('transition-section--hover');
                    section.classList.remove('loading-border');
        
                    sections.forEach((section) => {
                    section.classList.add('transition-section--hover');
                    });
        
                    mainElement.style.height = newHeight;
        
                    console.log(isScrollTriggerEnabled);
                    const elementsClasse1 = document.querySelectorAll(".transition-section--hover");
                    compteurClasse1 = elementsClasse1.length;
        
                    if (compteurClasse1 === nombreElementsAttendu) {
                        isScrollTriggerEnabled = true;
                    }
                    ScrollTrigger.refresh(); // Actualise manuellement le déclencheur
        
        
                }
            });
        
        
        
        
        
        });
        
        
        
        //Redimensionnent du burgerMenu
        
        // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
        let vh = window.innerHeight * 0.01;
        // Then we set the value in the --vh custom property to the root of the document
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        
        //Redimensionnent du burgerMenu
        
}


if (mediaQueryDesktop.matches) {
    const items = document.querySelectorAll(".section-navigation__item");
    const sections = document.querySelectorAll(".section-content");

    let activeIndex = -1;
    let isFirstHover = true;

    sections.forEach((section) => {
        section.classList.remove("transition-section--hover");

    });

    items.forEach((item, index) => {
        item.addEventListener('mouseenter', () => {
            mainElement.style.height = "auto";

            sections.forEach((section, sectionIndex) => {
                if (sectionIndex !== index) {
                    gsap.set(section, { display: 'none' });
                } else {
                    gsap.set(section, { display: 'block' });
                    section.classList.add("transition-section--active");
                
                    if (isFirstHover) {
                        isFirstHover = false;
                        gsap.to(section, {
                            duration: 0.5,
                            height: '180px',
                            ease: 'expo.out',
                            onComplete: () => {
                                section.classList.add('animation-complete');
                            }
                        });
                    } else {
                        section.style.height = '180px';
                    }
                }
            });
    
        activeIndex = index;
        });
    });
    
    sections.forEach((section, index) => {
        if (index !== activeIndex) {
            section.style.display = 'none';
        } else if (!isFirstHover && !section.classList.contains('animation-complete') && !section.classList.contains('transition-section--active')) {
            section.style.height = '180px';
            section.classList.add("transition-section--active");
        } else  {
            gsap.to(section, {
                duration: 0.5,
                height: '180px',
                ease: 'expo.out',})
        }

        section.addEventListener('click', () => {
            if(section.classList.contains('transition-section--active')) {
                section.style.height = "auto"
            isScrollTriggerEnabled = false;
            closeSection = true;
    
            sections.forEach((section) => {
                section.classList.remove('transition-section--active');
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
        }
        })
    });

    
}




const gradientAnimation = gsap.timeline({ repeat: -1, yoyo: true });
    gradientAnimation.to("#a stop:first-child", { attr: { "stop-color": "#8C8CC0" }, duration: 3 });
    gradientAnimation.to("#a stop:last-child", { attr: { "stop-color": "#86A8E7" }, duration: 2 }, "-=2");





