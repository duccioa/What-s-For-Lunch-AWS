function getData(token) {


    console.log("Getting Data");

    setAllMap(null);
    markerArray = [];

    $.getJSON("http://128.40.150.34:" + port + "/data/tokens_spatial/" + lat_min + "/" + lng_min + "/" + lat_max + "/" + lng_max + "/" + token + "/", function(data) {
        $.each(data, function(k, v) {

            var latLng = new google.maps.LatLng(v.points.y, v.points.x);

            dataArray.push(latLng);

            var marker = new google.maps.Marker({
                position: latLng,
                icon: "./img/icon_" + token + '.png',
                customInfo: v.BusinessID
            });

            google.maps.event.addListener(marker, 'click', function(content) {
                return function() {
                    infowindow.setContent("");

                    //map.setCenter(new google.maps.LatLng(v.points.y, v.points.x));
                    $.getJSON("http://128.40.150.34:" + port + "/data/tokens_spatial/" + this.customInfo, function(data) {
                        var content = "<b>" + v.BusinessName + "</b>" + "<br/><br/><b>Business ID: </b>" + v.BusinessID + "<br/><b>Business Type: </b> " + v.BusinessType + " <br/><b>Borough: </b> " + v.LocalAuthorityName + "<br/><b>Postcode:</b> " + v.PostCode + " <br/><b>Hygiene rating: </b>" + v.RatingValue;
                        infowindow.setContent(content);
                    });

                    infowindow.open(map, this);
                };
            }(""));

            markerArray.push(marker);

        });

        $("#premisesNum").html(data.length);

        setAllMap(map);
    });
}




function createMarkers() {
    var marker = new google.maps.Marker({
        position: latLng
    });
}

function setAllMap(map) {
    for (var i = 0; i < markerArray.length; i++) {
        markerArray[i].setMap(map);
    }
}

function clearMarkers() {
    setAllMarkers(null);
}