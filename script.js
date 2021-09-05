const body = document.querySelector("body");
const responsiveMenu = document.querySelector(".responsive__menu");
const navLinks = document.querySelector(".nav__links");
const dropDown = document.querySelectorAll(".drop__down");
const home = document.querySelector(".home");
const anchorTags = document.querySelectorAll("a");

// load fade In animation
const loadAnimation = function () {
  body.style.opacity = "100";
};
loadAnimation();

// prevent anchor elements' default actions
anchorTags.forEach((anchor) =>
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
  })
);

// nav bar current highlight
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

// responsive menu
responsiveMenu.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});
