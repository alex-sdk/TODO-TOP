export default function menuToggle() {
    const sidebar = document.querySelector(".sidebar");
    const hamburger = document.querySelector(".menuButton");
    const main = document.querySelector(".main");

    hamburger.addEventListener("click", () => {
        sidebar.classList.toggle("hide-menu");
        main.classList.toggle("adjust-main");
    });  
}