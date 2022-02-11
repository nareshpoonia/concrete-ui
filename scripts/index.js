const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

let showMenu = () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
};

hamburger.addEventListener("click", showMenu);
