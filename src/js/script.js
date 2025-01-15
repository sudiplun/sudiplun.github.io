const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("hidden"); // Show/hide the menu
  navLinks.classList.toggle("grid"); // Ensure flex layout for links
});
