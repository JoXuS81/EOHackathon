/* Table of Contents

1. Create Effect for Hamburger Menu Lines
2. Transform Menu after Click

*/


// Create Effect for Hamburger Menu Lines
const header = document.querySelector (".dashboard_asia");
const menuIcon = document.querySelector (".header_hamburger");

menuIcon.addEventListener("click", () => {
    header.classList.toggle("header_change");
});


// Transform Menu after Click 