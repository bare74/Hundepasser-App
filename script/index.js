export const userApi = "https://randomuser.me/api/?results=200";


let user = [];
let userArray = [];
let randomUser = [];

async function fetchUserApi() {
  try {
    let response = await fetch(userApi);
    let data = await response.json();
    user.push(data);

    data.results.filter((e) => {
      userArray.push(e);
    });
  } catch (err) {
    console.log(err);
  }
}




setInterval(function () {
  randomUser = userArray.slice(0, 4).map(function () {
    return this.splice(Math.floor(Math.random() * this.length), 1)[0];
  }, userArray.slice());

  showRandomUser(randomUser);
}, 3000);

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

// function sleep(e) {
//   return new Promise((resolve) => setTimeout(resolve, e));
// }

// async function delayedGreeting() {
//   await sleep(2000);
//   const random = Math.floor(Math.random() * userApi.length);
//   //  console.log(random, userApi[random]);
// }

// delayedGreeting();



fetchUserApi();
