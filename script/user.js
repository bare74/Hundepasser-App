import { userApi } from "../script/index.js";

let user = [];
let userArray = [];



async function fetchUserApi() {
  try {
    let response = await fetch(userApi);
    let data = await response.json();
    user.push(data);
    console.log(data.results);

    data.results.filter((userfilter) => {
      userArray.push(userfilter);
      console.log(userArray);
    });

    showUser(userArray);
  } catch (err) {
    console.log(err);
  }
}

function showUser(userArray) {
  let userContainer = document.getElementById("user-container");
  userContainer.innerHTML = "";

  for (let i = 0; i < userArray.length; i++) {
    let div = document.createElement("div");
    div.classList.add("user-card");

    let img = document.createElement("img");
    img.classList.add("user-img");
    img.style.height = "200px";
    img.style.width = "200px";
    img.src = userArray[i].picture.medium;

    let userName = document.createElement("h4");
    userName.innerText = "Navn: " + userArray[i].name.first;

    let userLastName = document.createElement("h4");
    userLastName.innerText = "Etternavn: " + userArray[i].name.last;

    let button = document.createElement("button");
    button.setAttribute("id", "btn");
    button.textContent = "Slett meg";
    button.addEventListener("click", function () {
      deleteUser(userArray, i);
    });

    userContainer.append(div);
    div.append(img, userName, userLastName, button);
  }
}

function deleteUser(userArray, i) {
  console.log(i);
  let answer = prompt("Ønsker du å slette?(ja/nei)");
  if (answer === "ja") {
    userArray.splice(i, 1);
    showUser(userArray);
  }
}

fetchUserApi();