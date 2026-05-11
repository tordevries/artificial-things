// Neurocloudy Theme JS
// Bree Washington - DTC 477 TP13

console.log("Neurocloudy theme loaded.");

// Add soft fade-in animation to all paragraphs

const paragraphs = document.querySelectorAll("p");

paragraphs.forEach((paragraph, index) => {

    paragraph.style.opacity = "0";
    paragraph.style.transform = "translateY(20px)";
    paragraph.style.transition = "all 0.8s ease";

    setTimeout(() => {

        paragraph.style.opacity = "1";
        paragraph.style.transform = "translateY(0px)";

    }, index * 150);

});