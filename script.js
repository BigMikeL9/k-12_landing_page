const body = document.querySelector("body");
const responsiveMenu = document.querySelector(".responsive__menu");
const navLinks = document.querySelector(".nav__links");
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

responsiveMenu.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});
