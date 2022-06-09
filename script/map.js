//Get info from localStorage
let userCart = JSON.parse(localStorage.getItem("user-cart"));
let sitterArray = JSON.parse(localStorage.getItem("sitterArray"));
let user = sitterArray[userCart];

//Coordinates from API
let latitudeUser = user.location.coordinates.latitude,
  longitudeUser = user.location.coordinates.longitude;

//MapTiler
let map = L.map(`map`).setView([latitudeUser, longitudeUser], 1);

L.tileLayer(
  `https://api.maptiler.com/maps/streets/{z}/{x}/{y}@2x.png?key=VPQlkGIwuKMHBRwLEqrI`,
  {
    tileSize: 512,
    zoomOffset: -1,
    minZoom: 1,
    maxZoom: 18,
  }
).addTo(map);

let marker = L.marker([latitudeUser, longitudeUser]).addTo(map);
map.setView(new L.LatLng(latitudeUser, longitudeUser), 1);
