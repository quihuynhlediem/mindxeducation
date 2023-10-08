let coursesArray = localStorage.getItem("courses") ? JSON.parse(localStorage.getItem("courses")) : [];

function addCourse() {
  let courseName = this.event.target.parentElement.previousElementSibling.previousElementSibling.innerHTML;
  if (coursesArray.includes(courseName) == false) {
    coursesArray.push(courseName);
  };
  localStorage.setItem("courses", JSON.stringify(coursesArray));
  //Change button style
  let enrolledBtn = this.event.target;
  enrolledBtn.innerHTML = "Đã đăng kí";
  enrolledBtn.style.backgroundColor = "#982a26";
  window.location.reload();
}

let mindxCourseArray = document.getElementsByClassName("course-title");
for (let i = 0; i < mindxCourseArray.length; i++) {
  let enrolledCourseBtn = mindxCourseArray[i].nextElementSibling.nextElementSibling.firstElementChild;
  //console.log(enrolledCourseBtn);
  if (coursesArray.includes(mindxCourseArray[i].innerHTML) == true) {
    enrolledCourseBtn.innerHTML = "Đã đăng kí";
    enrolledCourseBtn.style.backgroundColor = "#982a26";
  };
}
