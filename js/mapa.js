
function initMap() {
    // Create an array of styles.
    var styles = [
        {
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#212121"
                }
            ]
        },
        {
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#757575"
                }
            ]
        },
        {
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#212121"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#757575"
                }
            ]
        },
        {
            "featureType": "administrative.country",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#9e9e9e"
                }
            ]
        },
        {
            "featureType": "administrative.land_parcel",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative.locality",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#bdbdbd"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#757575"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#181818"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#616161"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#1b1b1b"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#2c2c2c"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#8a8a8a"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#373737"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#3c3c3c"
                }
            ]
        },
        {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#4e4e4e"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#616161"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#757575"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#3d3d3d"
                }
            ]
        }
    ]

    // Create a new StyledMapType object, passing it the array of styles,
    // as well as the name to be displayed on the map type control.
    var styledMap = new google.maps.StyledMapType(styles,
        {name: "Styled Map"});

    var myLatlng = new google.maps.LatLng(40.432602, -3.711673);
    var mapOtions = {
        center: myLatlng,
        zoom: 13,
        scrollwheel:false,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        }
    };
    var map = new google.maps.Map(document.getElementById('map'),  mapOtions );

    var image = 'images/chinchetablanca2.png';
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        icon: image,
        title: 'Hello World!'
    });

    var contentStringChamberi = '' +
        '<section>'+
        '<img src="images/white2.png" width="16px">'+
        '<span><h3 style="padding-bottom: 16px">Filomax Chamberí</h3></span>'+
        '<span>Dirección :</span>'+
        '<p style="padding-bottom: 0;margin-bottom: 0">C/Blasco de Garay 25, Madrid 28015</p>'+
        '<p>Metro Arguelles - Islas Filipinas</p>'+
        '<span>Teléfono:</span>'+
        '<p> 914 21 66 17</p>'+
        '<span>Horario:</span>'+
        '<p>Lunes: 16:00 - 21:00 </p>'+
        '<p>Martes a Viernes: 11:00 - 14:00 y de 16:00 - 21:00</p>'+
        '<p>Sabados: 10:00 - 14:00 y de 16:00 - 20:00</p>'+
        '</section>';

    var infowindowChamberi = new google.maps.InfoWindow({
        content: contentStringChamberi
    });

    marker.addListener('click', function() {
        infowindowChamberi.open(map, marker);
    });

    var marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(40.4107833,-3.6986464),
        map: map,
        icon: image,
        title: 'Hello World!'
    });

    var contentStringLavapies= '' +
        '<section>'+
        '<img src="images/white2.png" width="16px">'+
        '<span><h3 style="padding-bottom: 16px">Filomax Lavapiés</h3></span>'+
        '<span>Dirección :</span>'+
        '<p style="padding-bottom: 0;margin-bottom: 0">C/Santa Isabel 32, Madrid 28015</p>'+
        '<span>Teléfono:</span>'+
        '<p> 912 45 30 17</p>'+
        '<span>Horario:</span>'+
        '<p>Lunes: 16:00 - 21:00 </p>'+
        '<p>Martes a Viernes: 11:00 - 14:00 y de 16:00 - 21:00</p>'+
        '<p>Sabados: 10:00 - 14:00 y de 16:00 - 20:00</p>'+
        '</section>';

    var infowindowLavapies = new google.maps.InfoWindow({
        content: contentStringLavapies
    });

    marker2.addListener('click', function() {
        infowindowLavapies.open(map, marker2);
    });

    // To add the marker to the map, call setMap();
    marker.setMap(map);
    marker2.setMap(map);

    //Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');
}