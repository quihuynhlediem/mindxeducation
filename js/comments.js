let starLabel = document.querySelectorAll(".star-label");
let starCheck = document.querySelectorAll(".rating input[type=radio]");
let ratingContainer = document.querySelector(".rating");
let starValue = 0;

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
