const userApi = "https://randomuser.me/api/?page=3&results=200&seed=abc"; //Easy to export if needed
let mainHeadText = "Trenger du eller vil du bli hundepasser !!"; //Easy to change this

var user = [],
  userArray = [],
  randomUser = [];

//Fetch the API
async function fetchUserApi() {
  try {
    var response = await fetch(userApi);
    var data = await response.json();
    user.push(data);

    data.results.filter((e) => {
      userArray.push(e);
    });
    randomArray(userArray);
  } catch (err) {
    console.log(err);
  }
}

//Send API info to localStorage
function randomArray(userArray) {
  localStorage.setItem("randomArray", JSON.stringify(userArray));
  localStorage.setItem("userArray", JSON.stringify(userArray));
}

//Random user
function showRandomUser(randomUser) {
  let randomUserContainer = document.getElementById("random_user_container");
  randomUserContainer.innerHTML = "";

  for (let i = 0; i < randomUser.length; i++) {
    let div = document.createElement("div");
    div.classList.add("random-user-card");

    let img = document.createElement("img");
    img.classList.add("user-img");
    img.src = randomUser[i].picture.large;

    let userName = document.createElement("p");
    userName.innerText =
      randomUser[i].name.first + " " + randomUser[i].name.last;

    div.append(img, userName);
    randomUserContainer.append(div);
  }
}

//Get info from localStorage
var randomSitterArray = JSON.parse(localStorage.getItem("randomArray"));

//Show user profile random
setInterval(function () {
  randomUser = randomSitterArray.slice(0, 4).map(function () {
    return this.splice(Math.floor(Math.random() * this.length), 1)[0];
  }, randomSitterArray.slice());

  showRandomUser(randomUser);
}, 3000);
fetchUserApi();

//Change head text after four second
async function myHeadText() {
  var headText = new Promise(function (resolve) {
    setTimeout(function () {
      resolve(mainHeadText);
    }, 4000);
  });
  document.getElementById("head-txt").innerHTML = await headText;
}
myHeadText();

//Login form. Use data from API to login with email and password for each user:
// USERNAME : karl.johnson@example.com PASSWORD: lovelove
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function getInfo() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("psw").value;

  for (i = 0; i < userArray.length; i++) {
    if (
      email == userArray[i].email &&
      password == userArray[i].login.password
    ) {
      localStorage.setItem("data", JSON.stringify(email + " " + password));
      document.write(
        `<head>` +
          `<link rel="stylesheet" href="./css/adduser.css" />` +
          `</head>` +
          `
      <h1 id="sucsess">` +
          "Gratulere du er logget inn" +
          `</h1>`
      );
      console.log(email + "er logget inn!!");

      setTimeout(() => {
        let windowReference = window.open("./index.html");

        myService.getUrl().then(function (url) {
          windowReference.location = url;
        });
      }, 2000);

      return;
    }
  }
  alert("Feil epost eller passord!");
  window.open("./index.html");
}

//Watch function inspired by Brad Traversy "codepen"
const time = document.getElementById("time"),
  greeting = document.getElementById("greeting"),
  nameInput = document.getElementById("name");

// Show Time
function showTime() {
  var today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  hour = hour % 24 || 24;

  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )}`;

  setTimeout(showTime, 1000);
}

function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

// Set Background img with different hour
function setBgGreet() {
  var today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    document.getElementById("img-main").src = `./assets/pet.jpg`;
    greeting.textContent = "God morgen";
  } else if (hour < 18) {
    document.getElementById("img-main").src = `./assets/dog2.jpg`;
    greeting.textContent = "God ettermiddag";
  } else {
    document.getElementById("img-main").src = `./assets/dog1.jpg`;
    greeting.textContent = "God kveld";
  }
}
//Get name fromlocalStorage
function getName() {
  if (localStorage.getItem("name") === null) {
    nameInput.textContent = "Skriv ditt navn her";
  } else {
    nameInput.textContent = localStorage.getItem("name");
  }
}

//Send input name to localStorage
function setName(e) {
  if (e.type === "keypress") {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("name", e.target.innerText);
      nameInput.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
}
nameInput.addEventListener("keypress", setName);
nameInput.addEventListener("blur", setName);

showTime();
setBgGreet();
getName();

// set cookie according to you inspired by Coding Status
let cookieName = "Hundepasser App",
  cookieValue = "Hundepasser",
  cookieExpireDays = 3;

// when users click accept button
let acceptCookie = document.getElementById("acceptCookie");
acceptCookie.onclick = function () {
  createCookie(cookieName, cookieValue, cookieExpireDays);
};

// function to set cookie in web browser
let createCookie = function (cookieName, cookieValue, cookieExpireDays) {
  let currentDate = new Date();
  currentDate.setTime(
    currentDate.getTime() + cookieExpireDays * 24 * 60 * 60 * 1000
  );
  let expires = "expires=" + currentDate.toGMTString();
  document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
  if (document.cookie) {
    document.getElementById("cookiePopup").style.display = "none";
  } else {
    alert("Vær vennlig og godta og aksepter informasjonskapsler");
  }
};

// get cookie from the web browser
let getCookie = function (cookieName) {
  var name = cookieName + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};
// check cookie is set or not
let checkCookie = function () {
  var check = getCookie(cookieName);
  if (check == "") {
    document.getElementById("cookiePopup").style.display = "block";
  } else {
    document.getElementById("cookiePopup").style.display = "none";
  }
};
checkCookie();
