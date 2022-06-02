//Get API from localStorage
var userArray = JSON.parse(localStorage.getItem("userArray"));

const searchBar = document.getElementById("searchBar");

//Search for users
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

//Cards for each user
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

    let location = document.createElement("p");
    location.innerText = "Land: " + userArray[i].location.country;

    let userPage = document.createElement("button");
    userPage.setAttribute("id", "user-page");
    userPage.textContent = "Mere info";
    userPage.addEventListener("click", function () {
      userpageInfo(i);
      userpageArray(userArray);
    });

    let deleteButton = document.createElement("button");
    deleteButton.setAttribute("id", "btn");
    deleteButton.textContent = "Slett meg";
    deleteButton.addEventListener("click", function () {
      deleteUser(userArray, i);
    });

    let editUser = document.createElement("button");
    editUser.setAttribute("id", "btn");
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
      location,
      userPage,
      deleteButton,
      editUser
    );

    userContainer.append(div);
  }
}

//Delete user
function deleteUser(userArray, i) {
  var answer = prompt("Ønsker du å slette?(ja/nei)");
  if (answer === "ja") {
    userArray.splice(i, 1);
    localStorage.setItem("userArray", JSON.stringify(userArray));
    showUser(userArray);
  }
}

//Edit user
function editUserMember(userArray, i) {
  var editEmail = prompt("Tast inn ny epost adresse...");
  var editPhone = prompt("Tast inn nytt mobilnr...");

  if (editEmail == "" || editPhone == "") {
    alert("Husk alle felter må fylles ut!");
    return;
  } else {
    userArray[i].email = editEmail;
    userArray[i].phone = editPhone;
  }

  var answer = prompt("Ønsker og endre? (ja/nei)");
  if (answer === "ja") {
    localStorage.setItem("userArray", JSON.stringify(userArray));
    showUser(userArray);
  }
}

//Filter by Country
let filterCountry = document.querySelector(".btn-country");

filterCountry.addEventListener("click", () => {
  let coutryselect = document.getElementById("country-list").selectedIndex;
  let select = document.getElementsByTagName("option")[coutryselect].value;

  const filterCountry = userArray.filter((userArray) => {
    return userArray.location.country.includes(select);
  });
  if (select == "none") {
    alert("Vennligst velg et land");
    return;
  }
  if (filterCountry.length === 0) {
    alert("Finner ingen i dette landet");
    return;
  }

  showUser(filterCountry);
});

//Send user info to loccalStorage
function userpageInfo(i) {
  localStorage.setItem("user-cart", JSON.stringify(i));
  window.open("./userpage.html");
}

//Send userpage info to own array
function userpageArray(userArray) {
  localStorage.setItem("sitterArray", JSON.stringify(userArray));
}

showUser(userArray);
