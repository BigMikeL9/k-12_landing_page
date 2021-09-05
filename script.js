const body = document.querySelector("body");
const responsiveMenu = document.querySelector(".responsive__menu");
const navLinks = document.querySelector(".nav__links");
const home = document.querySelector(".home");
const dropDown = document.querySelectorAll(".drop__down");
const anchorTags = document.querySelectorAll("a");

// Page load Fade-In animation
const loadAnimation = function () {
  body.style.opacity = "100";
};
loadAnimation();

// prevent anchor elements' onclick default actions
anchorTags.forEach((anchor) =>
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
  })
);

// nav bar 'current' highlight
dropDown.forEach((section) =>
  section.addEventListener("mouseenter", function () {
    home.classList.remove("current");
  })
);

dropDown.forEach((section) =>
  section.addEventListener("mouseleave", function () {
    home.classList.add("current");
  })
);

// responsive menu (tablet/mobile)
responsiveMenu.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});
