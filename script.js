const body = document.querySelector("body");
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
