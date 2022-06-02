//Get info from localStorage
var userArray = JSON.parse(localStorage.getItem("userArray"));

let adduserBtn = document.getElementById("add-user-btn");
adduserBtn.addEventListener("click", createNewUser);

//Creat new user
function createNewUser() {
  let userName = document.getElementById("user-name").value;
  let userLastName = document.getElementById("user-lastname").value;
  let userCell = document.getElementById("user-cell").value;
  let userEmail = document.getElementById("user-email").value;
  let country = document.getElementById("country-list").value;
  let password = document.getElementById("user-password").value;
  let img = "./assets/dog1.jpg";
  //Coordinates for Gokstdad Akademiet :-)
  let latitude = "59.130199";
  let longitude = "10.226210";

  if (
    userName == "" ||
    userLastName == "" ||
    userCell == "" ||
    userEmail == "" ||
    country == "none"
  ) {
    alert("Husk alle felter må fylles ut!");
    return;
  } else {
    userArray.unshift({
      picture: { large: img },
      name: { first: userName, last: userLastName },
      phone: userCell,
      email: userEmail,
      location: {
        country: country,
        coordinates: { latitude, longitude },
      },
      login: { password: password },
    });
  }
  //Sucsess page for creating new user
  let answer = prompt("Ønsker du å opprette en bruker? (ja/nei)");
  if (answer === "ja") {
    localStorage.setItem("userArray", JSON.stringify(userArray));
    document.write(
      `<head>` +
        `<link rel="stylesheet" href="./css/adduser.css" />` +
        `</head>` +
        `
      <h1 id="sucsess">` +
        "Gratulere som ny registret hundepasser" +
        `</h1>`
    );

    setTimeout(() => {
      var windowReference = window.open("./findsitter.html");
      var closeWindow = document.close("./adduser.html");

      myService.getUrl().then(function (url) {
        windowReference.location = url;
      });

      myService.getUrl().then(function (url) {
        closeWindow.location = url;
      });
    }, 2000);
  }
}
