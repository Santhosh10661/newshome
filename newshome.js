let menuBtn = document.querySelector(".menuBtn");
let menuCloseBtn = document.querySelector(".menuCloseBtn");
let menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  document.body.style.overflow = "hidden";
});
menuCloseBtn.addEventListener("click", () => {
  menu.style.display = "none";
  document.body.style.overflow = "scroll";
});
