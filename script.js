// Collapsible sections
document.querySelectorAll(".collapsible").forEach(button => {
    button.addEventListener("click", () => {
        const content = button.nextElementSibling;
        const arrow = button.querySelector(".arrow");

        button.classList.toggle("active");

        if (content.style.display === "block") {
            content.style.display = "none";
            arrow.classList.remove("down");
            arrow.classList.add("right");
        } else {
            content.style.display = "block";
            arrow.classList.remove("right");
            arrow.classList.add("down");
        }
    });
});

// Toggle side menu
function toggleSideMenu() {
    var sideMenu = document.getElementById("sideMenu");
    if (sideMenu.style.width === "0px" || sideMenu.style.width === "") {
        sideMenu.style.width = "250px";
    } else {
        sideMenu.style.width = "0";
    }
}

// Open form
function openForm(formType) {
    closeForm(); // Close any open forms first
    document.getElementById(formType + 'Form').style.display = 'block';
}

// Close all forms
function closeForm() {
    document.querySelectorAll('.form-popup').forEach(form => {
        form.style.display = 'none';
    });
}

// Rate function
function rate(stars) {
    alert('You rated this ' + stars + ' stars!');
}
