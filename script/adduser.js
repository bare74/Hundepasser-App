var userArray = JSON.parse(localStorage.getItem("userArray"));
console.log(userArray);

function createNewUser() {
  let userName = document.getElementById("user-name").value;
  let userLastName = document.getElementById("user-lastname").value;
  let userCell = document.getElementById("user-cell").value;
  let userEmail = document.getElementById("user-email").value;
  let country = document.getElementById("country-list").value;
  let img = "./assets/dog.jpg";


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
    console.log(userName);
    userArray.unshift({
      picture: { large: img },
      name: { first: userName, last: userLastName },
      phone: userCell,
      email: userEmail,
      location: { country: country },
      // picture: userImg,
    });
  }

  let answer = prompt("Ønsker du å opprette en bruker? (ja/nei)");
  if (answer === "ja") {
    // showStaffCards(staffArray);
    console.log(userArray);
    localStorage.setItem("userArray", JSON.stringify(userArray));
    window.open("../findsitter.html");
  }
}

let adduserBtn = document.getElementById("add-user-btn");
adduserBtn.addEventListener("click", createNewUser);

