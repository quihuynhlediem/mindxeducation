window.addEventListener('scroll', function () {
  var target = document.querySelector('#students_style');
  var targetPos = target.getBoundingClientRect().top + window.pageYOffset;

  var scrollPos = window.scrollY + window.innerHeight;
  if (scrollPos >= targetPos) {
    document.querySelector('.students_loading').classList.add('show');
  }
});