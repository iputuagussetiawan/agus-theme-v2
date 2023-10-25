import Swiper from 'swiper/bundle';
import anime from 'animejs/lib/anime.es.js';
import MouseFollower from "mouse-follower";
import { gsap } from "gsap";
import 'swiper/css/bundle';
import Navbar from '../modules/Navbar'
const navbar=new Navbar();

MouseFollower.registerGSAP(gsap);

const cursor = new MouseFollower();

document.addEventListener("DOMContentLoaded", () => {
    navbar.events();
});

if (document.querySelectorAll('.list-titles').length) {
    setTimeout(() => {
      document.querySelectorAll('.list-image').forEach((element, i) => {
        setTimeout(() => {
          element.classList.add('ino');
        }, i * 250);
      });
  
      setTimeout(() => {
        document.querySelectorAll('.line').forEach((line) => {
          line.classList.remove('line-arange');
        });
      }, 200);
  
      setTimeout(() => {
        document.querySelectorAll('.list-title').forEach((element, i) => {
          setTimeout(() => {
            element.classList.add('ino');
          }, i * 100);
        });
      }, 1000);
  
      setTimeout(() => {
        document.querySelectorAll('.lc-prev i, .lc-next i, .lt-current, .lt-total').forEach((element) => {
          element.classList.add('ino');
        });
      }, 1250);
  
      setTimeout(() => {
        document.querySelectorAll('.site-branding img').forEach((element) => {
          element.classList.add('logo-in');
        });
      }, 1500);
  
      setTimeout(() => {
        document.querySelectorAll('.toggle-line, .list-carousel').forEach((element) => {
          element.classList.add('toggle-line-in', 'list-init');
        });
      }, 2000);
    }, 0);
  }

if (document.querySelectorAll('.list-titles').length > 0) {
    const lines = document.querySelectorAll('.line');
    lines.forEach((line) => line.classList.add('line-arange'));
    const listImages = Array.from(document.querySelectorAll('.list-image'));
    listImages.forEach((element, index) => {
        const slide = element.setAttribute('data-index', `slide-${index + 1}`);
        const slideIna = element.setAttribute('data-slide', index + 1);
        const totIndex = listImages.length;
        document.querySelector('.lt-total').textContent = '0' + totIndex;
        const slideClass = element.dataset.index;
        element.classList.add(slideClass);
        window.slide = slide;
        const title = element.querySelector('.list-p-title').textContent;
        window.title = title;
    });

    var interleaveOffset = 0.5;
    var listImagesSwiper = new Swiper('.list-images', {
        slidesPerView: 'auto',
        // slidesPerView: 2,
        speed: 750,
        spaceBetween: 0,
        watchSlidesProgress: true,
        parallax: true,
        navigation: {
            nextEl: '.lc-next',
            prevEl: '.lc-prev',
        },
        pagination: {
            el: '.list-titles',
            type: 'bullets',
            bulletClass: 'list-title',
            clickable: false,
            renderBullet: function (index, className) {
                var realIndex = index + 1;
                var slideSelector = '.slide-' + realIndex;
                return '<a href="" data-push="' + index + '"data-select="' + slideSelector + '" class="list-title"></a>';
            }
        },
        breakpoints: {
            750: {
                centeredSlides: true,
                spaceBetween: 250,
            },
    
        },
        containerClass: 'list-images',
        centeredSlides: false,
        on: {
            transitionStart: function () {

                //var currIndex = $('.swiper-slide-active').data('slide')
                const currIndex = document.querySelector('.swiper-slide-active').dataset.slide;

                // $('.lt-current').text('0' + currIndex)
                document.querySelector('.lt-current').textContent = '0' + currIndex;

                const swiperSlideActive = document.querySelector('.swiper-slide-active');
                const listCarousel = document.querySelector('.list-carousel');

                if (swiperSlideActive.classList.contains('dark')) {
                    listCarousel.classList.add('dark-slide-init');
                } else {
                    listCarousel.classList.remove('dark-slide-init');
                }

                // if ($('.swiper-slide-active').hasClass('dark')) {

                //     $('.list-carousel').addClass('dark-slide-init')

                // } else {
                //     $('.list-carousel').removeClass('dark-slide-init')
                // }

            }
        },
    });

    document.querySelectorAll('.list-title').forEach(function(element) {
        const slideSelect = element.dataset.select;
        const slide = document.querySelector(slideSelect);
        
        if (slide) {
            const title = slide.querySelector('.list-p-title').textContent;
            const listURL = slide.querySelector('a').getAttribute('href');
            
            element.setAttribute('href', listURL);
            element.textContent = title;
            element.setAttribute('data-hover', title);
        }
    });

    const listTitles = document.querySelectorAll('.list-title');
    const listScroll = document.querySelector('.list-scroll');

    listTitles.forEach((title) => {
        title.addEventListener('mouseenter', () => {
            const slidePush = title.dataset.push;
            listImagesSwiper.slideTo(slidePush);
        });
    });

    //const listTitlesContainer = document.querySelector('.list-titles');

    // listTitlesContainer.addEventListener('mouseenter', () => {
    //     listScroll.classList.remove('hidden');
    // });

    // listTitlesContainer.addEventListener('mouseleave', () => {
    //     listScroll.classList.add('hidden');
    // });
    
}
const listTitles = document.querySelector('.list-titles');

