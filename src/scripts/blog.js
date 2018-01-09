import menu from './common/menu';
import preloader from './common/preloader';
import blogScroll from './common/blogScroll';

document.addEventListener("DOMContentLoaded", function(e) {
    preloader();
    menu();
    blogScroll();
    console.log('test blog');
});