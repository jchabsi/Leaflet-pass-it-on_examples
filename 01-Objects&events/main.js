//Creates the map object
var mymap = L.map('mapid').setView([-32.94682, -60.63932], 15);        

//Sets the Tile layer
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map & Data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>',
    maxZoom: 18
}).addTo(mymap);

//This is a marker
var marker = L.marker([-32.939947, -60.653590]).addTo(mymap);
var marker2 = L.marker([-32.953865, -60.657382]).addTo(mymap);

//We can draw circles
var circle = L.circle([-32.9475, -60.631], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.3,
    radius: 300
}).addTo(mymap);

//And also polygons
var polygon = L.polygon([
    [-32.960980, -60.619922],
    [-32.945982, -60.628063],
    [-32.937958, -60.636206],
    [-32.929963, -60.649769],
    [-32.954551, -60.656039]], {
    color: 'blue',
    fillColor: '#1000ff',
    fillOpacity: 0.1,
}).addTo(mymap);

//Bring to front
circle.bringToFront();

// //Popup binding
marker.bindPopup("<b>Endava Urquiza</b><br>I am a popup.").openPopup();
marker2.bindPopup("<b>Endava Alvear</b><br>I am a popup.").openPopup();
circle.bindPopup("Monumento Nacional a la Bandera");
polygon.bindPopup("Centro de Rosario");

//Stand Alone popup
var popup = L.popup()
    .setLatLng([-32.9475, -60.631])
    .setContent("Monumento Nacional a la Bandera.")
    .openOn(mymap);

//Event            
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
} 
mymap.on('click', onMapClick);  


// //Adding a custom Icon
// var carc = L.icon({
//     iconUrl: './img/CARC.png',
//     shadowUrl: './img/shadow.png',

//     iconSize:     [42, 38], // size of the icon
//     shadowSize:   [42, 20], // size of the shadow
//     iconAnchor:   [21, 38], // point of the icon which will correspond to marker's location
//     shadowAnchor: [4, 20],  // the same for the shadow
//     popupAnchor:  [0, -38] // point from which the popup should open relative to the iconAnchor
// });
// L.marker([-32.913964, -60.674529], {icon: carc}).addTo(mymap);


//Create a class to create multiple similar instances
var TeamIcon = L.Icon.extend({
    options: {
        shadowUrl: './img/shadow.png',
        iconSize:     [42, 38], 
        shadowSize:   [42, 20], 
        iconAnchor:   [21, 38], 
        shadowAnchor: [4, 20],  
        popupAnchor:  [0, -38] 
    }
});

var carc = new TeamIcon({iconUrl: './img/CARC.png'}),
    nob = new TeamIcon({iconUrl: './img/NOB.png'}),
    cap = new TeamIcon({iconUrl: './img/CAP.png'});

L.marker([-32.913964, -60.674529], {icon: carc}).addTo(mymap).bindPopup("El glorioso Rosario Central");
L.marker([-32.955947, -60.661564], {icon: nob}).addTo(mymap).bindPopup("Club Atlético Newell's Old Boys");
L.marker([-31.743064, -60.507616], {icon: cap}).addTo(mymap).bindPopup("Club Atlético Patronato");



