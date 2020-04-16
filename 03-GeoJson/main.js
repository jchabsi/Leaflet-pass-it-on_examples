//Creates the map object
var map = L.map('mapid').setView([-32.94682, -60.63932], 12);          

//Sets the Tile layer
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map & Data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>',
    maxZoom: 18
}).addTo(map);

var geojsonFeature = [{
    "type": "Feature",
    "properties": {
        "name": "Cascada Arroyo Saladillo",        
        "popupContent": "La octava maravilla!"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-60.631024, -33.008843]
    }
}, 
{
    "type": "Feature",
    "properties": {
        "name": "Entubado del Arroyo Ludueña",        
        "popupContent": "Por acá abajo pasa el arroyo!"
    },
    "geometry": {
        "type": "LineString",
        "coordinates": [[-60.699090, -32.913372],
                        [-60.697480, -32.914569],
                        [-60.694950, -32.916084],
                        [-60.694403, -32.916192],
                        [-60.691356, -32.915940],
                        [-60.688448, -32.915354],
                        [-60.687923, -32.915165],
                        [-60.683835, -32.912382]]
    }
},
{
    "type": "Feature",
    "properties": {
        "name": "Entubado del Arroyo Ludueña",
        "popupContent": "El barrio de mi infancia!"
    },
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
                        [-60.662169, -32.991063],
                        [-60.646548, -32.990668],
                        [-60.650496, -33.008807]
                    ]]
    }
}];

function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
}

L.geoJSON(geojsonFeature,{
    onEachFeature: onEachFeature
}).addTo(map);



