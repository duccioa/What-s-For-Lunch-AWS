function getData(token) {


    console.log("Getting Data");

// Or (more clean): 
$.getJSON('https://ogko7k2q2j.execute-api.eu-west-1.amazonaws.com/filterByToken/',
    {
        token: token
    },
    function(data) {
      console.log(data);
        $.each(data, function(k, v) {
          
          console.log(v.businessname + ": (" +v.lat + " ," + v.lon + ")");
          var marker = L.marker([v.lat, v.lon])
          .bindPopup(v.businessname)
          .addTo(map);
        }); 
    }
);

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