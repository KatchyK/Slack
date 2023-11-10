const menuOpen = document.querySelector('.ri-menu-line')
const menuClose = document.querySelector('.ri-close-line')
const menu = document.querySelector('nav ul')
const menuitems = document.querySelectorAll("nav ul li")

console.log(menuitems)

menuOpen.addEventListener("click", function(){
    menu.style.top = "40%"
    menuOpen.style.display = "none"
    menuClose.style.display = "block"
})
function closeMenu(){
    menu.style.top = "-40%"
    menuOpen.style.display = "block"
    menuClose.style.display = "none"
}

menuClose.addEventListener("click", function(){
    closeMenu()
    // menu.style.top = "-40%"
    // menuOpen.style.display = "block"
    // menuClose.style.display = "none"
})

menuitems.forEach(function(menuitem){
    menuitem.addEventListener("click", function(){
        closeMenu()
        // menu.style.top = "-40%"
        // menuOpen.style.display = "block"
        // menuClose.style.display = "none"
    })
})