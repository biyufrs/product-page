const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});