import { userApi } from "../script/index.js";

let user = [];
let userArray = [];

const searchBar = document.getElementById("searchBar");

searchBar.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();

  const filterUser = userArray.filter((userArray) => {
    return (
      userArray.name.first.toLowerCase().includes(searchString) ||
      userArray.name.last.toLowerCase().includes(searchString)
    );
  });
  if (filterUser == "") {
    alert("Finner ingen ved det navnet");
  }

  showUser(filterUser);
});

async function fetchUserApi() {
  try {
    let response = await fetch(userApi);
    let data = await response.json();
    user.push(data);

    data.results.filter((e) => {
      userArray.push(e);
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
    img.src = userArray[i].picture.large;

    let userName = document.createElement("p");
    userName.innerText = "Fornavn: " + userArray[i].name.first;

    let userLastName = document.createElement("p");
    userLastName.innerText = "Etternavn: " + userArray[i].name.last;

    let userEmail = document.createElement("p");
    userEmail.innerText = "E-post: " + userArray[i].email;

    let userPhone = document.createElement("p");
    userPhone.innerText = "Mobil nr: " + userArray[i].phone;

    let deleteButton = document.createElement("button");
    deleteButton.setAttribute("id", "btn");
    deleteButton.textContent = "Slett meg";
    deleteButton.addEventListener("click", function () {
      deleteUser(userArray, i);
    });

    let editUser = document.createElement("button");
    editUser.innerText = "Endre bruker";
    editUser.classList.add("edit-user");
    editUser.addEventListener("click", function () {
      editUserMember(userArray, i);
    });

    div.append(
      img,
      userName,
      userLastName,
      userEmail,
      userPhone,
      deleteButton,
      editUser
    );
    userContainer.append(div);
  }
}

function deleteUser(userArray, i) {
  console.log(userArray, i);
  let answer = prompt("Ønsker du å slette?(ja/nei)");
  if (answer === "ja") {
    userArray.splice(i, 1);
    showUser(userArray);
  }
}

function editUserMember(userArray, i) {
  let editEmail = prompt("Tast inn ny epost adresse...");
  let editPhone = prompt("Tast inn nytt mobilnr...");

  if (editEmail == "" || editPhone == "") {
    alert("Husk alle felter må fylles ut!");
    return;
  } else {
    userArray[i] = {
      picture: "",
      name: "",
      email: editEmail,
      phone: editPhone,
    };
  }
  let answer = prompt("Ønsker og endre? (ja/nei)");
  if (answer === "ja") {
    showUser(userArray);
  }
}

fetchUserApi();
