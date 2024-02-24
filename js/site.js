function showMenu() {
    var hamburger_content = document.getElementById("hamburger-content");
    if (hamburger_content.style.display === "block"){
        hamburger_content.style.display = "none";
    } else {
        hamburger_content.style.display = "block";
    }
}