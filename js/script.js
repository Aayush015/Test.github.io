/* ========================= Typing Animation ========================= */
var typed = new Typed(".typing", {
    strings: ["Developer", "Web Developer", "App Developer", "Soccer player"],
    typeSpeed: 100,
    BackSpeed: 60, 
    loop: true
})
/* ========================= Aside Navigation ========================= */
const nav = document.querySelector(".nav");
const navLinks = nav.querySelectorAll("a"); // Select all navigation links

navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
        // Remove "active" class from all navigation links
        navLinks.forEach((navLink) => navLink.classList.remove("active"));

        // Add "active" class to the clicked link
        this.classList.add("active");
    });
});
