import flipper from './common/flipper';
flipper();

import initMap from './common/map';
window.initMap = initMap;

import menu from './common/menu';
menu();

import preloader from './common/preloader';
preloader();

console.log('test');