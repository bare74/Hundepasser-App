//Get info from localStorage
var userCart = JSON.parse(localStorage.getItem("user-cart"));
var sitterArray = JSON.parse(localStorage.getItem("sitterArray"));
var user = sitterArray[userCart];

//Coordinates from API
let latitudeUser = user.location.coordinates.latitude;
let longitudeUser = user.location.coordinates.longitude;

//MapTiler
var map = L.map(`map`).setView([latitudeUser, longitudeUser], 4);

L.tileLayer(
  `https://api.maptiler.com/maps/streets/{z}/{x}/{y}@2x.png?key=VPQlkGIwuKMHBRwLEqrI`,
  {
    tileSize: 512,
    zoomOffset: -1,
    minZoom: 1,
    maxZoom: 18,
  }
).addTo(map);

var marker = L.marker([latitudeUser, longitudeUser]).addTo(map);
map.setView(new L.LatLng(latitudeUser, longitudeUser), 4);
