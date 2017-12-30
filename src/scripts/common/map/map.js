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
    var uluru = {lat: 55.046, lng: 82.910};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: uluru,
        mapTypeControl: false,
        disableDefaultUI: true
    });
    var marker = new google.maps.Marker({position: uluru, map: map});

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



// {
//     elementType: 'geometry',
//     stylers: [{color: '#f5f5f5'}]
// },
// {
//     elementType: 'labels.icon',
//     stylers: [{visibility: 'off'}]
// },
// {
//     elementType: 'labels.text.fill',
//     stylers: [{color: '#616161'}]
// },
// {
//     elementType: 'labels.text.stroke',
//     stylers: [{color: '#f5f5f5'}]
// },
// {
//     featureType: 'administrative.land_parcel',
//     elementType: 'labels.text.fill',
//     stylers: [{color: '#bdbdbd'}]
// },
// {
//     featureType: 'man_made',
//     elementType: 'geometry.stroke',
//     stylers: [{color: '#bdbdbd'}]
// },
// {
//     featureType: 'poi',
//     elementType: 'geometry',
//     stylers: [{color: '#eeeeee'}]
// },
// {
//     featureType: 'poi',
//     elementType: 'labels.text.fill',
//     stylers: [{color: '#757575'}]
// },
// {
//     featureType: 'poi.park',
//     elementType: 'geometry',
//     stylers: [{color: '#e5e5e5'}]
// },
// {
//     featureType: 'poi.park',
//     elementType: 'labels.text.fill',
//     stylers: [{color: '#9e9e9e'}]
// },
// {
//     featureType: 'road',
//     elementType: 'geometry',
//     stylers: [{color: '#ffffff'}]
// },
// {
//     featureType: 'road.arterial',
//     elementType: 'labels.text.fill',
//     stylers: [{color: '#757575'}]
// },
// {
//     featureType: 'road.highway',
//     elementType: 'geometry',
//     stylers: [{color: '#dadada'}]
// },
// {
//     featureType: 'road.highway',
//     elementType: 'labels.text.fill',
//     stylers: [{color: '#616161'}]
// },
// {
//     featureType: 'road.local',
//     elementType: 'labels.text.fill',
//     stylers: [{color: '#9e9e9e'}]
// },
// {
//     featureType: 'transit.line',
//     elementType: 'geometry',
//     stylers: [{color: '#e5e5e5'}]
// },
// {
//     featureType: 'transit.station',
//     elementType: 'geometry',
//     stylers: [{color: '#eeeeee'}]
// },
// {
//     featureType: 'water',
//     elementType: 'geometry',
//     stylers: [{color: '#86A77A'}]
// },
// {
//     featureType: 'water',
//     elementType: 'labels.text.fill',
//     stylers: [{color: '#9e9e9e'}]
// }