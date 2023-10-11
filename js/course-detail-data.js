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
//console.log(courseOverview);

let vieCourseData = {
	1: {
		title: "Khoá học lập trình Website cơ bản",
		description:
			"Lộ trình chú trọng thực hành, chương trình học tối ưu, trang bị kiến thức và kỹ năng bám sát nhu cầu tuyển dụng của doanh nghiệp. Khoá học gồm các kiến thức cơ bản của HTML, CSS, JavaScript.",
		study_time: "16 buổi",
		course_fee: "5.000.000 VND",
		student_age: "18 tuổi trở lên",
		course_level: "Cơ bản",
		main_content: [
			"Cùng với sự phát triển mạnh mẽ của ngành Công nghệ, lập trình viên vẫn đang là ngành nghề có nhu cầu nhân lực cao, một trong những nguồn nhân lực không thể thiếu của xã hội. Theo báo cáo của TopDev, năm 2023, nhu cầu nhân lực ngành IT đã tăng thêm 30,8%. Thê nhưng, đi kèm với đó là nhu cầu tuyển dụng ngày càng gắt gao.",
			"Vậy, cần chuẩn bị những gì để gia nhập ngành Lập trình?",
			"- Kiến thức nền tảng vững chắc giúp bạn dễ dàng phát triển kỹ năng, học hỏi công nghệ mới.",
			"- Kỹ năng chuyên môn vững chắc về các ngôn ngữ lập trình phổ biến như Javascript, CSS, C++, SQL, Python,...",
			"- Bằng cấp, chứng chỉ đào tạo được công nhận: Kể cả bạn học trái ngành, bạn vẫn nên lựa chọn những đơn vị đào tạo uy tín để với chứng chỉ được nhiều doanh nghiệp công nhận.",
			"Hơn tất cả, bạn cần một lộ trình đào tạo bài bản, rõ ràng và toàn diện cả về chiều rộng và chiều sâu để chuẩn bị hành trang tốt nhất trước khi dấn thân vào ngành?",
			"Nếu bạn vẫn đang tìm kiếm lộ trình học phù hợp cho riêng mình, hãy tham gia ngay cùng chúng tôi.",
		],
	},
	2: {
		title: "Khoá học Phân tích dữ liệu cơ bản",
		description:
			"Phân tích dữ liệu không chỉ là một ngành nghề tiềm năng mà sớm muộn gì cũng trở thành một kỹ năng thiết yếu mà nhà tuyển dụng yêu cầu.",
		study_time: "10 buổi",
		course_fee: "4.000.000 VND",
		student_age: "20 tuổi trở lên",
		course_level: "Cơ bản",
		main_content: [
			"Cùng với sự phát triển mạnh mẽ của ngành Công nghệ, phân tích dữ liệu đang trở thành một ngành nghề tiềm năng với nhu cầu ngày càng tăng trong thị trường lao động.",
			"Để thành công trong lĩnh vực này, bạn cần nắm vững các kỹ thuật phân tích dữ liệu cơ bản và sử dụng các công cụ phân tích dữ liệu.",
			"Khoá học này cung cấp kiến thức cơ bản về phân tích dữ liệu và giúp bạn phát triển kỹ năng phân tích dữ liệu một cách hiệu quả.",
			"Nếu bạn muốn bắt đầu sự nghiệp trong lĩnh vực phân tích dữ liệu, đừng bỏ lỡ cơ hội tham gia khoá học này.",
		],
	},
	3: {
		title: "Khoá học UI/UX Design cơ bản",
		description:
			"UI/UX Design hiện đang là ngành nghề thuộc lĩnh vực sáng tạo, thu hút nhân sự, đặc biệt là các bạn trẻ bởi tính linh hoạt, mới mẻ.",
		study_time: "12 buổi",
		course_fee: "4.500.000 VND",
		student_age: "18 tuổi trở lên",
		course_level: "Cơ bản",
		main_content: [
			"UI/UX Design là một lĩnh vực đầy tiềm năng và thu hút sự quan tâm của nhiều người trẻ. Đây là một công việc sáng tạo và đòi hỏi kiến thức về thiết kế và trải nghiệm người dùng.",
			"Khoá học này sẽ giúp bạn nắm vững các kiến thức cơ bản về thiết kế giao diện người dùng (UI) và trải nghiệm người dùng (UX).",
			"Nếu bạn muốn khám phá lĩnh vực thiết kế sáng tạo và độc đáo, hãy tham gia khoá học này để bắt đầu sự nghiệp của bạn trong UI/UX Design.",
		],
	},
	4: {
		title: "Khoá học phân tích dữ liệu nâng cao",
		description:
			"Thực hành các kỹ thuật Supervised Learning, Unsupervised Learning và xây dựng mô hình dự báo hoàn chỉnh,...",
		study_time: "20 buổi",
		course_fee: "6.000.000 VND",
		student_age: "20 tuổi trở lên",
		course_level: "Nâng cao",
		main_content: [
			"Khoá học phân tích dữ liệu nâng cao tập trung vào các kỹ thuật tiên tiến như Supervised Learning, Unsupervised Learning và xây dựng các mô hình dự báo phức tạp.",
			"Nếu bạn đã có kiến thức cơ bản về phân tích dữ liệu và muốn nâng cao trình độ, khoá học này sẽ giúp bạn phát triển kỹ năng phân tích dữ liệu một cách chuyên sâu.",
			"Hãy tham gia ngay để trở thành một chuyên gia trong lĩnh vực phân tích dữ liệu!",
		],
	},
	5: {
		title: "Lập trình Scratch cho trẻ em",
		description:
			"Khóa học cung cấp cho học sinh tư duy thuật toán - tư duy cơ bản nhất của việc chuyển hóa các vấn đề của cuộc sống...",
		study_time: "10 buổi",
		course_fee: "3.000.000 VND",
		student_age: "6-12 tuổi",
		course_level: "Cơ bản",
		main_content: [
			"Khoá học này dành cho học sinh từ 6 đến 12 tuổi, giúp họ phát triển tư duy thuật toán và tư duy logic cơ bản thông qua lập trình Scratch.",
			"Nếu bạn muốn con bạn có khả năng tư duy logic và giải quyết vấn đề, hãy đăng ký khoá học này ngay!",
		],
	},
	6: {
		title: "Khoá học UI/UX Design nâng cao",
		description:
			"Cung cấp các kiến thức chuyên sâu trong các ngành nghề liên quan tới UX, xây dựng các kĩ năng làm việc nhóm, quy trình làm việc...",
		study_time: "20 buổi",
		course_fee: "6.000.000 VND",
		student_age: "18 tuổi trở lên",
		course_level: "Nâng cao",
		main_content: [
			"Khoá học UI/UX Design nâng cao tập trung vào cung cấp kiến thức chuyên sâu trong các ngành nghề liên quan tới trải nghiệm người dùng (UX) và xây dựng các kĩ năng làm việc nhóm trong quy trình làm việc.",
			"Nếu bạn đã có kiến thức cơ bản về UI/UX Design và muốn nâng cao trình độ, hãy tham gia khoá học này để trở thành một chuyên gia trong lĩnh vực này.",
		],
	},
};

let courseId = localStorage.getItem("courseId")[1]; //string
let vieData = vieCourseData;
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

// Enroll button status update
let courses = JSON.parse(localStorage.getItem("courses"));
if ((courses) && (courses.includes(vieData[courseId].title))) {
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