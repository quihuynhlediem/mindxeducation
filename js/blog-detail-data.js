let blogTitle = document.getElementsByClassName("header-title")[0];
let blogImg = document.getElementsByClassName("header-img")[0];

let paragraphOne = document.getElementById("para1");
let paragraphTwo = document.getElementById("para2");
let paragraphThree = document.getElementById("para3");
let paragraphFour = document.getElementById("para4");
let paragraphFive = document.getElementById("para5");
let paragraphSix = document.getElementById("para6");
let paragraphSeven = document.getElementById("para7");
let paragraphEight = document.getElementById("para8");

let vieBlogData = {
	1: {
		title:
			"Product Management - Ngành hot, lương cao và cực tiềm năng trong thời đại số",
		img: "https://resources.mindx.edu.vn/uploads/images/product-manager-nga%CC%80nh-hot-luong-cao-720.png",
		para1:
			"Product Management là lĩnh vực quản lý sản phẩm công nghệ. Trong đó, bạn sẽ chịu trách nhiệm quản lý 1 phần hoặc toàn bộ quá trình phát triển sản phẩm. Trong quy trình này, bạn sẽ làm việc với các stakeholders (Data Analyst, UI/UX Designer, Developer, Tester, Marketer, Salesman,...) để đảm bảo quá sản phẩm được tạo ra đáp hướng về người dùng cuối. Người làm Product Management đóng vai trò quan trọng cho sự thành bại của sản phẩm.Chính vì thế, ngành nghề này ngày càng trở nên tiềm năng và được tuyển dụng rất nhiều.",
		para2:
			"Các vị trí công việc phổ biến trong ngành Product Management bao gồm:",
		para3:
			"Product Manager: Người chịu trách nhiệm cho toàn bộ quá trình phát triển sản phẩm. Product Manager là người định hình chiến lược sản phẩm, xác định tính năng và yêu cầu, quản lý nhóm phát triển sản phẩm và đảm bảo rằng sản phẩm đáp ứng mục tiêu kinh doanh và nhu cầu của khách hàng.",
		para4:
			"Product Owner: Người chịu trách nhiệm về việc đưa ra các yêu cầu cụ thể cho sản phẩm, làm việc cùng với nhóm phát triển để đảm bảo rằng sản phẩm được xây dựng đúng hướng và đáp ứng nhu cầu của khách hàng. Product Owner thường là người tiếp xúc trực tiếp với nhóm phát triển.",
		para5:
			"Product Associate: Vị trí này hỗ trợ các công việc của Product Manager và Product Owner. Các nhiệm vụ có thể bao gồm nghiên cứu thị trường, thu thập phản hồi từ khách hàng, và tham gia vào quá trình quản lý sản phẩm.",
		para6:
			"Growth Product Manager: Tập trung vào việc phát triển chiến lược tăng trưởng cho sản phẩm. Growth Product Manager thường làm việc để tối ưu hóa các khía cạnh của sản phẩm để đạt được mục tiêu tăng trưởng kinh doanh.",
		para7:
			"Data Product Manager: Chịu trách nhiệm quản lý dữ liệu liên quan đến sản phẩm và sử dụng dữ liệu để tối ưu hóa sản phẩm. Vị trí này liên quan đến việc phân tích dữ liệu, xây dựng tính năng dựa trên dữ liệu, và đảm bảo tích hợp dữ liệu hiệu quả vào sản phẩm.",
		para8:
			"Technical Product Manager: Tập trung vào việc quản lý các tính năng kỹ thuật của sản phẩm. Technical Product Manager là người kết nối giữa các nhóm phát triển kỹ thuật và các nhóm khác trong công ty để đảm bảo tính hợp nhất và hiệu quả của sản phẩm.",
	},
	2: {
		title:
			"Product Management - Ngành hot, lương cao và cực tiềm năng trong thời đại số",
		img: "https://resources.mindx.edu.vn/uploads/images/product-manager-nga%CC%80nh-hot-luong-cao-720.png",
		para1:
			"Product Management là lĩnh vực quản lý sản phẩm công nghệ. Trong đó, bạn sẽ chịu trách nhiệm quản lý 1 phần hoặc toàn bộ quá trình phát triển sản phẩm. Trong quy trình này, bạn sẽ làm việc với các stakeholders (Data Analyst, UI/UX Designer, Developer, Tester, Marketer, Salesman,...) để đảm bảo quá sản phẩm được tạo ra đáp hướng về người dùng cuối. Người làm Product Management đóng vai trò quan trọng cho sự thành bại của sản phẩm.Chính vì thế, ngành nghề này ngày càng trở nên tiềm năng và được tuyển dụng rất nhiều.",
		para2:
			"Các vị trí công việc phổ biến trong ngành Product Management bao gồm:",
		para3:
			"Product Manager: Người chịu trách nhiệm cho toàn bộ quá trình phát triển sản phẩm. Product Manager là người định hình chiến lược sản phẩm, xác định tính năng và yêu cầu, quản lý nhóm phát triển sản phẩm và đảm bảo rằng sản phẩm đáp ứng mục tiêu kinh doanh và nhu cầu của khách hàng.",
		para4:
			"Product Owner: Người chịu trách nhiệm về việc đưa ra các yêu cầu cụ thể cho sản phẩm, làm việc cùng với nhóm phát triển để đảm bảo rằng sản phẩm được xây dựng đúng hướng và đáp ứng nhu cầu của khách hàng. Product Owner thường là người tiếp xúc trực tiếp với nhóm phát triển.",
		para5:
			"Product Associate: Vị trí này hỗ trợ các công việc của Product Manager và Product Owner. Các nhiệm vụ có thể bao gồm nghiên cứu thị trường, thu thập phản hồi từ khách hàng, và tham gia vào quá trình quản lý sản phẩm.",
		para6:
			"Growth Product Manager: Tập trung vào việc phát triển chiến lược tăng trưởng cho sản phẩm. Growth Product Manager thường làm việc để tối ưu hóa các khía cạnh của sản phẩm để đạt được mục tiêu tăng trưởng kinh doanh.",
		para7:
			"Data Product Manager: Chịu trách nhiệm quản lý dữ liệu liên quan đến sản phẩm và sử dụng dữ liệu để tối ưu hóa sản phẩm. Vị trí này liên quan đến việc phân tích dữ liệu, xây dựng tính năng dựa trên dữ liệu, và đảm bảo tích hợp dữ liệu hiệu quả vào sản phẩm.",
		para8:
			"Technical Product Manager: Tập trung vào việc quản lý các tính năng kỹ thuật của sản phẩm. Technical Product Manager là người kết nối giữa các nhóm phát triển kỹ thuật và các nhóm khác trong công ty để đảm bảo tính hợp nhất và hiệu quả của sản phẩm.",
	},
	3: {
		title:
			"Graphic Design & UI/UX Design: Giống và khác nhau như thế nào?",
		img: "https://resources.mindx.edu.vn/uploads/images/Graphic-Design-Business-1024x683.jpg",
		para1:
			"Graphic Design tập trung vào yếu tố thị giác, trong khi UI/UX Design tập trung vào tương tác. Graphic Design sẽ sử dụng ý tưởng kết hợp với các nguyên tắc về màu sắc, kiểu chữ... để tạo nên các hình ảnh có tính trực quan như ấn phẩm in ấn, quảng cáo, hình ảnh 2D, 3D.",
		para2:
			"Trong khi đó, UI/UX Design cần có kiến thức đa ngành từ thiết kế, nghiên cứu người dùng cho đến kiến trúc thông tin, lập bản mẫu wireframe và thiết kế nguyên mẫu để tạo nên các thiết kế tương tác trên các website hoặc phần mềm, ứng dụng. Điểm khác biệt ở đây là tính tương tác với người dùng.",
		para3:
			"Mục tiêu của Graphic Design là hướng đến yếu tố thương hiệu, các sản phẩm từ Graphic Design sẽ truyền đạt đạt được thông điệp của thương hiệu và gắn với các nhận diện thương hiệu như màu sắc, font chữ... lấy thương hiệu làm trung tâm. Tuy nhiên, Graphic Designer có thể thoải mái tự do sáng tạo miễn sao vẫn thể hiện được các yếu tố thương hiệu trong sản phẩm thiết kế.",
		para4:
			"Đối với UI/UX Design sẽ hướng tới trải nghiệm người dùng, lấy người dùng làm trung tâm và đảm bảo sản phẩm giúp người dùng sử dụng một cách dễ dàng hơn. Tuy nhiên, UI/UX Designer lại bị giới hạn trong các quy tắc về cấu trúc dữ liệu và nhu cầu người dùng.",
		para5:
			"Trước khi bắt tay vào thực hiện sản phẩm thiết kế, Graphic Designer sẽ phải làm việc với khách hàng, giám đốc sáng tạo và bộ phận Marketing, sale để thống nhất phương án. Sau đó, từ các thông tin và yêu cầu sẽ lên brief và chuẩn bị tiến hành công việc.",
		para6:
			"UI/UX Designer đóng vai trò quan trọng hơn cả trong quá trình phát triển phần mềm, website. Các UI/UX Designer sẽ phải làm việc với Product Owner, Product Manager, Developer, Researcher, IT Business Analyst... để thống nhất phương án phát triển sản phẩm. Thông qua nghiên cứu người dùng và xác định mục tiêu người dùng, hành vi và xu hướng người dùng, UI/UX Designer sẽ phải tạo chân dung người dùng và tiến hành thiết kế sơ đồ trang web, wireframe và prototype. Sau đó, tiến hành đánh giá thông qua trải nghiệm người dùng và lặp lại bước này với các bản cập nhật sửa lỗi cho đến khi có được sản phẩm hoàn chỉnh.",
		para7:
			"Các kiến thức chuyên môn về thiết kế, quy tắc màu sắc, font chữ... là những kiến thức cơ bản nhất yêu cầu đối với mọi Graphic Designer. Trong khi đó, UI/UX Designer yêu cầu kiến thức đa ngành, ngoài biết thiết kế thì UI/UX Designer cần có các kỹ năng như nghiên cứu người dùng, tạo nguyên mẫu, kiến trúc thông tin, wireframing và khả năng thấu hiểu tâm lý người dùng.",
		para8:
			"Đối với UI/UX Designer, ứng viên cần có kiến thức chuyên môn, tốt nhất nên có bằng CNTT, tâm lý học, marketing hoặc thiết kế. Trong khi đó, Graphic Designer có yêu cầu thấp hơn với chỉ chuyên môn thiết kế, mắt thẩm mỹ. Tuy nhiên, Graphic Designer cần có khả năng sáng tạo và thấu hiểu thương hiệu."
	},
	4: {
		title:
			"Product Management - Ngành hot, lương cao và cực tiềm năng trong thời đại số",
		img: "https://resources.mindx.edu.vn/uploads/images/product-manager-nga%CC%80nh-hot-luong-cao-720.png",
		para1:
			"Product Management là lĩnh vực quản lý sản phẩm công nghệ. Trong đó, bạn sẽ chịu trách nhiệm quản lý 1 phần hoặc toàn bộ quá trình phát triển sản phẩm. Trong quy trình này, bạn sẽ làm việc với các stakeholders (Data Analyst, UI/UX Designer, Developer, Tester, Marketer, Salesman,...) để đảm bảo quá sản phẩm được tạo ra đáp hướng về người dùng cuối. Người làm Product Management đóng vai trò quan trọng cho sự thành bại của sản phẩm.Chính vì thế, ngành nghề này ngày càng trở nên tiềm năng và được tuyển dụng rất nhiều.",
		para2:
			"Các vị trí công việc phổ biến trong ngành Product Management bao gồm:",
		para3:
			"Product Manager: Người chịu trách nhiệm cho toàn bộ quá trình phát triển sản phẩm. Product Manager là người định hình chiến lược sản phẩm, xác định tính năng và yêu cầu, quản lý nhóm phát triển sản phẩm và đảm bảo rằng sản phẩm đáp ứng mục tiêu kinh doanh và nhu cầu của khách hàng.",
		para4:
			"Product Owner: Người chịu trách nhiệm về việc đưa ra các yêu cầu cụ thể cho sản phẩm, làm việc cùng với nhóm phát triển để đảm bảo rằng sản phẩm được xây dựng đúng hướng và đáp ứng nhu cầu của khách hàng. Product Owner thường là người tiếp xúc trực tiếp với nhóm phát triển.",
		para5:
			"Product Associate: Vị trí này hỗ trợ các công việc của Product Manager và Product Owner. Các nhiệm vụ có thể bao gồm nghiên cứu thị trường, thu thập phản hồi từ khách hàng, và tham gia vào quá trình quản lý sản phẩm.",
		para6:
			"Growth Product Manager: Tập trung vào việc phát triển chiến lược tăng trưởng cho sản phẩm. Growth Product Manager thường làm việc để tối ưu hóa các khía cạnh của sản phẩm để đạt được mục tiêu tăng trưởng kinh doanh.",
		para7:
			"Data Product Manager: Chịu trách nhiệm quản lý dữ liệu liên quan đến sản phẩm và sử dụng dữ liệu để tối ưu hóa sản phẩm. Vị trí này liên quan đến việc phân tích dữ liệu, xây dựng tính năng dựa trên dữ liệu, và đảm bảo tích hợp dữ liệu hiệu quả vào sản phẩm.",
		para8:
			"Technical Product Manager: Tập trung vào việc quản lý các tính năng kỹ thuật của sản phẩm. Technical Product Manager là người kết nối giữa các nhóm phát triển kỹ thuật và các nhóm khác trong công ty để đảm bảo tính hợp nhất và hiệu quả của sản phẩm.",
	},
	5: {
		title:
			"Product Management - Ngành hot, lương cao và cực tiềm năng trong thời đại số",
		img: "https://resources.mindx.edu.vn/uploads/images/product-manager-nga%CC%80nh-hot-luong-cao-720.png",
		para1:
			"Product Management là lĩnh vực quản lý sản phẩm công nghệ. Trong đó, bạn sẽ chịu trách nhiệm quản lý 1 phần hoặc toàn bộ quá trình phát triển sản phẩm. Trong quy trình này, bạn sẽ làm việc với các stakeholders (Data Analyst, UI/UX Designer, Developer, Tester, Marketer, Salesman,...) để đảm bảo quá sản phẩm được tạo ra đáp hướng về người dùng cuối. Người làm Product Management đóng vai trò quan trọng cho sự thành bại của sản phẩm.Chính vì thế, ngành nghề này ngày càng trở nên tiềm năng và được tuyển dụng rất nhiều.",
		para2:
			"Các vị trí công việc phổ biến trong ngành Product Management bao gồm:",
		para3:
			"Product Manager: Người chịu trách nhiệm cho toàn bộ quá trình phát triển sản phẩm. Product Manager là người định hình chiến lược sản phẩm, xác định tính năng và yêu cầu, quản lý nhóm phát triển sản phẩm và đảm bảo rằng sản phẩm đáp ứng mục tiêu kinh doanh và nhu cầu của khách hàng.",
		para4:
			"Product Owner: Người chịu trách nhiệm về việc đưa ra các yêu cầu cụ thể cho sản phẩm, làm việc cùng với nhóm phát triển để đảm bảo rằng sản phẩm được xây dựng đúng hướng và đáp ứng nhu cầu của khách hàng. Product Owner thường là người tiếp xúc trực tiếp với nhóm phát triển.",
		para5:
			"Product Associate: Vị trí này hỗ trợ các công việc của Product Manager và Product Owner. Các nhiệm vụ có thể bao gồm nghiên cứu thị trường, thu thập phản hồi từ khách hàng, và tham gia vào quá trình quản lý sản phẩm.",
		para6:
			"Growth Product Manager: Tập trung vào việc phát triển chiến lược tăng trưởng cho sản phẩm. Growth Product Manager thường làm việc để tối ưu hóa các khía cạnh của sản phẩm để đạt được mục tiêu tăng trưởng kinh doanh.",
		para7:
			"Data Product Manager: Chịu trách nhiệm quản lý dữ liệu liên quan đến sản phẩm và sử dụng dữ liệu để tối ưu hóa sản phẩm. Vị trí này liên quan đến việc phân tích dữ liệu, xây dựng tính năng dựa trên dữ liệu, và đảm bảo tích hợp dữ liệu hiệu quả vào sản phẩm.",
		para8:
			"Technical Product Manager: Tập trung vào việc quản lý các tính năng kỹ thuật của sản phẩm. Technical Product Manager là người kết nối giữa các nhóm phát triển kỹ thuật và các nhóm khác trong công ty để đảm bảo tính hợp nhất và hiệu quả của sản phẩm.",
	},
	6: {
		title:
			"Product Management - Ngành hot, lương cao và cực tiềm năng trong thời đại số",
		img: "https://resources.mindx.edu.vn/uploads/images/product-manager-nga%CC%80nh-hot-luong-cao-720.png",
		para1:
			"Product Management là lĩnh vực quản lý sản phẩm công nghệ. Trong đó, bạn sẽ chịu trách nhiệm quản lý 1 phần hoặc toàn bộ quá trình phát triển sản phẩm. Trong quy trình này, bạn sẽ làm việc với các stakeholders (Data Analyst, UI/UX Designer, Developer, Tester, Marketer, Salesman,...) để đảm bảo quá sản phẩm được tạo ra đáp hướng về người dùng cuối. Người làm Product Management đóng vai trò quan trọng cho sự thành bại của sản phẩm.Chính vì thế, ngành nghề này ngày càng trở nên tiềm năng và được tuyển dụng rất nhiều.",
		para2:
			"Các vị trí công việc phổ biến trong ngành Product Management bao gồm:",
		para3:
			"Product Manager: Người chịu trách nhiệm cho toàn bộ quá trình phát triển sản phẩm. Product Manager là người định hình chiến lược sản phẩm, xác định tính năng và yêu cầu, quản lý nhóm phát triển sản phẩm và đảm bảo rằng sản phẩm đáp ứng mục tiêu kinh doanh và nhu cầu của khách hàng.",
		para4:
			"Product Owner: Người chịu trách nhiệm về việc đưa ra các yêu cầu cụ thể cho sản phẩm, làm việc cùng với nhóm phát triển để đảm bảo rằng sản phẩm được xây dựng đúng hướng và đáp ứng nhu cầu của khách hàng. Product Owner thường là người tiếp xúc trực tiếp với nhóm phát triển.",
		para5:
			"Product Associate: Vị trí này hỗ trợ các công việc của Product Manager và Product Owner. Các nhiệm vụ có thể bao gồm nghiên cứu thị trường, thu thập phản hồi từ khách hàng, và tham gia vào quá trình quản lý sản phẩm.",
		para6:
			"Growth Product Manager: Tập trung vào việc phát triển chiến lược tăng trưởng cho sản phẩm. Growth Product Manager thường làm việc để tối ưu hóa các khía cạnh của sản phẩm để đạt được mục tiêu tăng trưởng kinh doanh.",
		para7:
			"Data Product Manager: Chịu trách nhiệm quản lý dữ liệu liên quan đến sản phẩm và sử dụng dữ liệu để tối ưu hóa sản phẩm. Vị trí này liên quan đến việc phân tích dữ liệu, xây dựng tính năng dựa trên dữ liệu, và đảm bảo tích hợp dữ liệu hiệu quả vào sản phẩm.",
		para8:
			"Technical Product Manager: Tập trung vào việc quản lý các tính năng kỹ thuật của sản phẩm. Technical Product Manager là người kết nối giữa các nhóm phát triển kỹ thuật và các nhóm khác trong công ty để đảm bảo tính hợp nhất và hiệu quả của sản phẩm.",
	},
};

let blogId = Number(localStorage.getItem("blogId"));
let vieData = vieBlogData;

blogTitle.innerText = vieData[blogId].title;
blogImg.src = vieData[blogId].img;

paragraphOne.innerText = vieData[blogId].para1;
paragraphTwo.innerText = vieData[blogId].para2;
paragraphThree.innerText = vieData[blogId].para3;
paragraphFour.innerText = vieData[blogId].para4;
paragraphFive.innerText = vieData[blogId].para5;
paragraphSix.innerText = vieData[blogId].para6;
paragraphSeven.innerText = vieData[blogId].para7;
paragraphEight.innerText = vieData[blogId].para8;
