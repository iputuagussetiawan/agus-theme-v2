import Offcanvas from 'bootstrap/js/dist/offcanvas';

// example importing other Bootstrap Javascript Module
import Modal from 'bootstrap/js/dist/modal';


const navItems = document.querySelectorAll('.menu .menu-item');

navItems.forEach((element) => {
    //element.classList.remove('menu-item-hover');
    element.addEventListener('mouseenter', function(event){
        let hoveredElement = event.target;
        hoveredElement.classList.add('menu-item-hover');
    });
    element.addEventListener('mouseleave', function(event){
        let hoveredElement = event.target;
        hoveredElement.classList.remove('menu-item-hover');
    });
});