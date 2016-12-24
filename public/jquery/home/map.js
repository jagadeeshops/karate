function schoolLocation() {
  var lat = 17.4295975;
  var lang = 78.4392681
  var mapCanvas = document.getElementById("map");
  var school = new google.maps.LatLng(lat, lang);
  var mapOptions = {
    center: school, zoom: 17
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({
    position: school,
    animation: google.maps.Animation.BOUNCE
  });
  marker.setMap(map);  
  var infowindow = new google.maps.InfoWindow({
    content: "Karate School"
  });
  infowindow.open(map,marker);
}

