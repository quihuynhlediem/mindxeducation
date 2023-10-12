// JavaScript for comment box
let starLabel = document.querySelectorAll(".star-label");
let starCheck = document.querySelectorAll(".rating input[type=radio]");
let ratingContainer = document.querySelector(".rating");
let starValue = 0;

ratingContainer.addEventListener("click", function () {
	for (i = 0; i < 5; i++) {
		if (starCheck[i].checked == true) {
			starValue = Number(starCheck[i].value);
			for (j = 0; j < starValue; j++) {
				starLabel[j].innerHTML = "&#9733;";
			}
			for (j = starValue; j < 5; j++) {
				starLabel[j].innerHTML = "&#9734;";
			}
		}
	}
});

function starMouseover() {
	let starId = Number(this.event.target.previousElementSibling.id.slice(-1));
	for (i = 0; i < starId; i++) {
		starLabel[i].innerHTML = "&#9733;";
	}
}

function starMouseout() {
	let starId = Number(this.event.target.previousElementSibling.id.slice(-1));
	for (i = 0; i < starId; i++) {
		starLabel[i].innerHTML = "&#9734;";
	}
	for (j = 0; j < starValue; j++) {
		starLabel[j].innerHTML = "&#9733;";
	}
}

// JavaScript for rendering comments
let commentContent = document.getElementById("comment");
let commentContainer = document.querySelector(".comments-container");
let submitBtn = document.getElementsByClassName("submit-btn")[0];
let cancelBtn = document.getElementsByClassName("cancel-btn")[0];

submitBtn.addEventListener("click", function () {
	if (commentContent.value == "") {
		alert("Please enter your comment!");
  } else {
    let username = localStorage.getItem("username");
    let dt = new Date();
    let date = dt.getFullYear() + "-" + (dt.getMonth() + 1) + "-" + dt.getDate();
		let userComment = document.createElement("div");
		userComment.className = "user-comment";
		userComment.innerHTML = `
      <div class="comment-header">
        <div class="comment-user">
          <img src="../../static/images/avatar.jpeg" alt="user">
          <div class="cmt-user-date">
            <span class="comment-username">${username}</span>
            <span class="comment-date">${date}</span>
          </div>
        </div>
        <span class="comment-star"></span>  
      </div>
      <div class="comment-content">
        <p>${commentContent.value}</p>
      </div>
    `;
    commentContainer.appendChild(userComment);
    let commentRating = userComment.querySelector(".comment-star");
    for (i = 0; i < starValue; i++) {
      let star = document.createElement("label");
      star.className = "star-label-comment";
      star.innerHTML = "&#9733;";
			commentRating.appendChild(star);
		}
		for (i = starValue; i < 5; i++) {
      let star = document.createElement("label");
      star.className = "star-label-comment";
      star.innerHTML = "&#9734;";
			commentRating.appendChild(star);
		}
		commentContent.value = "";
		starValue = 0;
		for (i = 0; i < 5; i++) {
			starLabel[i].innerHTML = "&#9734;";
		}
	}
});
