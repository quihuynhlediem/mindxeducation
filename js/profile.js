let userName = document.querySelector('.username');
let userEmail = document.querySelector('.email');
let coursesList = document.querySelector('.courses');
let coursesListData = JSON.parse(localStorage.getItem('courses'));
let profileAvatar = document.querySelector('.avatar');
console.log(profileAvatar);

userEmail.innerText = localStorage.getItem('email');
userName.innerText = localStorage.getItem('username');
profileAvatar.src = localStorage.getItem('avatar');

for (let i = 0; i < coursesListData.length; i++) {
  let courseItem = document.createElement('div');
  courseItem.classList.add('course-item');
  courseItem.innerHTML = coursesListData[i];
  coursesList.appendChild(courseItem);
}