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
