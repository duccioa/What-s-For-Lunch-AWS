//Setup variables
var vizType = 'markers'; // markers/heatmap
var boundaries = 'none'; // boroughs/wards/none
var baseMap = L.tileLayer('https://api.mapbox.com/styles/v1/duccioa/cj9h33nox1q4p2so1zm7yb61r/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZHVjY2lvYSIsImEiOiJjaXdyeTQ5Y3YwMDBlMnp0bDZ3OWt5ZnRjIn0.XxVvP8qubZ31rrU_bNsmZA', {
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

var legend= L.control({position: 'bottomright'});

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

var info = L.control();

info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
};

// method that we will use to update the control based on feature properties passed
info.update = function (props) {
    this._div.innerHTML = '<h4>Ward info</h4>' +  (props ?
        '<b>' + props.ward_name + '</b><br />' +
        'Median income: ' + props.med_income_2012_13 + ' £<br />' +
        ''
        : 'Hover over a ward');
};

info.addTo(map);


//
$(document).ready(function() {
  setupMapButtonEvents(tokenControlArray);
  setupGraphs(initialToken);
  make_box_plot();
  make_tree_map();  
  make_freq_hist();
  drawLegend(viz);
});
