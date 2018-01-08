import menu from './common/menu';
import preloader from './common/preloader';
import scrollIt from "./common/scrollIt";
import slider from './common/slider';

document.addEventListener("DOMContentLoaded", function(e) {
    preloader();
    menu();

    document.querySelector(".header__arrow").addEventListener("click", () => {
        scrollIt(document.querySelector(".main"), 500, "easeOutQuad");
    });
    document.querySelector(".arrow--up").addEventListener("click", () => {
        scrollIt(document.querySelector(".main-wrapper"), 500, "easeOutQuad");
    });
    slider();
    console.log('test my_works');

});