import mapStyle from "./mapStyle";

export default function initMap() {
        var centerPos = {lat: 55.031, lng: 82.910};
        var markerPos = {lat: 55.046, lng: 82.910};
        
        if (document.documentElement.clientWidth < 481) {
            centerPos = {lat: 55.040, lng: 82.910};
        };

        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 14,
            center: centerPos,
            mapTypeControl: false,
            disableDefaultUI: true,
            gestureHandling: 'none'
        });

        var markerIcon = {
            url: './assets/images/svg_icons/map_marker.svg',
            size: new google.maps.Size(45, 55),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(0, 55)
        };

        var marker = new google.maps.Marker({position: markerPos, map: map, icon: markerIcon});

        map.setOptions({styles: mapStyle});

    // global.initMap = initMap;

    console.log('in map.js');
};
