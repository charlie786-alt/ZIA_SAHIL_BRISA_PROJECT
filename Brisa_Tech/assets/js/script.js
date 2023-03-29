const mobile__nav = document.querySelector(".hamburger__icons");

const nav__header = document.querySelector(".navbar");

const toggleNavbar = () => {
    nav__header.classList.toggle("active")
}

mobile__nav.addEventListener("click", () => toggleNavbar())