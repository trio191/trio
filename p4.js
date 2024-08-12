// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener("click", function(event) {
        let isButton = event.target.matches(".btn");
        if (!isButton && event.target.closest(".submenu") == null) {
            closeAllSubmenus();
        }
    });
});

function openMenu(menuId) {
    closeAllSubmenus();
    document.getElementById(menuId).style.display = "flex";
}

function closeAllSubmenus() {
    document.querySelectorAll(".submenu").forEach(menu => menu.style.display = "none");
}
