let blogTitle = document.getElementsByClassName("header-title")[0];
let tabTitle = document.getElementById("tab-title");
//console.log(tabTitle);
let blogImg = document.getElementsByClassName("header-img")[0];
let blogContent = document.getElementsByClassName("post-content")[0];
// console.log(blogContent);

let vieBlogData = {
	1: {
		title:
			"Lập trình… Chia sẻ từ cựu học viên Trần Minh Quang",
		img: "https://resources.mindx.edu.vn/uploads/images/minh-quang-2.png",
		main_content: [
			{
				content:
					"Mình bắt đầu học lập trình từ đại học và ngành mình chọn là ngành Công nghệ thông tin (CNTT) luôn. Còn vì lý do gì thôi thúc mình học lập trình thì là vì các anh em trong gia đình mình đều đi theo ngành CNTT hết. Hơn nữa thì cá nhân mình cảm thấy là ngoài mảng kỹ thuật ra thì mình không có mạnh về những mảng khác, kỹ năng giao tiếp của mình cũng hơi kém nữa.. Đó là lý do mình chọn CNTT để theo đuổi.",
				classname: "post-text",
			},
			{
				content: "Để trở thành LTV giỏi, kỹ năng giao tiếp có quan trọng?",
				classname: "subtitle1",
			},
			{
				content:
					"Đến hiện tại mình vẫn nghĩ là đúng. Vì để mà nói về kiến thức của những ngành nghề khác như tài chính, luật hay y tế thì thật sự là minh không giỏi trong cái mảng đấy. Mình vẫn thiên về kỹ thuật hơn, hồi cấp 3 cũng học khối tự nhiên nữa.",
				classname: "post-text",
			},
			{
				content: "Ở VN này, những người muốn lương trên $2000 thì buộc phải có tiếng Anh",
				classname: "subtitle1",
			},
			{
				content: "Kỹ năng giao tiếp cũng là một kỹ năng quan trọng để đạt được những thành tựu ấy. Vì code là một chuyện, theo bản thân mình thấy thì nó rất là dễ. Nhưng mà làm sao để trình bày cho người khác hiểu được logic bên trong những dòng code ấy thì nó rất là khó. Vậy nên mình nghĩ là để thăng tiến thì kỹ năng giao tiếp rất là quan trọng",
				classname: "post-text",
			},
			{
				content:
					"Mặc dù Product Management rất phổ biến ở thị trường lao động nước ngoài (xếp thứ 2 trong danh sách công việc hấp dẫn nhất toàn cầu - Theo báo cáo của Glassdoor 2022), nhưng nó chỉ mới được biết đến rộng rãi hơn tại Việt Nam trong vài năm trở lại đây. Vì các công ty công nghệ Việt Nam đang chuyển dần từ mô hình outsourcing (gia công, xuất khẩu phần mềm) sang Product IT (phát triển sản phẩm hướng về người dùng cuối). Điều này dẫn đến sự gia tăng nhu cầu tuyển dụng nhân sự chuyên môn trong lĩnh vực Product Management. Theo dự báo của VietNamworks, ngành nghề này sẽ còn phát triển hơn nữa trong những năm tới.",
				classname: "post-text",
			},
			{
				content: "Ngoài kỹ năng giao tiếp ra thì mình nghĩ có một kỹ năng quan trọng nữa, cần có, nói ra thì hơi thô nhưng mà tên của nó gọi là kỹ năng 'ôm shit' á. Cụ thể đó chính là khi mà mình vào một cái dự án thì sẽ có những người đã làm dự án đó trước rồi. Thì họ có thể để lại những cái đoạn bug tiềm ẩn trong đấy. Buộc là mình vào sau thì mình phải ôm lại hết, phải làm sao để từ những cái code ấy mình hoàn thiện ra sản phẩm tốt hơn.",
				classname: "post-text",
			},
			{
				content:
					"Cái thứ 3 mình nghĩ đó là về kỹ năng ngoại ngữ. Tại vì tiếng Anh nó giúp mình đọc được những nguồn tài liệu mới nhất . Công nghệ nó thay đổi từng giờ, từng phút, từng giây, những kiến thức đấy thì đa phần người ta viết bằng tiếng Anh thôi. Hoặc là làm các công ty công nghệ lớn thì mình sẽ làm việc với dev nước ngoài. Vậy nên kỹ năng tiếng Anh cũng rất là quan trọng. ",
				classname: "post-text",
			},
			{
				content: "Cái thứ 3 mình nghĩ đó là về kỹ năng ngoại ngữ. Tại vì tiếng Anh nó giúp mình đọc được những nguồn tài liệu mới nhất . Công nghệ nó thay đổi từng giờ, từng phút, từng giây, những kiến thức đấy thì đa phần người ta viết bằng tiếng Anh thôi. Hoặc là làm các công ty công nghệ lớn thì mình sẽ làm việc với dev nước ngoài. Vậy nên kỹ năng tiếng Anh cũng rất là quan trọng. ",
				classname: "post-text",
			},
			{
				content:
					"Với sự tăng trưởng của ngành công nghệ và sự quan trọng của vị trí Product Manager trong quá trình phát triển sản phẩm, thu nhập của các nhân viên trong lĩnh vực này cũng rất cao. Theo trang Glassdoor, mức lương trung bình cho vị trí Product Manager trên thế giới hiện nay là khoảng 120,000 đô/năm. Tại Việt Nam, mức lương của PM cũng rất hấp dẫn, dao động từ 30-50 triệu đồng/tháng. (Mức thu nhập Product Manager sẽ còn cao hơn nữa phụ thuộc vào kinh nghiệm, kỹ năng,...)",
				classname: "post-text",
			}
		],
	},
	2: {
		title:
			"Product Management - Ngành hot, lương cao và cực tiềm năng trong thời đại số",
		img: "https://resources.mindx.edu.vn/uploads/images/product-manager-nga%CC%80nh-hot-luong-cao-720.png",
		main_content: [
			{
				content:
					"Được xem là một ngành 'hot', thu hút ngày càng nhiều tài năng trẻ, Product Management không chỉ mang lại cơ hội về mức lương hấp dẫn mà còn khả năng thúc đẩy sự phát triển và tạo sự thành công của các doanh nghiệp trong môi trường kinh doanh ngày càng cạnh tranh.Và để hiểu hơn về Product Manager là gì, hãy cùng MINDX tìm hiểu trong bài viết dưới đây để lý do tại sao bạn nên theo đuổi và làm thế nào để trở thành Product Manager nhé!",
				classname: "post-text",
			},
			{
				content: "Product Management là gì? ",
				classname: "subtitle1",
			},
			{
				content:
					"Product Management là lĩnh vực quản lý sản phẩm công nghệ. Trong đó, bạn sẽ chịu trách nhiệm quản lý 1 phần hoặc toàn bộ quá trình phát triển sản phẩm. Trong quy trình này, bạn sẽ làm việc với các stakeholders (Data Analyst, UI/UX Designer, Developer, Tester, Marketer, Salesman,...) để đảm bảo quá sản phẩm được tạo ra đáp hướng về người dùng cuối. Người làm Product Management đóng vai trò quan trọng cho sự thành bại của sản phẩm. Chính vì thế, ngành nghề này ngày càng trở nên tiềm năng và được tuyển dụng rất nhiều.",
				classname: "post-text",
			},
			{
				content: "Tại sao bạn nên theo đuổi ngành Product Management?",
				classname: "subtitle1",
			},
			{
				content: "Ngành khát nhân lực, tiềm năng nhất hiện nay",
				classname: "subtitle2",
			},
			{
				content:
					"Mặc dù Product Management rất phổ biến ở thị trường lao động nước ngoài (xếp thứ 2 trong danh sách công việc hấp dẫn nhất toàn cầu - Theo báo cáo của Glassdoor 2022), nhưng nó chỉ mới được biết đến rộng rãi hơn tại Việt Nam trong vài năm trở lại đây. Vì các công ty công nghệ Việt Nam đang chuyển dần từ mô hình outsourcing (gia công, xuất khẩu phần mềm) sang Product IT (phát triển sản phẩm hướng về người dùng cuối). Điều này dẫn đến sự gia tăng nhu cầu tuyển dụng nhân sự chuyên môn trong lĩnh vực Product Management. Theo dự báo của VietNamworks, ngành nghề này sẽ còn phát triển hơn nữa trong những năm tới.",
				classname: "post-text",
			},
			{
				content: "Công việc đa dạng, không bao giờ nhàm chán",
				classname: "subtitle2",
			},
			{
				content:
					"Công việc của người làm Product Management không bó hẹp trong vùng chuyên môn hẹp. Họ chịu trách nhiệm tất cả các khâu trong quy trình phát triển sản phẩm, làm việc với các stakeholders, từ khâu nghiên cứu (research), phân tích, lên ý tưởng, đến thiết kế UI/UX, làm việc với Developer để lập trình và phối hợp với marketing, sales để launching sản phẩm ra ngoài thị trường. Vì vậy, công việc của PM luôn đa dạng, không bao giờ nhàm chán và luôn có cơ hội để học hỏi thêm nhiều kỹ năng mới.",
				classname: "post-text",
			},
			{
				content: "Thu nhập cao",
				classname: "subtitle2",
			},
			{
				content:
					"Với sự tăng trưởng của ngành công nghệ và sự quan trọng của vị trí Product Manager trong quá trình phát triển sản phẩm, thu nhập của các nhân viên trong lĩnh vực này cũng rất cao. Theo trang Glassdoor, mức lương trung bình cho vị trí Product Manager trên thế giới hiện nay là khoảng 120,000 đô/năm. Tại Việt Nam, mức lương của PM cũng rất hấp dẫn, dao động từ 30-50 triệu đồng/tháng. (Mức thu nhập Product Manager sẽ còn cao hơn nữa phụ thuộc vào kinh nghiệm, kỹ năng,...)",
				classname: "post-text",
			},
			{
				content: "Dễ dàng thăng tiến",
				classname: "subtitle2",
			},
			{
				content:
					"Có kinh nghiệm và kỹ năng về Product Management, bạn có thể dễ dàng thăng tiến và có nhiều cơ hội việc làm trong lĩnh vực công nghệ. Với kinh nghiệm và thành tích tốt, bạn có thể trở thành Senior Product Manager hoặc Head of Product và quản lý toàn bộ quy trình phát triển sản phẩm. Ngoài ra, bạn cũng có thể trở thành chuyên gia tư vấn cho các công ty hoặc start-up trong lĩnh vực công nghệ với tỷ lệ thành công cao.",
				classname: "post-text",
			},
		],
	},
	3: {
		title: "Graphic Design & UI/UX Design: Giống và khác nhau như thế nào?",
		img: "https://resources.mindx.edu.vn/uploads/images/Graphic-Design-Business-1024x683.jpg",
		main_content: [
			{
				content:
					"Graphic Design và UI/UX Design hiện đang là hai ngành nghề thuộc lĩnh vực sáng tạo, thu hút nhân sự, đặc biệt là các bạn trẻ. Về tính chất và yêu cầu công việc giữa hai ngành nghề này có nhiều điểm khác biệt nhưng rất nhiều bạn vẫn bị nhầm lẫn Graphic Design và UI/UX Design có thể thay thế cho nhau. Trong bài viết dưới đây, MindX sẽ cùng bạn tìm hiểu sự khác biệt giữa Graphic Design và UI/UX Design.",
				classname: "post-text",
			},
			{
				content: "Hiểu đúng về Graphic Design & UI/UX Design",
				classname: "subtitle1",
			},
			{
				content:
					"Graphic Design là gì? Graphic Design là ngành thiết kế đồ hoạ, ứng dụng các quy tắc về phối màu, hình dạng, hình ảnh và font chữ để tạo ra hình ảnh cho các phương tiện in ấn và truyền thông số. Những thiết kế này thường được sử dụng làm bố cục tĩnh, không tương tác như logo, bao bì sản phẩm, quảng cáo, biển quảng cáo, tờ rơi hoặc trưng bày, v.v..",
				classname: "post-text",
			},
			{
				content:
					"UI/UX Design là gì? UI/UX Design là ngành thiết kế giao diện và tối ưu trải nghiệm người dùng. UI/UX Design tập trung vào việc tạo ra nội dung hình ảnh tương tác và đảm bảo mang đến cho người dùng trải nghiệm tốt nhất, nhằm giữ chân họ ở lại lâu hơn trên app/website. UI/UX Designer cũng cần có kiến thức về thiết kế đồ hoạ, kết hợp thêm kiến thức về thiết kế giao diện, bên cạnh đó, cần phải biết research, kiểm thử,.. để sản phẩm thiết kế được hiệu quả hơn khi đến với người dùng. ",
				classname: "post-text",
			},
			{
				content: "Sự khác nhau giữa Graphic Design & UI/UX Design",
				classname: "subtitle1",
			},
			{
				content: "Loại thiết kế",
				classname: "subtitle2",
			},
			{
				content:
					"Graphic Design tập trung vào yếu tố thị giác, trong khi UI/UX Design tập trung vào tương tác. Graphic Design sẽ sử dụng ý tưởng kết hợp với các nguyên tắc về màu sắc, kiểu chữ... để tạo nên các hình ảnh có tính trực quan như ấn phẩm in ấn, quảng cáo, hình ảnh 2D, 3D.",
				classname: "post-text",
			},
			{
				content:
					"Trong khi đó, UI/UX Design cần có kiến thức đa ngành từ thiết kế, nghiên cứu người dùng cho đến kiến trúc thông tin, lập bản mẫu wireframe và thiết kế nguyên mẫu để tạo nên các thiết kế tương tác trên các website hoặc phần mềm, ứng dụng. Điểm khác biệt ở đây là tính tương tác với người dùng.",
				classname: "post-text",
			},
			{
				content: "Mục tiêu thiết kế",
				classname: "subtitle2",
			},
			{
				content:
					"Mục tiêu của Graphic Design là hướng đến yếu tố thương hiệu, các sản phẩm từ Graphic Design sẽ truyền đạt đạt được thông điệp của thương hiệu và gắn với các nhận diện thương hiệu như màu sắc, font chữ... lấy thương hiệu làm trung tâm. Tuy nhiên, Graphic Designer có thể thoải mái tự do sáng tạo miễn sao vẫn thể hiện được các yếu tố thương hiệu trong sản phẩm thiết kế.",
				classname: "post-text",
			},
			{
				content:
					"Đối với UI/UX Design sẽ hướng tới trải nghiệm người dùng, lấy người dùng làm trung tâm và đảm bảo sản phẩm giúp người dùng sử dụng một cách dễ dàng hơn. Tuy nhiên, UI/UX Designer lại bị giới hạn trong các quy tắc về cấu trúc dữ liệu và nhu cầu người dùng.",
				classname: "post-text",
			},
			{
				content: "Quy trình làm việc",
				classname: "subtitle2",
			},
			{
				content:
					"Trước khi bắt tay vào thực hiện sản phẩm thiết kế, Graphic Designer sẽ phải làm việc với khách hàng, giám đốc sáng tạo và bộ phận Marketing, sale để thống nhất phương án. Sau đó, từ các thông tin và yêu cầu sẽ lên brief và chuẩn bị tiến hành công việc.",
				classname: "post-text",
			},
			{
				content:
					"UI/UX Designer đóng vai trò quan trọng hơn cả trong quá trình phát triển phần mềm, website. Các UI/UX Designer sẽ phải làm việc với Product Owner, Product Manager, Developer, Researcher, IT Business Analyst... để thống nhất phương án phát triển sản phẩm. Thông qua nghiên cứu người dùng và xác định mục tiêu người dùng, hành vi và xu hướng người dùng, UI/UX Designer sẽ phải tạo chân dung người dùng và tiến hành thiết kế sơ đồ trang web, wireframe và prototype. Sau đó, tiến hành đánh giá thông qua trải nghiệm người dùng và lặp lại bước này với các bản cập nhật sửa lỗi cho đến khi có được sản phẩm hoàn chỉnh.",
				classname: "post-text",
			},
		],
	},
	4: {
		title:
			"Product Owner lương bao nhiêu? Thu nhập của Product Owner",
		img: "https://resources.mindx.edu.vn/uploads/images/product-ower-lu%CC%9Bo%CC%9Bng1-1691380897398-4542.png",
		main_content: [
			{
				content:
					"Product Owner hiện đang là một trong những vị trí tuyển dụng hot thuộc nhóm ngành công nghệ. Với mức thu nhập lý tưởng khiến PO trở thành vị trí được nhiều người hướng đến. Trong bài viết sau đây của MindX sẽ cùng bạn tìm hiểu chi tiết về mức lương của Product Owner.",
				classname: "post-text",
			},
			{
				content: "Các yếu tố ảnh hưởng đến lương Product Owner",
				classname: "subtitle1",
			},
			{
				content:
					"Mặt bằng lương nói chung của vị trí Product Owner khá cao so với các vị trí khác thuộc lĩnh vực công nghệ. Tuy nhiên, mức lương cụ thể của một Product Owner còn phục thuộc vào nhiều yếu tố: kinh nghiệm làm việc, lĩnh vực công ty, kĩ năng công việc, vị trí công việc,...",
				classname: "post-text",
			},
			{
				content:
					"Mức lương của Product Owner tại thị trường Việt Nam",
				classname: "subtitle1",
			},
			{
				content: "Theo chuyên trang tuyển dụng và phân tích việc làm Indeed, mức lương trung bình đối với một Product Owner tại Việt Nam là 26.243.348 đ mỗi tháng (số liệu cập nhật đến 14/06/2023). Tuy nhiên, mức lương trung bình mà một PO nhận được tại các thành phố khác nhau cũng khác nhau.",
				classname: "post-text",
			},
			{
				content: "1. Mức lương trung bình của Product Owner ở Thành phố Hồ Chí Minh",
				classname: "subtitle2",
			},
			{
				content:
					"Cũng theo số liệu được cập nhật bởi Indeed, mức lương trung bình mà một Product Owner nhận được mỗi tháng tại Thành phố Hồ Chí Minh là 17.742.182đ. Mức thu nhập này thấp hơn khoảng 32% so với mức thu nhập trung bình của PO cả nước (số liệu cập nhật đến 14/06/2023) dựa trên 18 mức lương được báo cáo.",
				classname: "post-text",
			},
			{
				content:
					"2. Mức lương trung bình của Product Owner ở Thành phố Hà Nội",
				classname: "subtitle2",
			},
			{
				content: "Mức lương trung bình của một PO tại Hà Nội do Indeed tổng hợp dựa trên 5 mức lương báo cáo tính đến ngày 16/03/2023 ở mức 27.119.788 đ. Đây là mức lương trung bình mà một PO tại Hà Nội nhận hàng tháng, nhỉnh hơn so với thu nhập trung bình cả nước của một PO.",
				classname: "post-text",
			},
			{
				content:
					"Bài viết trên đây của MindX đã cùng các bạn tìm hiểu chi tiết về mức lương của một Product Owner tại Hà Nội. Nhìn chung, Product Owner (PO) là vị trí nhận mức lương cao trong nhóm ngành công nghệ, nhưng đi kèm với đó là yêu cầu kỹ năng chuyên môn cao. Để trở thành một Product Owner thì ngoài các kiến thức chuyên môn về lĩnh vực làm việc, bạn cần trang bị thêm nhiều các kiến thức bổ trợ khác.",
				classname: "post-text",
			}
		],
	},
	5: {
		title:
			"Phần mềm lập trình Game cho trẻ em",
		img: "https://resources.mindx.edu.vn/uploads/images/CodeMonkey%20t%E1%BA%ADp%20trung%20v%C3%A0o%20vi%E1%BB%87c%20gi%E1%BA%A3ng%20d%E1%BA%A1y%20l%E1%BA%ADp%20tr%C3%ACnh%20b%E1%BA%B1ng%20ng%C3%B4n%20ng%E1%BB%AF%20JavaScript.png",
		main_content: [
			{
				content: "Với sự phát triển nhanh chóng của công nghệ, có rất nhiều phần mềm lập trình hấp dẫn và thú vị được thiết kế đặc biệt dành riêng cho trẻ em. Trong bài viết này, MindX giới thiệu với bạn 5 phần mềm lập trình Game cho trẻ em thú vị nhất.",
				classname: "post-text",
			},
			{
				content:
					"1. Phần mềm Scratch",
				classname: "subtitle1",
			},
			{
				content: "Một trong những phần mềm học lập trình cho trẻ em thú vị nhất mà không thể không đề cập đến chính là Scratch. Với Scratch, trẻ không cần phải biết lập trình từ trước. Thay vào đó, sẽ sử dụng các khối lệnh màu sắc và ghép nối chúng lại để tạo thành một chuỗi hành động. Hơn nữa, Scratch còn cung cấp một thư viện phong phú với các đối tượng, âm thanh và hình ảnh sẵn có, giúp trẻ em thêm phần sáng tạo và độc đáo cho trò chơi của mình.",
				classname: "post-text",
			},
			{
				content:
					"2. Phần mềm Alice",
				classname: "subtitle1",
			},
			{
				content:
					"Alice là một phần mềm lập trình game thú vị khác dành cho trẻ em. Với giao diện đơn giản và dễ sử dụng, Alice cho phép trẻ em tạo ra những câu chuyện và trò chơi tương tác theo cách riêng của mình. Với Alice, trẻ có thể tự xây dựng các cảnh, tạo hình nhân vật và thiết kế các đối tượng trong trò chơi của mình. Alice không chỉ đơn thuần là một công cụ lập trình, mà còn là một môi trường giáo dục sáng tạo. Phần mềm khuyến khích trẻ em tư duy sáng tạo, hợp tác và giải quyết vấn đề. Trẻ có thể tạo ra những trò chơi độc đáo, đồng thời thể hiện cảm xúc và ý tưởng của mình thông qua câu chuyện và hành động của các nhân vật trong trò chơi.",
				classname: "post-text",
			},
			{
				content: "3. Phần mềm Gamemaker Studio",
				classname: "subtitle1",
			},
			{
				content: "Gamemaker Studio là một phần mềm lập trình game được thiết kế để tạo ra những trò chơi chuyên nghiệp. Với Gamemaker Studio, trẻ có thể khám phá cả thế giới lập trình game và tạo ra những trò chơi độc đáo của riêng mình một cách dễ dàng.",
				classname: "post-text",
			},
			{
				content:
					"Với giao diện trực quan, Gamemaker Studio giúp trẻ xây dựng các cảnh, tạo hình nhân vật, thiết kế các đối tượng và tạo ra các luật chơi. Phần mềm này hỗ trợ nhiều ngôn ngữ lập trình như GML (Gamemaker Language) và Drag and Drop, cho phép trẻ em lập trình một cách linh hoạt theo sở thích và trình độ của mình.",
				classname: "post-text",
			},
			{
				content:
					"4. Phần mềm Roblox Studio",
				classname: "subtitle1",
			},
			{
				content: "Roblox Studio là một phần mềm lập trình game đặc biệt được thiết kế để tạo ra và phát triển trò chơi trên nền tảng Roblox. Với Roblox Studio, trẻ có thể xây dựng môi trường 3D, tạo hình nhân vật, thiết kế các đối tượng và tạo ra các luật chơi. Phần mềm này cung cấp một giao diện trực quan và công cụ kéo và thả giúp trẻ em dễ dàng xây dựng và sắp xếp các thành phần của trò chơi. Ngoài ra, Roblox Studio còn cung cấp một ngôn ngữ lập trình mã nguồn mở gọi là Lua, cho phép trẻ em tùy chỉnh và mở rộng khả năng lập trình của trò chơi.",
				classname: "post-text",
			},
			{
				content:
					"5. Phần mềm Tynker",
				classname: "subtitle1",
			},
			{
				content: "Tynker là một phần mềm lập trình game độc đáo và hấp dẫn, dành cho trẻ em để học và khám phá lập trình. Tynker cung cấp một loạt các hoạt động và bài học lập trình dựa trên các khối lệnh màu sắc. Trẻ em có thể kéo và thả các khối lệnh để tạo ra các chuỗi hành động và lập trình các nhân vật trong trò chơi. Điều này giúp trẻ em hình dung và hiểu về cấu trúc lập trình, logic và điều khiển trong một môi trường thú vị.",
				classname: "post-text",
			}
		],
	},
	6: {
		title:
			"Lương UI/UX Designer theo từng tiêu chí & Thống kê năm 2023",
		img: "https://resources.mindx.edu.vn/uploads/images/luong-ui-ux-designer-3.png",
		main_content: [
			{
				content:
					"UI/UX (User Interface/User Experience) là thuật ngữ được sử dụng để chỉ một lĩnh vực trong thiết kế. UI/UX designer là những người chuyên thiết kế giao diện và trải nghiệm người dùng cho các sản phẩm số, như website, app điện thoại, game, phần mềm… Nhiệm vụ của họ là đảm bảo tính thẩm mỹ và sự tiện dụng của sản phẩm, tạo ra sự hài lòng và gắn kết với người dùng. Trong thế giới kỹ thuật số ngày nay, UI/UX đã trở thành một trong những ngành nghề phát triển nhanh chóng và hấp dẫn, là một trong những nghề hot và có thu nhập cao trong lĩnh vực công nghệ.Tuy nhiên, mức lương của UI/UX designer không phải là cố định mà phụ thuộc vào nhiều yếu tố khác nhau. Trong bài viết này, chúng ta sẽ cùng tìm hiểu những yếu tố ảnh hưởng đến mức lương của UI/UX designer nhé!",
				classname: "post-text",
			},
			{
				content: "Mức lương của UI/UX designer chịu ảnh hưởng bởi những yếu tố nào?",
				classname: "subtitle1",
			},
			{
				content:
					"1. Số năm kinh nghiệm",
				classname: "subtitle1",
			},
			{
				content: "Số năm kinh nghiệm là yếu tố rất quan trọng để ảnh hưởng đến lương UI/UX designer. Nó sẽ thể hiện được khả năng và kỹ năng của người thiết kế, cũng như sự hiểu biết về thị trường và người dùng. Một UI/UX designer có nhiều năm kinh nghiệm sẽ có thể xử lý được các dự án phức tạp và đa dạng hơn, cũng như đưa ra các giải pháp sáng tạo và hiệu quả hơn. Do đó, họ sẽ được coi trọng hơn và có mức lương cao hơn so với những người mới vào nghề. Tuy nhiên, lương UI/UX designer không chỉ phụ thuộc vào số năm kinh nghiệm, mà còn phụ thuộc vào nhiều yếu tố khác như kỹ năng, chất lượng công việc, thị trường lao động,…",
				classname: "post-text",
			},
			{
				content: "3. Địa điểm làm việc",
				classname: "subtitle1",
			},
			{
				content:
					"Địa điểm làm việc cũng ảnh hưởng đến mức lương của UI/UX designer. Một số thành phố hoặc quốc gia có nhu cầu về UI/UX design cao hơn, do đó có thể trả lương cao hơn cho người thiết kế.",
				classname: "post-text",
			},
			{
				content: "Ví dụ, theo khảo sát của Jobsgo, mức lương trung bình của UI/UX designer tại Hà Nội là 14 triệu đồng/tháng, trong khi ở TP.HCM là 16 triệu đồng/tháng. Ngoài ra, một số công ty quốc tế hoặc startup có thể trả lương cao hơn cho UI/UX designer so với các công ty trong nước hoặc truyền thống.",
				classname: "post-text",
			},
			{
				content:
					"4. Chức danh công việc",
				classname: "subtitle1",
			},
			{
				content: "Tùy theo chức danh công việc mà mức lương của UI/UX designer sẽ khác nhau. Theo khảo sát của Jobsgo, mức lương trung bình của UI/UX designer tại Việt Nam là 15 triệu đồng/tháng, trong khi đó của UI designer là 13 triệu đồng/tháng, của UX designer là 17 triệu đồng/tháng và của UI/UX leader là 25 triệu đồng/tháng.",
				classname: "post-text",
			}
		],
	}
};

let blogId = Number(localStorage.getItem("blogId"));
let vieData = vieBlogData;

blogTitle.innerText = vieData[blogId].title;
tabTitle.innerText = vieData[blogId].title;
blogImg.src = vieData[blogId].img;

for (i = 0; i < vieData[blogId].main_content.length; i++) {
	let newPart = document.createElement("div");
	newPart.innerText = vieData[blogId].main_content[i].content;
	newPart.className = vieData[blogId].main_content[i].classname;
	blogContent.appendChild(newPart);
}
