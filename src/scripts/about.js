import preloader from './common/preloader';
import initMap from './common/map';
import menu from './common/menu';

document.addEventListener("DOMContentLoaded", function(e) {
    preloader();
    menu();
    window.initMap = initMap;

    console.log('test about');
});