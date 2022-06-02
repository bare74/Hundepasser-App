//Get info from localStorage
let userCart = JSON.parse(localStorage.getItem("user-cart"));
let sitterArray = JSON.parse(localStorage.getItem("sitterArray"));
let user = sitterArray[userCart];

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
  window.close("./userpage.html");
});

div.append(img, userName, userLastName, userEmail, userPhone, mapButton);
userContainer.append(div);

//Change color phonenumber mouseover/mouseout
let phoneColorChange = document.querySelector("p");
phoneColorChange.addEventListener("mouseover", redText);

phoneColorChange.addEventListener("mouseout", blackText);

phoneColorChange.addEventListener("click", myRemoveFunct);

function myRemoveFunct() {
  phoneColorChange.removeEventListener("mouseover", redText);
}
function redText() {
  phoneColorChange.style.color = "red";
  phoneColorChange.style.fontWeight = "900";
}
function blackText() {
  phoneColorChange.style.color = "black";
}
