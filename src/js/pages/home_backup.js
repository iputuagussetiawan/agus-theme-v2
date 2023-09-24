import Swiper from 'swiper/bundle';
import anime from 'animejs/lib/anime.es.js';
import 'swiper/css/bundle';

 /* Big Slider Opening */
if (document.querySelector('.big-slider')) {
    // Your code here
    anime({
        autoplay: true,
        loop: false,
        targets: '.bs-active .title .span-line',
        translateY: ['110%', '0'],
        easing: "easeOutExpo",
        duration: 850,
        delay: anime.stagger(100)
    });

    anime({
        translateY: ['100%', '0'],
        opacity: ['0', '1'],
        easing: 'easeInOutCubic',
        duration: 600,
        autoplay: true,
        loop: false,
        targets: '.bs-active .summary .span-line',
        delay: function (el, i, l) {
            return 1500 + (i * 100);
        },
    })

    anime({
        autoplay: true,
        loop: false,
        targets: '.bs-active .year span, .bs-active .meta div > span',
        translateY: ['110%', '0'],
        easing: "easeOutExpo",
        duration: 850,
        delay: function (el, i, l) {
            return 1500 + (i * 100);
        },
    });

    anime({
        autoplay: true,
        loop: false,
        targets: '.bs-active .category span',
        translateY: ['110%', '0'],
        easing: "easeOutExpo",
        duration: 850,
        delay: 1200,
        complete: function (anim) {
            document.querySelectorAll('.bs-active .category').forEach(element => {
                element.classList.add('in');
            });
        }
    });



    setTimeout(function () {
        document.querySelectorAll('.bs-ov').forEach(element => {
            element.classList.add('bs-ov-in');
        });
    }, 300)

    setTimeout(function () {
        document.querySelectorAll('.big-slide-pag i').forEach(element => {
            element.classList.add('anim-in');
        });
        document.querySelectorAll('.project-url').forEach(element => {
            element.classList.add('loaded');
        });
    }, 2000);

    setTimeout(function () {
        document.querySelectorAll('.bs-bullets .swiper-pagination-bullet').forEach((element, i) => {
            setTimeout(() => {
                element.classList.add('anim-in');
            }, i * 200);
        });
    }, 2050);
}
/* Big Slider Opening */

