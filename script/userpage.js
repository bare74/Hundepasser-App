//Get info from localStorage
var userCart = JSON.parse(localStorage.getItem("user-cart"));
console.log(userCart);
var sitterArray = JSON.parse(localStorage.getItem("sitterArray"));
console.log(sitterArray);
var user = sitterArray[userCart];
console.log(user);

//Creat info card on user
let userContainer = document.getElementById("user-cart");
userContainer.innerHTML = "";

let div = document.createElement("div");
div.classList.add("user-card");

let img = document.createElement("img");
img.classList.add("user-img");
img.src = user.picture.large;

let userName = document.createElement("h1");
userName.classList.add("name");
userName.innerText = user.name.first;

let userLastName = document.createElement("h1");
userLastName.classList.add("last-name");
userLastName.innerText = user.name.last;

let userEmail = document.createElement("a");
userEmail.classList.add("email");
userEmail.innerText = user.email;
userEmail.href = "mailto: " + user.email;

let userPhone = document.createElement("p");
userPhone.classList.add("phone");
userPhone.innerText = "Mobil nr: " + user.phone;

let mapButton = document.createElement("button");
mapButton.classList.add("btn-map");
mapButton.innerText = "Trykk for kart";
mapButton.addEventListener("click", function () {
  window.open("./map.html");
});

div.append(img, userName, userLastName, userEmail, userPhone, mapButton);
userContainer.append(div);
