const menuToggle = document.querySelector(".burger-button");
const mobileMenu = document.querySelector(".mobile-navigation");
const mobileMenuLinks = document.querySelectorAll(".mobile-menu-content a");

menuToggle.addEventListener("click", function () {
  mobileMenu.classList.toggle("active");
});

// Close menu when a link is clicked
mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", function () {
    mobileMenu.classList.remove("active");
  });
});
