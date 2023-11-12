let rememberCheck = document.getElementById("remember");
let username = document.getElementById("usernameLogin");
let password = document.getElementById("passwordLogin");

// console.log(rememberCheck);
// rememberCheck.checked = true;

if ((localStorage.getItem("username2") != null) && (localStorage.getItem("password") != null)) {
  let usernameValue = localStorage.getItem("username2");
  let passwordValue = localStorage.getItem("password");

  username.value = usernameValue;
  password.value = passwordValue;
}


rememberCheck.addEventListener("change", () => {
  if (rememberCheck.checked == true) {
    localStorage.setItem("password", password.value);
    localStorage.setItem("username2", username.value);

  } else {
    localStorage.removeItem("password");
    localStorage.removeItem("username2");
   }
 });