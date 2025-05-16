document.querySelector(".hamburger-icon").addEventListener("click", toggleMenu);

document.querySelector(".menu-links").addEventListener("click", toggleMenu);

//  Function to open/close Hamburger-menu
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
