// SET CURRENT YEAR ON COPYRIGHT
const copyrightYear = document.querySelector(".copyright-year");
const currentYear = new Date().getFullYear();
copyrightYear.textContent = currentYear;

// MOBILE NAVIGATION

const btnMobileNav = document.querySelector(".btn-mobile-nav")
const header = document.querySelector(".header")
btnMobileNav.addEventListener("click", function () {
    header.classList.toggle('nav-open');
})