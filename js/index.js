const menuBtn = document.querySelector(".menu")
const lineEl = document.querySelector(".line")
const navMenu = document.querySelector(".nav-menu")

menuBtn.addEventListener("click", ()=>{
  menuBtn.classList.toggle("change");
  navMenu.classList.toggle("change");

})