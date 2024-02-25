function showMenu() {
    var hamburger_content = document.getElementById("hamburger-content");
    if (hamburger_content.style.maxHeight){
        hamburger_content.style.maxHeight = null;
    } else {
        hamburger_content.style.maxHeight = hamburger_content.scrollHeight + "px";
        // hamburger_content.style.transform = "rotate(90deg)"
        hamburger_content.css("transform", "rotate(90deg)");
    }
}