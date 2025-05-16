var map = L.map('map').setView([39.735, -104.949], 11);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([39.64, -104.86]).addTo(map);

var circle = L.circle([39.86, -104.68], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.3,
    radius: 5000
}).addTo(map);

var polygon = L.polygon([
    [39.553824, -105.064316],
    [39.528407, -105.118561],
    [39.513576, -105.03273],
    [39.536881, -105.043716],
    

]).addTo(map);



marker.bindPopup("Cherry Creek Reservoir");
circle.bindPopup("Denver International Airport Airspace");
polygon.bindPopup("Chatfield State Park");

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


