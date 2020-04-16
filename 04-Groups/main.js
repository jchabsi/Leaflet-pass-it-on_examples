//Let's set some Tile layers (Base Layers)
var osm = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>, Maps imagery &copy; <a href="http://thunderforest.com">Thunderforest</a>',
    maxZoom: 18
});
var esriWorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});
var esriWorldGrayCanvas = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
	maxZoom: 16
});
//Thunderforest needs an API key. You can get it for free at thunderforest web site
// var thunderForest = L.tileLayer('https://tile.thunderforest.com/landscape/{z}/{x}/{y}{r}.png?apikey=your_api_key', {
//     attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>, Maps imagery &copy; <a href="http://thunderforest.com">Thunderforest</a>',
//     maxZoom: 18
// });
var Esri_WorldStreetMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
});
var CartoDB_Positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 19
});
var mymap = L.map('mapid', {
    center: [-32.94682, -60.63932],
    zoom: 15,
    layers: [osm ,esriWorldImagery, esriWorldGrayCanvas, /*thunderForest,*/ Esri_WorldStreetMap, CartoDB_Positron]
});
   
//Now let's create two overlay layers grouping layers (markers and shapes)

//This is a layers group of two markers
var urquiza = L.marker([-32.939947, -60.653590]);
var alvear = L.marker([-32.953865, -60.657382]);
var oficinas = L.layerGroup([urquiza, alvear]).addTo(mymap);

//Now let's create two shapes and group the in a group
var polygon = L.polygon([
    [-32.960980, -60.619922],
    [-32.945982, -60.628063],
    [-32.937958, -60.636206],
    [-32.929963, -60.649769],
    [-32.954551, -60.656039]], {
    color: 'blue',
    fillColor: '#1000ff',
    fillOpacity: 0.1,
});
var circle = L.circle([-32.9475, -60.631], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.3,
    radius: 300
});
var shapes = L.layerGroup([circle, polygon]).addTo(mymap);

//Popup binding
urquiza.bindPopup("<b>Endava Urquiza</b><br>I am a popup.").openPopup();
alvear.bindPopup("<b>Endava Alvear</b><br>I am a popup.").openPopup();
circle.bindPopup("Monumento Nacional a la Bandera");
polygon.bindPopup("Centro de Rosario");

//Let's create a Layer control
//This object allows us to choose a base layer
var baseMaps = {
    "Open Street Maps": osm,
    "ESRI World Imagery": esriWorldImagery,
    "ESRI World gray canvas": esriWorldGrayCanvas,
    //"Thunder Forest Landscape": thunderForest,
    "ESRI World Street Map": Esri_WorldStreetMap,
    "CartoDB Positron": CartoDB_Positron
};

//this object allows us to show/hide overlay layers 
var overlayMaps = {
    "Oficinas de Endava": oficinas,
    "Centro de Rosario": shapes
};
//Finally let's add the layer control 
L.control.layers(baseMaps, overlayMaps).addTo(mymap);


