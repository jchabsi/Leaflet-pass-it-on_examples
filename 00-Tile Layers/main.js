//Creates the map object
var mymap = L.map('mapid').setView([-32.94682, -60.63932], 15);         

//Sets the Tile layer
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map & Data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>',
    maxZoom: 18
}).addTo(mymap);



