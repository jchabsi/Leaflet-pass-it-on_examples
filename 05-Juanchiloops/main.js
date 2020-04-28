////////////////////////////
// Map Object and Tile Layer
////////////////////////////
// Creates the map object
var map = L.map('mapid').setView([-32.94682, -60.63932], 13);        

// Sets the Tile layer
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map & Data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>',
    maxZoom: 18
}).addTo(map);

//////////////////////
// Objects and Events
//////////////////////
//This is a marker
// var marker = L.marker([-32.959319, -60.623900]).addTo(map);

//We can draw circles
// var circle = L.circle([-32.9475, -60.631], {
//     color: 'red',
//     fillColor: '#f00',
//     fillOpacity: 0.3,
//     radius: 300
// }).addTo(map);

//And also polygons
// var polygon = L.polygon([
//     [-32.960980, -60.619922],
//     [-32.945982, -60.628063],
//     [-32.937958, -60.636206],
//     [-32.929963, -60.649769],
//     [-32.954551, -60.656039]], {
//     color: 'blue',
//     fillColor: '#1000ff',
//     fillOpacity: 0.1,
// }).addTo(map);

//Popup binding
// marker.bindPopup("<b>Planetario</b><br>Complejo Astronómico Mucipal.");
// circle.bindPopup("Monumento Nacional a la Bandera");
// polygon.bindPopup("Centro de Rosario").openPopup();

//Bring to front
// circle.bringToFront();

//Stand Alone popup
// var popup = L.popup()
//     .setLatLng([-32.953931, -60.656708])
//     .setContent("Museo de Bellas Artes")
//     .addTo(map);

//Event 
// map.on('click', onMapClick);
           
// function onMapClick(e) {
//     popup
//         .setLatLng(e.latlng)
//         .setContent("Clickeate el mapa en " + e.latlng.lat + ", " + e.latlng.lng)
//         .addTo(map);
// }   


//Adding a custom Icon
// var carc = L.icon({
//     iconUrl: './img/CARC.png',
//     shadowUrl: './img/shadow.png',

//     iconSize:     [42, 38], // size of the icon
//     shadowSize:   [42, 20], // size of the shadow
//     iconAnchor:   [21, 38], // point of the icon which will correspond to marker's location
//     shadowAnchor: [4, 20],  // the same for the shadow
//     popupAnchor:  [0, -38] // point from which the popup should open relative to the iconAnchor
// });
// L.marker([-32.913964, -60.674529], {icon: carc})
//     .bindPopup("El glorioso Rosario Central")
//     .addTo(map);


//Create a class to create multiple similar instances
// var TeamIcon = L.Icon.extend({
//     options: {
//         shadowUrl: './img/shadow.png',
//         iconSize:     [42, 38], 
//         shadowSize:   [42, 20], 
//         iconAnchor:   [21, 38], 
//         shadowAnchor: [4, 20],  
//         popupAnchor:  [0, -38] 
//     }
// });

// var teamIcon = function (options) {
//     return new TeamIcon(options);
// };

// var carc = new TeamIcon({iconUrl: './img/CARC.png'}),
//     nob = new TeamIcon({iconUrl: './img/NOB.png'});

// var markerCarc = L.marker([-32.913964, -60.674529], {icon: carc})
//     .bindPopup("El glorioso Rosario Central")
//     .addTo(map);
// var markerNob = L.marker([-32.955947, -60.661564], {icon: nob})
//     .bindPopup("Club Atlético Newell's Old Boys")
//     .addTo(map);

///////////////////
// Location
///////////////////
//Instead of setting a lat,lon like //.setView([-32.94682, -60.63932], 15); we use locate to get current location
//map.locate({setView: true, maxZoom: 16});  

//Events for handling location
//when location is found
// map.on('locationfound', onLocationFound);
// function onLocationFound(e) {
//     var radius = e.accuracy;

//     L.marker(e.latlng).addTo(map)
//         .bindPopup("You are within " + radius + " meters from this point").openPopup();

//     L.circle(e.latlng, radius).addTo(map);
// }

//When there is an error trying to determine location
// map.on('locationerror', onLocationError);
// function onLocationError(e) {
//     alert(e.message);
// }

/////////////////////
// GeoJSON
////////////////////
// var geojsonFeature = [{
//     "type": "Feature",
//     "properties": {
//         "name": "Cascada Arroyo Saladillo",        
//         "popupContent": "La octava maravilla! :P"
//     },
//     "geometry": {
//         "type": "Point",
//         "coordinates": [-60.631024, -33.008843]
//     }
// }, 
// {
//     "type": "Feature",
//     "properties": {
//         "name": "Entubado del Arroyo Ludueña",        
//         "popupContent": "Por acá abajo pasa el arroyo!"
//     },
//     "geometry": {
//         "type": "LineString",
//         "coordinates": [[-60.699090, -32.913372],
//                         [-60.697480, -32.914569],
//                         [-60.694950, -32.916084],
//                         [-60.694403, -32.916192],
//                         [-60.691356, -32.915940],
//                         [-60.688448, -32.915354],
//                         [-60.687923, -32.915165],
//                         [-60.683835, -32.912382]]
//     }
// },
// {
//     "type": "Feature",
//     "properties": {
//         "name": "Barrio tiro suizo",
//         "popupContent": "El barrio de mi infancia!"
//     },
//     "geometry": {
//         "type": "Polygon",
//         "coordinates": [[
//                         [-60.662169, -32.991063],
//                         [-60.646548, -32.990668],
//                         [-60.650496, -33.008807]
//                     ]]
//     }
// }];

//L.geoJSON(geojsonFeature).addTo(map);

// function onEachFeature(feature, layer) {
//     // does this feature have a property named popupContent?
//     if (feature.properties && feature.properties.popupContent) {
//         layer.bindPopup(feature.properties.popupContent);
//     }
// }

// L.geoJSON(geojsonFeature,{
//     onEachFeature: onEachFeature
// }).addTo(map);

////////////////////////////////////////////
// Layer Control
////////////////////////////////////////////

// var footballTeams = L.layerGroup([markerCarc, markerNob]).addTo(map);
// var someCitySpots = L.layerGroup([marker, circle, polygon]).addTo(map);

// var osm = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>, Maps imagery &copy; <a href="http://thunderforest.com">Thunderforest</a>',
//     maxZoom: 18
// });
// var esriWorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
// 	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
// });
// var map = L.map('mapid', {
//     center: [-32.94682, -60.63932],
//     zoom: 15,
//     layers: [osm ,esriWorldImagery]
// });

// //Let's create a Layer control
// //This object allows us to choose a base layer
// var baseMaps = {
//     "ESRI World Imagery": esriWorldImagery,
//     "Open Street Maps": osm
// };

// //this object allows us to show/hide overlay layers 
// var overlayMaps = {
//     "Algunos spots de Rosario": someCitySpots,
//     "Clubes de Futbol": footballTeams
// };
// //Finally let's add the layer control 
// L.control.layers(baseMaps, overlayMaps).addTo(map);