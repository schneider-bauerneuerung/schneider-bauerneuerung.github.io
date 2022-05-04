---
---
var locations = [
    { name: "Softwarepark Hagenberg", focus: "", lat: 48.368146, lng: 14.512456, address: "Softwarepark", zip: 4232, city: "Hagenberg im Mühlkreis", country: "Austria", link: "https://www.google.at/maps/place/FH+Ober%C3%B6sterreich+Campus+Hagenberg/@48.368346,14.5128533,17z/data=!3m1!4b1!4m5!3m4!1s0x4773a69939092d2b:0x94ed87d16bf323b!8m2!3d48.368346!4d14.515042"},
    // { name: "Campus Steyr", focus: "Augmented / Virtual Reality", lat: 48.042993, lng: 14.418547, address: "Wehrgrabengasse 1", zip: 4400, city: "Steyr", country: "Austria", link:"https://www.google.at/maps/place/FH+Ober%C3%B6sterreich+Campus+Steyr/@48.042993,14.4163693,17z/data=!3m1!4b1!4m5!3m4!1s0x4773c5f9a91be29d:0x494d60bb0ba62703!8m2!3d48.042993!4d14.418558"},
    // { name: "Campus Wels", focus: "Additive Manufacturing", lat: 48.161410, lng: 14.027638, address: "Franz-Fritsch-Straße 11", zip: 4600, city: "Wels", country: "Austria", link: "https://www.google.at/maps/place/FH+Ober%C3%B6sterreich/@48.1548429,14.0091091,17z/data=!3m1!4b1!4m5!3m4!1s0x4773f29327fdd925:0x1e544b653b14aea5!8m2!3d48.1548429!4d14.0112978"}
    ];
var markers = [];

var mapstyles = [
    {elementType: 'geometry', stylers: [{color: '{{ site.data.colors.grey }}'}]},
    {elementType: 'labels.text.stroke', stylers: [{color: '{{ site.data.colors.dark-grey }}'}]},
    {elementType: 'labels.text.fill', stylers: [{color: '{{ site.data.colors.brand-primary }}'}]},
    {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{color: '{{ site.data.colors.text-light }}'}]
    },
    {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{color: '{{ site.data.colors.text-light }}'}]
    },
    {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{color: '{{ site.data.colors.green }}'}]
    },
    {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{color: '{{ site.data.colors.text-light }}'}]
    },
    {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{color: '{{ site.data.colors.light-grey }}'}]
    },
    {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{color: '{{ site.data.colors.dark-grey }}'}]
    },
    {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{color: '{{ site.data.colors.text-light }}'}]
    },
    {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{color: '{{ site.data.colors.light-grey }}'}]
    },
    {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{color: '{{ site.data.colors.dark-grey }}'}]
    },
    {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{color: '{{ site.data.colors.text-light }}'}]
    },
    {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{color: '#2f3948'}]
    },
    {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
    },
    {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{color: '{{ site.data.colors.brand-primary }}'}]
    },
    {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{color: '{{ site.data.colors.text-light }}'}]
    },
    {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{color: '{{ site.data.colors.light-grey }}'}]
    }
    ];

function makeInfoWindowEvent(map, infowindow, contentString, marker) {
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(contentString);
    infowindow.open(map, marker);
  });
}

function getContentString(i) {
    return "<div><h4>" + locations[i].name + "</h4><h5><i>" 
    + locations[i].focus + "</i></h5><p>" + locations[i].address 
    + "<br/>" + locations[i].zip + " " + locations[i].city + ", " + locations[i].country 
    + "<br/><a href='" + locations[i].link + "' target='_blank'>Google Maps</a></p></div>";
}

function initMap() {
    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 48.2085, lng: 14.3802},
        scrollwheel: false,
        zoom: 9,
        styles: mapstyles
    });

    var infowindow = new google.maps.InfoWindow();

    for(var i in locations) {
        var marker = new google.maps.Marker({
            position: {lat: locations[i].lat, lng: locations[i].lng },
            map: map,
            title: locations[i].name,
            animation: google.maps.Animation.DROP
        });

        makeInfoWindowEvent(map, infowindow, getContentString(i), marker);

        markers.push(marker);

        // if(i == 0) {
        //     var curIdx = i;  
        //     window.setTimeout(function() {
        //         infowindow.setContent(getContentString(curIdx));
        //         infowindow.open(map, markers[curIdx]);
        //     }, 2000);
        // }
    }
    

}


window.initMap = initMap;