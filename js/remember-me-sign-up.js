let rememberCheck = document.getElementById("remember");
let username = document.getElementById("usernameSignup");
let password = document.getElementById("passwordSignup");

rememberCheck.addEventListener("change", () => {
  if (rememberCheck.checked == true) {
    localStorage.setItem("password", password.value);
    localStorage.setItem("username2", username.value);

  } else {
    localStorage.removeItem("password");
    localStorage.removeItem("username2");
   }
 });