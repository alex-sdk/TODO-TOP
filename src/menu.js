export default function menuToggle() {
    const sidebar = document.querySelector(".sidebar");
    const hamburger = document.querySelector(".menuButton");
    const main = document.querySelector(".main");

    hamburger.addEventListener("click", () => {
        sidebar.classList.toggle("deactivate-display");
        main.classList.toggle("activate-display");
    });
}