import flipper from './common/flipper';
import preloader from './common/preloader';

document.addEventListener("DOMContentLoaded", function(e) {
    preloader();
    flipper();
    console.log('test index');
});