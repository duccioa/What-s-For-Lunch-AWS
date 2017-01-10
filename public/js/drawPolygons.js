//// Draw polygons on the map ////
// Create style options
var boroughsStyle = {
  color:"#A6A6A6",
  weight:1,
  fill:true,
  fillColor:"#525252",
  fillOpacity:0.1,
  clickable:false
};
var wardsStyle = {
  color:"#A6A6A6",
  weight:1,
  fill:true,
  fillColor:"#525252",
  fillOpacity:0.1,
  clickable:false   
};
// Create data layers
var boroughsLayer = L.geoJSON(boroughsData, boroughsStyle).addTo(map);
var wardsLayer = L.geoJSON(wardsData, wardsStyle).addTo(map);



//// Alterntives ///
// Set the style of the layer
// boroughsLayer.setStyle(boroughsStyle);

// Populate the layers
// boroughsLayer.addData(boroughsData);
// wardsLayer.addData(wardsData);

function setViz(token, viz) {
  if (viz==="cluster") {return "cluster_colors"} else{
    return
  }
}






