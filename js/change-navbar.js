let email = localStorage.getItem("email");
let signinRemoveItem = document.getElementById("signin-remove-item");
let signupRemoveItem = document.getElementById("signup-remove-item");
let navbar = document.getElementById("nav-list");

// Change from non-logged-in to logged-in Starts
if (email != null) {
	signinRemoveItem.remove();
	signupRemoveItem.remove();
	const profile = document.createElement("li");
	profile.className = "nav-item";
	profile.style.width = "4rem";
	profile.innerHTML = `
  <div class="profile-dropdown">
    <div><img src="../static/images/user-avatar.png"></div>
    <div class="dropdown-content" id="profile-btn">
      <div class="inner-dropdown"><i id="profile-icon" class="fa-solid fa-user"></i>Hồ sơ</div>
    </div>
    <div class="dropdown-content" id="logout-btn">
      <div class="inner-dropdown"><i id="logout-icon" class="fa-solid fa-right-from-bracket"></i>Đăng xuất</div>
    </div>
  </div>
  `;
	navbar.appendChild(profile);

	// Logout Starts
	let logoutBtn = document.getElementById("logout-btn");
	logoutBtn.addEventListener("click", () => {
    localStorage.clear();
    setTimeout(function () {
      console.log(profile);
		profile.remove();
		const signinItem = document.createElement("li");
		signinItem.className = "nav-item";
		signinItem.id = "signin-remove-item";
		signinItem.innerHTML = `
  <a class="nav-link" aria-current="page" href="./html/signin.html">Sign In
  </a>
`;
		const signupItem = document.createElement("li");
		signupItem.className = "nav-item";
		signupItem.id = "signup-remove-item";
		signupItem.innerHTML = `
  <a class="nav-link" aria-current="page" href="./html/signup.html">Sign Up
  </a> 
  `;
		navbar.appendChild(signinItem);
		navbar.appendChild(signupItem);
    }, 2000);
		
		// setTimeout(function () {
		//   location.reload();
		// }, 2000);
	});
};


// } else if ((document.getElementById("signin-remove-item") == null) && (document.getElementById("signup-remove-item") == null)){
//   const signinItem = document.createElement("li");
//   signinItem.className = "nav-item";
//   signinItem.id = "signin-remove-item";
// 		signinItem.innerHTML = `
//   <a class="nav-link" aria-current="page" href="./html/signin.html">Sign In
//   </a>
// `;
//   const signupItem = document.createElement("li");
//   signupItem.className = "nav-item";
//   signupItem.id = "signup-remove-item";
// 		signupItem.innerHTML = `
//   <a class="nav-link" aria-current="page" href="./html/signup.html">Sign Up
//   </a>
//   `;
// 		navbar.appendChild(signinItem);
// 		navbar.appendChild(signupItem);
//  };
