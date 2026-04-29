// BLACK-PINK THEME JS
// Adds simple fade-in effect

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    sections.forEach((section, index) => {
        setTimeout(() => {
            section.classList.add("fade-in");
        }, index * 200);
    });
});