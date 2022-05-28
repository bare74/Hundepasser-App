var userArray = JSON.parse(localStorage.getItem("userArray"));

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
      userpageArray(userArray)
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
      editUser,
    );
    userContainer.append(div);
  }
}

function deleteUser(userArray, i) {
  let answer = prompt("Ønsker du å slette?(ja/nei)");
  if (answer === "ja") {
    userArray.splice(i, 1);
    localStorage.setItem("userArray", JSON.stringify(userArray));
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
    console.log(userArray[i]);
    userArray[i] = {
      picture: { large: ".assets/dog1.jpg" },
      name: { first: true, last: true },
      email: editEmail,
      phone: editPhone,
      location: { country: true },
    };
  }
  let answer = prompt("Ønsker og endre? (ja/nei)");
  if (answer === "ja") {
    localStorage.setItem("userArray", JSON.stringify(userArray));
    showUser(userArray);
  }
}

let filterCountry = document.querySelector(".btn-country");

filterCountry.addEventListener("click", () => {



 
  let selectedCountry = document.getElementById("country-list").value;
  if (selectedCountry === "none") {
    alert("Vennligst velg et land");
  }
  if (selectedCountry === "United States") {
    const filterland = userArray.filter((userArray) => {
      if (userArray.location.country === "United States") {
        return userArray.location.country;
      }
    });

    showUser(filterland);
  }

  if (selectedCountry === "Iran") {
    const filterland = userArray.filter((userArray) => {
      if (userArray.location.country === "Iran") {
        return userArray.location.country;
      }
    });

    showUser(filterland);
  }

  if (selectedCountry === "Spain") {
    const filterland = userArray.filter((userArray) => {
      if (userArray.location.country === "Spain") {
        return userArray.location.country;
      }
    });

    showUser(filterland);
  }
  if (selectedCountry === "Norway") {
    const filterland = userArray.filter((userArray) => {
      if (userArray.location.country === "Norway") {
        return userArray.location.country;
      }
    });

    showUser(filterland);
  }
});

function userpageInfo(i) {
  localStorage.setItem("user-cart", JSON.stringify(i));
  window.open("./userpage.html");
}
function userpageArray(userArray){
  localStorage.setItem("sitterArray", JSON.stringify(userArray));
}

showUser(userArray);