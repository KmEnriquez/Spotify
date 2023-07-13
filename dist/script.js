const toggle = document.querySelector(".toggle__menu");
const headNav = document.querySelector(".header__nav");
const body = document.querySelector(".body");
const dim = document.querySelector(".dim");

toggle.addEventListener("click", ()=> {
    headNav.classList.toggle("open");
    // console.log("click")
    toggle.classList.toggle("open");
    body.classList.toggle("disable");
    dim.classList.toggle("show");
});