/* ============================== Toggle Style Switcher ==============================*/
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    console.log("Toggle clicked");
    document.querySelector(".style-switcher").classList.toggle("open");
});
// Hide style-switcher on scroll
window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
});

/* ============================== Theme Colors ==============================*/
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) 
{
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else 
        {
            style.setAttribute("disabled", "true");
        }
    });
}
