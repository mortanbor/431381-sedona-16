/*карта*/
var map;
function initMap() {
  var mapOptions = {
    zoom: 7,
    center: new google.maps.LatLng(34.868633, -111.761734),
    disableDefaultUI: true
  }
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    var image = "img/icon-map-marker.svg";
    var myLatLng = new google.maps.LatLng(34.868633, -111.761734);
    var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  });
}

google.maps.event.addDomListener(window, 'load', initMap);
34.868633, -111.761734
