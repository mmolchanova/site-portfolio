// $(function() {
//     var map;
//     function initMap() {
//         map = new google.maps.Map(document.getElementById('map'), {
//         center: {lat: -34.397, lng: 150.644},
//         zoom: 8
//         });
//     }
// });

var initMap = () => {
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
        url: '/assets/images/svg_icons/map_marker.svg',
        size: new google.maps.Size(45, 55),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 55)
    };

    var marker = new google.maps.Marker({position: markerPos, map: map, icon: markerIcon});

    map.setOptions({styles: styles.desert});
};

var styles = {
    default: null,
    desert: [
        {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#444444"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#f2f2f2"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "lightness": 45
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#46bcec"
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#e7a731"
                }
            ]
        }
    ]
}

// global.initMap = initMap;
window.initMap = initMap;


console.log('in map.js')
