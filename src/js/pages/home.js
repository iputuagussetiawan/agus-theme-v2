import Swiper from 'swiper/bundle';
import anime from 'animejs/lib/anime.es.js';
import { gsap } from "gsap";
import 'swiper/css/bundle';

import Navbar from '../modules/Navbar'
const navbar=new Navbar();

document.addEventListener("DOMContentLoaded", () => {
    navbar.events();
});

if (document.querySelectorAll('.banner-swiper').length) {
    document.querySelectorAll('.big-slider-item').forEach((element, i) => {
        i++;
        if (i === 1) {
            element.classList.add('bs-active');
        }
    });

    setTimeout(() => {
        document.querySelectorAll('.bs-ov').forEach(element => {
            element.classList.add('bs-ov-in');
        });
    }, 300);

    setTimeout(() => {
        document.querySelectorAll('.bs-bullets .swiper-pagination-bullet').forEach((element, i) => {
            setTimeout(() => {
            element.classList.add('anim-in');
          }, i * 200);
        });
    }, 2050);
    let bannerSwiper = new Swiper(".banner-swiper", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            type: 'bullets',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">0' + (index + 1) + '</span>';
            }
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 10000,
            waitForTransition: false,
            disableOnInteraction: false
        },
        speed: 2000,
        direction: 'vertical',
        mousewheel: {
            invert: false,
        },
    
        on: {
            transitionEnd: function () {
                const activeBullet = document.querySelector('.swiper-pagination-bullet-active');
        
                document.querySelectorAll('.swiper-pagination-bullet').forEach(item => {
                    item.classList.remove('progress-init');
                });
                setTimeout(() => {
                    activeBullet.classList.add('progress-init');
                }, 1);
    
                document.querySelectorAll('.big-slider-item').forEach(item => {
                    item.classList.remove('bs-active');
                });
                const activeSlide = document.querySelector('.swiper-slide-active').getAttribute('data-slide');
                document.querySelectorAll(`.${activeSlide}`).forEach(element => {
                    element.classList.add('bs-active');
                });
            },
            transitionStart: function () {
                document.querySelectorAll('.bs-ov').forEach(element => {
                    element.classList.add('trans-start');
                });
            },
            slideNextTransitionStart: function () {

                var tl = gsap.timeline();


                let overlayAnimNext = anime({
                    translateY: ['100%', '0'],
                    easing: 'easeInOutCubic',
                    duration: 600,
                    autoplay: true,
                    loop: false,
                    targets: '.bs-ov',
                    delay: function (el, i) {
                        return i * 50;
                    },
                });
                
                var titleAnimNext = anime({
                    autoplay: true,
                    loop: false,
                    targets: '.bs-active .title .span-line',
                    translateY: ['0', '-110%'],
                    easing: "easeInExpo",
                    duration: 650,
                    delay: anime.stagger(100)
                });

            },
            slideNextTransitionEnd: function () {
                let overlayAnimNextEnd = anime({
                    translateY: ['0', '-100%'],
                    easing: 'easeInOutCubic',
                    duration: 600,
                    autoplay: true,
                    loop: false,
                    targets: '.bs-ov',
                    delay: function (el, i) {
                        return i * 50;
                    },
                });
                var titleAnimNextEnd = anime({
                    autoplay: true,
                    loop: false,
                    targets: '.bs-active .title .span-line',
                    translateY: ['110%', '0'],
                    easing: "easeOutExpo",
                    duration: 650,
                    delay: anime.stagger(100)
                });
            },
            slidePrevTransitionStart: function () {
                let overlayAnimPrev = anime({
                    translateY: ['-100%', '0'],
                    easing: 'easeInOutCubic',
                    duration: 600,
                    autoplay: true,
                    loop: false,
                    targets: '.bs-ov',
                    delay: function (el, i) {
                        return i * 50;
                    },
                });
                var titleAnimPrev = anime({
                    autoplay: true,
                    loop: false,
                    targets: '.bs-active .title .span-line',
                    translateY: ['0', '110%'],
                    easing: "easeInExpo",
                    duration: 650,
                    delay: anime.stagger(100, {
                        from: 'last'
                    })
                });
            },
            slidePrevTransitionEnd: function () {
                let overlayAnimPrev = anime({
                    translateY: ['0', '100%'],
                    easing: 'easeInOutCubic',
                    duration: 600,
                    autoplay: true,
                    loop: false,
                    targets: '.bs-ov',
                    delay: function (el, i) {
                        return i * 50;
                    },
                });
                var titleAnimPrevEnd = anime({
                    autoplay: true,
                    loop: false,
                    targets: '.bs-active .title .span-line',
                    translateY: ['-110%', '0'],
                    easing: "easeOutExpo",
                    duration: 650,
                    delay: anime.stagger(100, {
                        from: 'last'
                    })
                });
            },
        }
    });
    document.querySelector('.swiper-pagination-bullet-active').classList.add('progress-init');
}

