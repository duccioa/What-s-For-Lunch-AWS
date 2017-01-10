//Setup variables
var vizType = 'markers'; // markers/heatmap
var boundaries = 'none'; // boroughs/wards/none
var baseMap = L.tileLayer('https://api.mapbox.com/styles/v1/duccioa/ciwrywi3f005m2pnycsiad4i8/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZHVjY2lvYSIsImEiOiJjaW80Z2l5bngwMDFudzZseWhnZHhsOWxtIn0.0osACDIq6ESlPKgardoYdw', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
});
var initialZoom = 10;
var initialToken = 'sushi';
var token = initialToken;
var initialViz = "default";
var viz = initialViz;

//Create map
var map = L.map('map').setView([51.505, -0.09], initialZoom).addLayer(baseMap);
var controlScale = L.control.scale().addTo(map);
//Create markers
var markers = new L.layerGroup();
map.addLayer(markers);
initializeMarkers(tokenControlArray, initialToken);
//// Draw polygons on the map ////
// Create style options
var boroughsStyle = {
  color:"#A6A6A6",
  weight:1.5,
  fill:false,
  //fillColor:"#525252",
  //fillOpacity:0.1,
  clickable:false
};
var wardsStyle = {
  color:"#A6A6A6",
  weight:0.2,
  fill:true,
  fillColor:"#525252",
  fillOpacity:0.1,
  clickable:false   
};
// Create data layers
var boroughsLayer = L.geoJSON(boroughsData, boroughsStyle).addTo(map);
var wardsLayer = L.geoJSON(wardsData, {
  style: wardsStyle, 
  onEachFeature: onEachFeature
  
}
).addTo(map);

// Add control Layer
controlLayer = {
  "Premises":markers,
  "Boroughs":boroughsLayer,
  "Wards":wardsLayer
};
L.control.layers(null, controlLayer, {collapsed:false}).addTo(map);

//
$(document).ready(function() {
  setupMapButtonEvents(tokenControlArray);
  setupGraphs(initialToken);
  make_box_plot();
  make_tree_map();
  make_freq_hist();
});
