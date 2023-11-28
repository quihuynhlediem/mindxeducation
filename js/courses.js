// Add course function
let coursesArray = localStorage.getItem("courses") ? JSON.parse(localStorage.getItem("courses")) : [];

function addCourse() {
  if (localStorage.getItem("username") != null) {
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
  } else { 
    alert("Vui lòng đăng nhập để đăng kí khóa học");
    window.location.href = "signin.html";
  }
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

// Course filter by clicking tab
let tabChangeItems = document.querySelectorAll(".tab-change-inner");
let textChangeItems = document.querySelectorAll("span.text-change-inner");

// Check whether tab id is stored in local storage
if (localStorage.getItem("activeCourseId") === null) {
  localStorage.setItem("activeCourseId", "1");
};

function tabChangeProcess() {
  let activeTab = document.getElementById(localStorage.getItem("activeCourseId")).parentElement;
  let activeText = document.getElementById(localStorage.getItem("activeCourseId"));
  let activeId = activeText.id;
  activeTab.className = "tab-change-inner tab-change-items-active";
  activeText.className = "text-change-inner tab-change-text-active";
  
  for (let i = 0; i < tabChangeItems.length; i++) {
    if (activeId != textChangeItems[i].id) {
      tabChangeItems[i].className = "tab-change-inner tab-change-items";
      textChangeItems[i].className = "text-change-inner tab-change-text";
    }
  }

  // Filter courses by clicking tab
  let courseItems = document.querySelectorAll(".course-items");
  if (activeText.innerText === "Tất cả") {
    for (let i = 0; i < courseItems.length; i++) {
      courseItems[i].style.display = "block";
    }
  } else {
    for (let i = 0; i < courseItems.length; i++) {
      let currentCourseLabel =
        courseItems[i].firstElementChild.nextElementSibling.innerText;
      if (activeText.innerText === currentCourseLabel) {
        courseItems[i].style.display = "block";
      } else {
        courseItems[i].style.display = "none";
      }
    }
  }
}
// Database JSON - lọc bằng hàm render => xử lí được lượng lớn data

tabChangeProcess();

function tabChange() { 
  let activeCourseId = this.event.target.id;
  localStorage.setItem("activeCourseId", activeCourseId);
  tabChangeProcess();
}
