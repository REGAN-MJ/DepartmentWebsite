const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const navOverlay = document.getElementById("nav-overlay");

function closeMenu() {
  navMenu.classList.remove("active");
  hamburger.classList.remove("active");
  navOverlay?.classList.remove("active");
}

function openMenu() {
  navMenu.classList.add("active");
  hamburger.classList.add("active");
  navOverlay?.classList.add("active");
}

hamburger.addEventListener("click", () => {
  if (navMenu.classList.contains("active")) {
    closeMenu();
  } else {
    openMenu();
  }
});

navOverlay?.addEventListener("click", closeMenu);

navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});