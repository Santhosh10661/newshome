let menuBtn=document.querySelector(".menuBtn")
let menuCloseBtn=document.querySelector(".menuCloseBtn")
let menu = document.querySelector(".menu")

menuBtn.addEventListener('click',()=> menu.style.display="flex")
menuCloseBtn.addEventListener('click',()=> menu.style.display="none")