const mainMenu = document.querySelector(".main-menu");
const closeMenu = document.querySelector(".close-menu");
const openMenu = document.querySelector(".open-menu");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", showMenu);

let showMenu = () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
};

let show = () => {
  mainMenu.style.display = "flex";
  openMenu.style.display = "none";
  closeMenu.style.display = "block";
};

let close = () => {
  mainMenu.style.display = "none";
  closeMenu.style.display = "none";
  openMenu.style.display = "flex";
};

openMenu.addEventListener("click", show);

closeMenu.addEventListener("click", close);
