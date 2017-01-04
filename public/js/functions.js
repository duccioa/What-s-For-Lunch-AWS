/////// Map functions ///////
function initializeMarkers(tokenArray, token_pick){
   var token_options = [];
    $.each(tokenArray, function(i, v) {
        if (v.token === token_pick) {
          token_options.push(v);
          return false;
        }
        
    });
var markerOptions = {
          iconShape: token_options[0].marker.iconShape,
          iconSize:  token_options[0].marker.iconSize,
          borderColor: token_options[0].marker.borderColor,
          borderWidth:  token_options[0].marker.borderWidth,
          backgroundColor: token_options[0].marker.backgroundColor
        };
  console.log("Getting Data for " + token_pick);
  $.getJSON('https://ogko7k2q2j.execute-api.eu-west-1.amazonaws.com/filterByToken/',
      {
          token: token_pick
      }, function(data){populate_markers(data, markerOptions)}
      );
}    



function populate_markers(premises, markerOptions){
    markers.clearLayers();
  $.each(premises, function(k,v){
    newMarker = new L.marker([v.lat,v.lon], { icon: L.BeautifyIcon.icon(markerOptions) }).bindPopup(v.businessname);
    markers.addLayer(newMarker);
  });
  return false;
  
}

function setupGraphs(token){
  var link2analysis = "./content/analysis_"+token+".html";
  var make_prefix = "make_";
  var make_hist_prefix = "make_hist_";
  window[make_prefix + token]();
  window[make_hist_prefix + token]();
  $("#graph_description").load(link2analysis);
}
  


function setupMapButtonEvents(tokens_array){
  $.each(tokens_array,function(k,v){
    var tok = '#'+v.token;
    var tok_text = tok + "_text";
    $(tok).on('click', function (e) {
                initializeMarkers(tokens_array,v.token);
                setupGraphs(v.token);
            });
    $(tok_text).on('click', function (e) {
                initializeMarkers(tokens_array,v.token);
                setupGraphs(v.token);
            });        
  });
}



  
  
  
  