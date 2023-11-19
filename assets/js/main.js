const loginEl = document.getElementById("login");
const emailEl = loginEl.querySelector("#email");
const emailLabel = loginEl.querySelector("#email_label");
const passwordEl = loginEl.querySelector("#password");
const passwordLabel = loginEl.querySelector("#password_label");
const submitBtn = loginEl.querySelector("#submit-btn");

loginEl.addEventListener("submit", sendData);

async function sendData(e) {
 e.preventDefault();

 const email = emailEl.value;
 const password = passwordEl.value;

 if (email === "") {
  emailLabel.style.color = "red";
  emailEl.style.borderColor = "red";
  return;
 }
 if (password === "") {
  passwordLabel.style.color = "red";
  passwordEl.style.borderColor = "red";
  return;
 }
 resetColor();
 const user = {
  email,
  password,
 };
 console.log("newuser", user);
 const res = await fetch("https://jsonplaceholder.typicode.com/users", {
  method: "POST",
  body: JSON.stringify(user),
 });
 const data = await res.json();
 console.log("server result", data);
}

function resetColor() {
 emailLabel.style.color = "#000";
 emailEl.style.borderColor = "transparent";
 passwordLabel.style.color = "#000";
 passwordEl.style.borderColor = "transparent";
}
