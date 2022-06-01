const userApi = "https://randomuser.me/api/?page=3&results=200&seed=abc";

let user = [];
let userArray = [];
let randomUser = [];

//Fetch the API
async function fetchUserApi() {
  try {
    let response = await fetch(userApi);
    let data = await response.json();
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

//Show user profile and update with new
setInterval(function () {
  randomUser = randomSitterArray.slice(0, 4).map(function () {
    return this.splice(Math.floor(Math.random() * this.length), 1)[0];
  }, randomSitterArray.slice());

  showRandomUser(randomUser);
}, 3000);
fetchUserApi();

//Change head text after four second
async function myHeadText() {
  let myPromise = new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Trenger du eller vil du bli hundepasser !!");
    }, 4000);
  });
  document.getElementById("head-txt").innerHTML = await myPromise;
}
myHeadText();

//Login form. This is just a test. Use data from API to login with email and password:
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function getInfo() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("psw").value;

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
      return;
    }
  }
  alert("Feil epost eller passord!");
  window.open("./index.html");
}

//Watch function inspired by Brad Traversy "codepen"
const time = document.getElementById("time"),
  greeting = document.getElementById("greeting"),
  name = document.getElementById("name");

// Show Time
function showTime() {
  let today = new Date(),
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
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    document.getElementById("img-main").src = `../assets/pet.jpg`;
    greeting.textContent = "God morgen";
  } else if (hour < 18) {
    document.getElementById("img-main").src = `../assets/dog2.jpg`;
    greeting.textContent = "God ettermiddag";
  } else {
    document.getElementById("img-main").src = `../assets/dog1.jpg`;
    greeting.textContent = "God kveld";
  }
}
//Get name fromlocalStorage
function getName() {
  if (localStorage.getItem("name") === null) {
    name.textContent = "Skriv ditt navn her";
  } else {
    name.textContent = localStorage.getItem("name");
  }
}

//Send input name to localStorage
function setName(e) {
  if (e.type === "keypress") {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("name", e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
}
name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);

showTime();
setBgGreet();
getName();
