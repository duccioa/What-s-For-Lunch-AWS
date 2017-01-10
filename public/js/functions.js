/////// Map functions ///////
function initializeMarkers(tokenArray, token_pick) {
    var token_options = [];
    $.each(tokenArray, function(i, v) {
        if (v.token === token_pick) {
            token_options.push(v);
            return false;
        }

    });
    var markerOptions = {
        iconShape: token_options[0].marker.iconShape,
        iconSize: token_options[0].marker.iconSize,
        borderColor: token_options[0].marker.borderColor,
        borderWidth: token_options[0].marker.borderWidth,
        backgroundColor: token_options[0].marker.backgroundColor
    };
    console.log("Getting Data for " + token_pick);
    $.getJSON('https://ogko7k2q2j.execute-api.eu-west-1.amazonaws.com/filterByToken/', {
        token: token_pick
    }, function(data) {
        populate_markers(data, markerOptions)
    });
}



function populate_markers(premises, markerOptions) {
    markers.clearLayers();
    $.each(premises, function(k, v) {
        newMarker = new L.marker([v.lat, v.lon], {
            icon: L.BeautifyIcon.icon(markerOptions)
        }).bindPopup(v.businessname);
        markers.addLayer(newMarker);
    });
    return false;

}

function setupGraphs(token) {
    var link2analysis = "./content/analysis_" + token + ".html";
    var make_prefix = "make_";
    var make_hist_prefix = "make_hist_";
    window[make_prefix + token]();
    window[make_hist_prefix + token]();
    $("#graph_description").load(link2analysis);
}



function setupMapButtonEvents(tokens_array) {
    $.each(tokens_array, function(k, v) {

        var tok = '#' + v.token;
        var tok_text = tok + "_text";
        $(tok).on('click', function(e) {
            initializeMarkers(tokens_array, v.token);
            setupGraphs(v.token);
            token = v.token;
            setWardStyle("default");
        });
        $(tok_text).on('click', function(e) {
            initializeMarkers(tokens_array, v.token);
            setupGraphs(v.token);
            token = v.token;
            setWardStyle("default");
        });
    });
    $('#income').on('click', function(e) {
        setViz("income", token)
    });
    $('#smooth_lq').on('click', function(e) {
        setViz("smooth_lq", token)
    });
    $('#local_morans').on('click', function(e) {
        setViz("morans", token)
    });
    $('#classification').on('click', function(e) {
        setViz("classification", token)
    });
    $('#reset').on('click', function(e) {
        setWardStyle("default")
    });
}


function setWardStyle(col_name) {
    if (col_name === "default") {
        console.log('Reset style completed');
        wardsLayer.setStyle(wardsStyle);

    } else {
        console.log("Setup style to " + col_name + " achived");
        wardsLayer.setStyle(function(feature) {
            return {
                fillColor: feature.properties[col_name],
                fillOpacity: 0.7

            };

        });
    }
    if (col_name === "cluster_colors") {
        markers.clearLayers();
    }

}

function setViz(viz, token) {
    var col;
    if (viz === "classification") {
        col = "cluster_colors";
        console.log("Visualise classes: " + col);

    } else {
        if (viz === "income") {
            col = "income_color";
            console.log("Column to visualise: " + col);

        } else {
            col = token + "_" + viz + "_color";
            console.log("Column to visualise: " + col);

        }
    }
    setWardStyle(col);
}


function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: ''
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
}

function resetHighlight(e) {
    wardsLayer.resetStyle(e.target);
}

function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
    
    
}

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
}