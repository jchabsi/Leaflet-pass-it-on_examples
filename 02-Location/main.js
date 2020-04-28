//Creates the map object
var map = L.map('mapid').fitWorld();;    

//Sets the Tile layer
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map & Data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>',
    maxZoom: 18
}).addTo(map);

//Instead of setting a lat,lon like //.setView([-32.94682, -60.63932], 15); we use locate to get current location
map.locate({setView: true, maxZoom: 16});  

//Events for handling location
//when location is found
map.on('locationfound', onLocationFound);
function onLocationFound(e) {
    var radius = e.accuracy;

    L.marker(e.latlng).addTo(map)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();

    L.circle(e.latlng, radius).addTo(map);
}

//When there is an error trying to determine location
map.on('locationerror', onLocationError);
function onLocationError(e) {
    alert(e.message);
}
