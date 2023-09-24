import Swiper from 'swiper/bundle';
import anime from 'animejs/lib/anime.es.js';
import 'swiper/css/bundle';


if (document.querySelectorAll('.big-slider').length > 0) {
    // document.querySelectorAll('.line').forEach(line => {
    //   line.classList.add('line-arange');
    // });
    document.querySelectorAll('.big-slider-item').forEach((element, i) => {
        i++;
        element.classList.add(`slider-item-${i}`);
        //const bigImage = element.querySelector('.image').innerHTML;
        const autoPlay = element.dataset.autoplay;
        // document.querySelector('.bs-splitted .swiper-wrapper').insertAdjacentHTML(
        //     'beforeend',
        //     `<div data-swiper-autoplay="${autoPlay}" data-slide="slider-item-${i}" class="swiper-slide"><div class="big-image">${bigImage}</div></div>`
        // );

        if (i === 1) {
            element.classList.add('bs-active');
        }

      
    });
}
