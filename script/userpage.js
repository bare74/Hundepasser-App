var cart = JSON.parse(localStorage.getItem("cart"));
console.log(cart);

var test = JSON.parse(localStorage.getItem("test"));
console.log(test);


var first = test[cart];
console.log(first);

let userContainer = document.getElementById("user-cart");
userContainer.innerHTML = "";

let div = document.createElement("div");
div.classList.add("user-card");

let img = document.createElement("img");
img.classList.add("user-img");
img.src = first.picture.large;

let userName = document.createElement("p");
userName.innerText = "Fornavn: " + first.name.first;

let userLastName = document.createElement("p");
userLastName.innerText = "Etternavn: " + first.name.last;

let userEmail = document.createElement("p");
userEmail.innerText = "E-post: " + first.email;

let userPhone = document.createElement("p");
userPhone.innerText = "Mobil nr: " + first.phone;


// let editUser = document.createElement("button");
// editUser.innerText = "Endre bruker";
// editUser.classList.add("edit-user");
// editUser.addEventListener("click", function () {
//   editUserMember(userArray, i);
// });

div.append(
  img,
  userName,
  userLastName,
  userEmail,
  userPhone,
  // editUser
);
userContainer.append(div);


// document.getElementById("user-cart").innerHTML =
//   first.name.first +
//   " " +
//   first.name.last +
//   " " +
//   first.email +
//   " " +
//   first.picture.large;

// function showUserCart (first){
// let userCart = document.getElementById("user-cart");
// userCart.innerHTML = "";


//    for (let i = 0; i < first.length; i++) {
//       let div = document.createElement("div");
//       div.style.backgroundColor = "red"
//       div.classList.add("random-user-card"); 

//       let img = document.createElement("img");
//       img.classList.add("user-img");
//       img.src = first[i].picture.large;

//       div.append(
//         img,
//       );
//       userCart.append(div);
// }}

// showUserCart(cart);

