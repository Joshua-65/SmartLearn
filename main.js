

// para usab sa nav color kung e-scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})

// js para show/hide sa nav menu
const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn= document.querySelector("#close-menu-btn");

menuBtn.addEventListener(`click`, () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";

})


// js para close sa nav menu
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}
 closeBtn.addEventListener('click', closeNav)

/*
document.getElementById("myDiv").addEventListener("click", function() {
    window.open("quiz.html", "_blank");
});
*/
 

