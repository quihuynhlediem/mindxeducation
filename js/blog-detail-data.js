let blogTitle = document.getElementsByClassName("header-title")[0];
let tabTitle = document.getElementById("tab-title");
//console.log(tabTitle);
let blogImg = document.getElementsByClassName("header-img")[0];
let blogContent = document.getElementsByClassName("post-content")[0];
// console.log(blogContent);

fetch("https://6534cb5de1b6f4c59046ee28.mockapi.io/vieBlogs")
	.then(function (response) {
		return response.json();
	})
	.then(function (data) {
		let blogId = Number(localStorage.getItem("blogId")) - 1;
		let vieData = data;

		blogTitle.innerText = vieData[blogId].title;
		tabTitle.innerText = vieData[blogId].title;
		blogImg.src = vieData[blogId].img;

		for (i = 0; i < vieData[blogId].main_content.length; i++) {
			let newPart = document.createElement("div");
			newPart.innerText = vieData[blogId].main_content[i].content;
			newPart.className = vieData[blogId].main_content[i].classname;
			blogContent.appendChild(newPart);
		}
	});