// Create a new div element to wrap the <a> elements
const newDiv = document.createElement('div');
newDiv.className = 'list-titles-inner'; // Set the class for the new div

// Loop through all the <a> elements and append them to the new div
const aElements = listTitles.querySelectorAll('a');
aElements.forEach((a) => {
  newDiv.appendChild(a);
});

// Append the new div with the wrapped <a> elements back to the parent element
listTitles.appendChild(newDiv);


// if ($('.list-titles').length > 0) {
//     $('.line').addClass('line-arange');
//     $('.list-image').each(function (i) {
//         var index = i + 1
//         var slide = $(this).attr('data-index', 'slide-' + index);
//         var slideIna = $(this).attr('data-slide', index);
//         var totIndex = $('.list-image').length;
//         $('.lt-total').text('0' + totIndex)
//         var slideClass = $(this).data('index');
//         $(this).addClass(slideClass)
//         window.slide = slide;
//         var title = $(this).find('.list-p-title').text();
//         window.title = title;
//     });
//     var interleaveOffset = 0.5;
//     var listImages = new Swiper('.list-images', {
//         slidesPerView: 'auto',
//         speed: 750,
//         spaceBetween: 0,
//         watchSlidesProgress: true,
//         parallax: true,
//         navigation: {
//             nextEl: '.lc-next',
//             prevEl: '.lc-prev',
//         },
//         pagination: {
//             el: '.list-titles',
//             type: 'bullets',
//             bulletClass: 'list-title',
//             clickable: false,
//             renderBullet: function (index, className) {
//                 var realIndex = index + 1;
//                 var slideSelector = '.slide-' + realIndex;
//                 return '<a href="" data-push="' + index + '"data-select="' + slideSelector + '" class="list-title"></a>';
//             }
//         },
//         breakpoints: {
//             750: {
//                 centeredSlides: true,
//                 spaceBetween: 250,
//             },
//         },
//         containerClass: 'list-images',
//         centeredSlides: false,
//         on: {
//             transitionStart: function () {
//                 var currIndex = $('.swiper-slide-active').data('slide')
//                 $('.lt-current').text('0' + currIndex)
//                 if ($('.swiper-slide-active').hasClass('dark')) {
//                     $('.list-carousel').addClass('dark-slide-init')
//                 } else {
//                     $('.list-carousel').removeClass('dark-slide-init')
//                 }
//             }
//         },
//     });

//     $('.list-title').each(function () {
//         var slideSelect = $(this).data('select');
//         var title = $(slideSelect).find('.list-p-title').text();
//         var listURL = $(slideSelect).find('a').attr('href');
//         $(this).attr('href', listURL)
//         $(this).text(title);
//         $(this).attr('data-hover', title);
//     });
//     $('.list-title').on('mouseenter', function () {
//         var slidePush = $(this).data('push');
//         listImages.slideTo(slidePush)
//     });
//     $('.list-titles').on('mouseenter', function () {
//         $('.list-scroll').removeClass('hidden');
//     });
//     $('.list-titles').on('mouseleave', function () {
//         $('.list-scroll').addClass('hidden');
//     });
//     $('.list-titles').prepend('<span class="scroll-rat"></span>')
//     $('.list-titles').append('<span class="scroll-rat"></span>')
//     Scrollbar.init(document.querySelector('.list-titles'));
//     $('video').each(function () {
//         let $this = $(this),
//             vid = $this.get(0);
//         vid.currentTime = 0;
//         vid.play();
//     })
// };
/* List */



