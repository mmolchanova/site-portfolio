import menu from './common/menu';
import preloader from './common/preloader';

document.addEventListener("DOMContentLoaded", function(e) {
    preloader();
    menu();
    console.log('test blog');
});