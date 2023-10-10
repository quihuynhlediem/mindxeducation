// Change tabs on blog page
let tabChangeItems = document.querySelectorAll(".tab-change-inner");
let textChangeItems = document.querySelectorAll("span.text-change-inner");

function tabChange() {
	let activeTab = this.event.target.parentElement;
	let activeText = this.event.target;
	let activeId = activeText.id;
	activeTab.className = "tab-change-inner tab-change-items-active";
  activeText.className = "text-change-inner tab-change-text-active";
  
  for (let i = 0; i < tabChangeItems.length; i++) {
		if (activeId != textChangeItems[i].id) {
			tabChangeItems[i].className = "tab-change-inner tab-change-items";
			textChangeItems[i].className = "text-change-inner tab-change-text";
		}
	}

	// Filter blog posts by clicking tab
	let blogItems = document.querySelectorAll(".blog-items");
  if (activeText.innerText === "Tất cả") {
    for (let i = 0; i < blogItems.length; i++) {
      blogItems[i].style.display = "block";
    }
  } else {
    for (let i = 0; i < blogItems.length; i++) {
      let currentBlogLabel =
        blogItems[i].firstElementChild.nextElementSibling.innerText;
      if (activeText.innerText === currentBlogLabel) {
        blogItems[i].style.display = "block";
      } else {
        blogItems[i].style.display = "none";
      }
    }
  }
}
