// JavaScript for comment box
let starLabel = document.querySelectorAll(".star-label");
let starCheck = document.querySelectorAll(".rating input[type=radio]");
let ratingContainer = document.querySelector(".rating");
let starValue = 0;
const blogid = localStorage.getItem("blogId");
let avatarURL = localStorage.getItem("avatar") == null ? "../static/images/user-avatar.png" : localStorage.getItem("avatar");


//Add avatar to comment box
let avatarCmtBox = document.getElementById("user-avatar-cmt");
avatarCmtBox.src = avatarURL;

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

function renderComment(username, userAvatar, date, rating, content) {
	let userComment = document.createElement("div");
	userComment.className = "user-comment";
	userComment.innerHTML = `
		<div class="comment-header">
			<div class="comment-user">
				<img src=${userAvatar}>
				<div class="cmt-user-date">
					<span class="comment-username">${username}</span>
					<span class="comment-date">${date}</span>
				</div>
			</div>
			<span class="comment-star"></span>  
		</div>
		<div class="comment-content">
			<p>${content}</p>
		</div>
	`;
	commentContainer.appendChild(userComment);
	let commentRating = userComment.querySelector(".comment-star");
	for (i = 0; i < rating; i++) {
		let star = document.createElement("label");
		star.className = "star-label-comment";
		star.innerHTML = "&#9733;";
		commentRating.appendChild(star);
	}
	for (i = rating; i < 5; i++) {
		let star = document.createElement("label");
		star.className = "star-label-comment";
		star.innerHTML = "&#9734;";
		commentRating.appendChild(star);
	}
}

// submitBtn.addEventListener("click", function () {
// 	if (localStorage.getItem("username") != null) {
// 		if (commentContent.value == "") {
// 			alert("Please enter your comment!");
// 		} else {
// 			let username = localStorage.getItem("username");
// 			let dt = new Date();
// 			let date =
// 				dt.getFullYear() + "-" + (dt.getMonth() + 1) + "-" + dt.getDate();

// 			renderComment(username, date, starValue, commentContent.value);

// 			// Store cmt data in localStorage Starts
// 			let currentComment = {
// 				username: username,
// 				date: date,
// 				rating: starValue,
// 				content: commentContent.value,
// 			};

// 			let commentsObj;
// 			let commentsArray;
// 			if (localStorage.getItem("comments") === null) {
// 				commentsObj = {};
// 			} else {
// 				commentsObj = JSON.parse(localStorage.getItem("comments"));
// 			}

// 			if (commentsObj[blogid] === null || commentsObj[blogid] === undefined) {
// 				commentsArray = [];
// 			} else {
// 				commentsArray = commentsObj[blogid];
// 			}

// 			commentsArray.push(currentComment);
// 			commentsObj[blogid] = commentsArray;
// 			localStorage.setItem("comments", JSON.stringify(commentsObj));
// 			// Store cmt data in localStorage Ends
// 			setTimeout(function () {
// 				commentContent.value = "";
// 				starValue = 0;
// 				for (i = 0; i < 5; i++) {
// 					starLabel[i].innerHTML = "&#9734;";
// 				}
// 			}, 1000);
// 		}
// 	} else {
// 		alert("Vui lòng đăng nhập để bình luận");
// 		window.location.href = "signin.html";
// 	}
// });

// Render comments from localStorage Starts
let commentsObject;
if (localStorage.getItem("comments") === null) {
	commentsObject = {};
} else {
	commentsObject = JSON.parse(localStorage.getItem("comments"));
}
let commentArray = commentsObject[blogid];
if (commentArray === null || commentArray === undefined) {
	commentArray = [];
}

// commentArray.forEach(comment => {
//   renderComment(comment.username, comment.date, comment.rating, comment.content);
// });


for (let i = 0; i < commentArray.length; i++) {
	renderComment(
		commentArray[i].username,
		commentArray[i].user_avatar,
		commentArray[i].date,
		commentArray[i].rating,
		commentArray[i].content
	);
 }
