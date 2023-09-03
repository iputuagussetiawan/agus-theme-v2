import Swiper from 'swiper/bundle';
import anime from 'animejs/lib/anime.es.js';
import 'swiper/css/bundle';

if (document.querySelectorAll('.banner-swiper').length) {

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
}
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
    // autoplay: {
    //     delay: 10000,
    //     waitForTransition: false,
    //     disableOnInteraction: false
    // },
    speed: 1300,
    direction: 'vertical',
    mousewheel: {
        invert: false,
    },

    on: {
        transitionEnd: function () {
            const activeBullet = document.querySelector('.swiper-pagination-bullet-active');
            activeBullet.classList.remove('progress-init');
            setTimeout(() => {
                activeBullet.classList.add('progress-init');
            }, 1000);
        },
        transitionStart: function () {
            document.querySelectorAll('.bs-ov').forEach(element => {
                element.classList.add('trans-start');
            });
        },
        slideNextTransitionStart: function () {
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
        },
    }
});

document.querySelector('.swiper-pagination-bullet-active').classList.add('progress-init');

