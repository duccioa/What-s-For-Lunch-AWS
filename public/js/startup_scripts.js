//Setup variables
var vizType = 'markers'; // markers/heatmap
var boundaries = 'none'; // boroughs/wards/none
var baseMap = L.tileLayer('https://api.mapbox.com/styles/v1/duccioa/ciwrywi3f005m2pnycsiad4i8/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZHVjY2lvYSIsImEiOiJjaW80Z2l5bngwMDFudzZseWhnZHhsOWxtIn0.0osACDIq6ESlPKgardoYdw', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
});
var initialZoom = 11;
var initialToken = token = 'sushi';


var map = L.map('map').setView([51.505, -0.09], initialZoom).addLayer(baseMap);
var markers = new L.layerGroup();
map.addLayer(markers);
initializeMarkers(tokenControlArray, initialToken);


$(document).ready(function() {
  setupMapButtonEvents(tokenControlArray);
  setupGraphs(initialToken);
  make_box_plot();
  make_tree_map();
  make_freq_hist();
});
