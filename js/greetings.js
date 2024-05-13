const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function paintingGreetings(username) {
    console.log(username);
    greeting.innerText = `Hi ${username}! Have a great day :)`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, username);
    paintingGreetings(username);
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    console.log("abfgd");
  loginForm.classList.remove(HIDDEN_CLASSNAME)  ;
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintingGreetings(savedUsername);
}