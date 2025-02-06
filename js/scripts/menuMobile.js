
function menuMobile() {
  var dotsButton = document.querySelector(".dots");
  var menuMobile = document.querySelector(".menu-mobile");
  var closeIcon = document.querySelector(".icon-tabler-x");
  var links = document.querySelectorAll(".menu-mobile__links a");

  dotsButton.addEventListener("click", function () {
    menuMobile.classList.toggle("active"); 
    closeIcon.classList.toggle("active");
  });

  closeIcon.addEventListener("click", function () {
    menuMobile.classList.remove("active");
    closeIcon.classList.remove("active");
  });

  links.forEach(function (link) {
    link.addEventListener("click", function () {
      menuMobile.classList.remove("active");
      closeIcon.classList.remove("active");
    });
  });
}

menuMobile();
