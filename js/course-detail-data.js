//Render data from js file
let courseTitle = document.getElementsByClassName("header-title")[0];
let tabTitle = document.getElementById("tab-title");
let courseDescription =
	document.getElementsByClassName("header-description")[0];
let enrollBtn = document.getElementsByClassName("course-enroll")[0];
let readmoreBtn = document.getElementsByClassName("course-readmore")[0];
let studyTime = document.getElementById("study-time");
let courseFee = document.getElementById("course-fee");
let studentAge = document.getElementById("student-age");
let courseLevel = document.getElementById("course-level");
let courseOverview = document.getElementsByClassName("post-content")[0];

fetch("https://6534cb5de1b6f4c59046ee28.mockapi.io/vieCourses")
	.then(function (response) {
		return response.json();
	})
	.then(function (data) {
		let courseId = Number(localStorage.getItem("courseId")[1]) - 1;
		console.log(courseId);
		let vieData = data;
		//console.log(vieData);

		courseTitle.innerText = vieData[courseId].title;
		tabTitle.innerText = vieData[courseId].title;
		courseDescription.innerText = vieData[courseId].description;
		studyTime.innerText = vieData[courseId].study_time;
		courseFee.innerText = vieData[courseId].course_fee;
		studentAge.innerText = vieData[courseId].student_age;
		courseLevel.innerText = vieData[courseId].course_level;

		for (i = 0; i < vieData[courseId].main_content.length; i++) {
			let newPart = document.createElement("div");
			newPart.innerText = vieData[courseId].main_content[i];
			newPart.className = "post-text";
			courseOverview.appendChild(newPart);
		}
	});

// Enroll button status update
let courses = JSON.parse(localStorage.getItem("courses"));
if (courses && courses.includes(vieData[courseId].title)) {
	enrollBtn.innerText = "Đã đăng ký";
	enrollBtn.disabled = true;
	enrollBtn.style.backgroundColor = "#982a26";
}

// Click to enroll course on detail page
enrollBtn.addEventListener("click", function () {
	if (courses) {
		courses.push(vieData[courseId].title);
		localStorage.setItem("courses", JSON.stringify(courses));
	} else {
		localStorage.setItem("courses", JSON.stringify([vieData[courseId].title]));
	}
	enrollBtn.innerText = "Đã đăng ký";
	enrollBtn.disabled = true;
	enrollBtn.style.backgroundColor = "#982a26";
	window.location.reload();
});
