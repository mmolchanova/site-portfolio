import preloader from './common/preloader';
import initMap from './common/map';
import scrollIt from "./common/scrollIt";
import menu from './common/menu';   
import skills from './common/skills';

document.addEventListener("DOMContentLoaded", function(e) {
    preloader();
    menu();
    window.initMap = initMap;
        
    document.querySelector(".header__arrow").addEventListener("click", () => {
        scrollIt(document.querySelector(".main"), 500, "easeOutQuad");
    });

    skills();



    console.log('test about');
});