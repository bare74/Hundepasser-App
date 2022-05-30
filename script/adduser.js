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
  let img = "./assets/dog1.jpg";

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
      location: { country: country },
    });
  }

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

    //Sucsess page
    setTimeout(() => {
      window.open("./findsitter.html");
      document.close("./adduser.html");
      location.reload("./adduser.html"); 
    }, 3000);
  }
}
