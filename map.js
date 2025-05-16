var map = L.map('map').setView([39.735, -104.949], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([39.7435, -105.0132]).addTo(map);

var circle = L.circle([39.762, -104.994], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.3,
    radius: 300
}).addTo(map);

var polygon = L.polygon([
    [39.744, -104.96],
    [39.744, -104.941],
    [39.755, -104.95]
]).addTo(map);

marker.bindPopup("This is where the <b>Denver Broncos</b> play")
circle.bindPopup("The park Avenue West Viaduct Exchange").openPopup();;
polygon.bindPopup("City Park and Golf Course");

function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);

