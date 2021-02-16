const menuBtn=document.querySelector(".menu-btn");
const burger=document.querySelector(".menu-btn__burger");
const nav=document.querySelector(".nav");
const navItem=document.querySelectorAll(".menu-nav__item");

menuBtn.addEventListener("click",showMenu)

function showMenu(){
    burger.classList.toggle("open");
    nav.classList.toggle("down");
    navItem.forEach(item=>item.classList.toggle("visible"));
}