if (document.querySelectorAll('.big-slider').length > 0) {
    // document.querySelectorAll('.line').forEach(element => {
    //     element.classList.add('line-arange');
    // });
    document.querySelectorAll('.big-slider-item').forEach((element, i) => {
        i++;
        element.classList.add(`slider-item-${i}`);
        const bigImage = element.querySelector('.image').innerHTML;
        const autoPlay = element.dataset.autoplay;
        document.querySelector('.bs-splitted .swiper-wrapper').insertAdjacentHTML(
            'beforeend',
            `<div data-swiper-autoplay="${autoPlay}" data-slide="slider-item-${i}" class="swiper-slide"><div class="big-image">${bigImage}</div></div>`
        );
        if (i === 1) {
            element.classList.add('bs-active');
        }
        const title = element.querySelector('.title');
        const summary = element.querySelector('.summary');
        // if (title) {
        //     title.splitLines({
        //     tag: '<div><span class="span-line"></div>',
        //     keepHtml: true,
        //     });
        // }
        // if (summary) {
        //     summary.splitLines({
        //     tag: '<div><span class="span-line"></div>',
        //     keepHtml: true,
        //     });
        // }

        // console.log(i)
    });
    // document.querySelectorAll('.big-slide-button').forEach(button => {
    //     button.innerHTML = `<a href="#" class="project-url"><p class="bsb-link"><p></a>`;
    // });
    // document.querySelectorAll('.big-slide-button .project-url').forEach(projectUrl => {
    //     projectUrl.insertAdjacentHTML('afterbegin', '<span></span><span></span><span></span><span></span>');
    // });
    // document.querySelectorAll('.bsb-link').forEach(link => {
    //     link.innerHTML = '<wrap></wrap>';
    // });
    // const bsURLFirst = document.querySelector('.big-slider-item a:first-child').getAttribute('href');
    // document.querySelectorAll('.big-slide-button .project-url').forEach(projectUrl => {
    //     projectUrl.setAttribute('href', bsURLFirst);
    // });
    // document.querySelectorAll('.big-image').forEach(image => {
    //     image.classList.add('big-image-anim');
    // });

    // let bannerSwiper = new Swiper(".banner-swiper", {
    //     slidesPerView: 1,
    //     spaceBetween: 0,
    //     loop: true,
    //     pagination: {
    //         el: ".swiper-pagination",
    //         type: 'bullets',
    //         clickable: true,
    //         renderBullet: function (index, className) {
    //             return '<span class="' + className + '">0' + (index + 1) + '</span>';
    //         }
    //     },
    //     navigation: {
    //         nextEl: ".swiper-button-next",
    //         prevEl: ".swiper-button-prev",
    //     },
    //     autoplay: {
    //         delay: 10000,
    //         waitForTransition: false,
    //         disableOnInteraction: false
    //     },
    //     speed: 1300,
    //     direction: 'vertical',
    //     mousewheel: {
    //         invert: false,
    //     },
    
    //     on: {
    //         transitionEnd: function () {
    //             const activeBullet = document.querySelector('.swiper-pagination-bullet-active');
    //             activeBullet.classList.remove('progress-init');
    //             setTimeout(() => {
    //                 activeBullet.classList.add('progress-init');
    //             }, 100);
    //         },
    //         transitionStart: function () {
    //             document.querySelectorAll('.bs-ov').forEach(element => {
    //                 element.classList.add('trans-start');
    //             });
    //         },
    //         slideNextTransitionStart: function () {
    //             // var titleAnimNext = anime({
    //             //     autoplay: true,
    //             //     loop: false,
    //             //     targets: '.banner-swiper__title-text',
    //             //     translateY: ['0', '-110%'],
    //             //     easing: "easeInExpo",
    //             //     duration: 650,
    //             //     delay: anime.stagger(100)
    //             // });
    
    //             let overlayAnimNext = anime({
    //                 translateY: ['100%', '0'],
    //                 easing: 'easeInOutCubic',
    //                 duration: 600,
    //                 autoplay: true,
    //                 loop: false,
    //                 targets: '.bs-ov',
    //                 delay: function (el, i) {
    //                     return i * 50;
    //                 },
    //             });
    //         },
    //         slideNextTransitionEnd: function () {
    //             // var titleAnimNextEnd = anime({
    //             //     autoplay: true,
    //             //     loop: false,
    //             //     targets: '.banner-swiper__title-text',
    //             //     translateY: ['110%', '0'],
    //             //     easing: "easeOutExpo",
    //             //     duration: 650,
    //             //     delay: anime.stagger(100)
    //             // });
    //             let overlayAnimNextEnd = anime({
    //                 translateY: ['0', '-100%'],
    //                 easing: 'easeInOutCubic',
    //                 duration: 600,
    //                 autoplay: true,
    //                 loop: false,
    //                 targets: '.bs-ov',
    //                 delay: function (el, i) {
    //                     return i * 50;
    //                 },
    //             });
    //         },
    //         slidePrevTransitionStart: function () {
    //             let overlayAnimPrev = anime({
    //                 translateY: ['-100%', '0'],
    //                 easing: 'easeInOutCubic',
    //                 duration: 600,
    //                 autoplay: true,
    //                 loop: false,
    //                 targets: '.bs-ov',
    //                 delay: function (el, i) {
    //                     return i * 50;
    //                 },
    //             });
    //         },
    //         slidePrevTransitionEnd: function () {
    //             let overlayAnimPrev = anime({
    //                 translateY: ['0', '100%'],
    //                 easing: 'easeInOutCubic',
    //                 duration: 600,
    //                 autoplay: true,
    //                 loop: false,
    //                 targets: '.bs-ov',
    //                 delay: function (el, i) {
    //                     return i * 50;
    //                 },
    //             });
    //         },
    //     }
    // });
    
    document.querySelector('.swiper-pagination-bullet-active').classList.add('progress-init');
}

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


