/* 

Default JavaScript 

Instead of document.addEventListener() with DOMContentLoaded, put your initialization code inside the "initalize()" function.
Make sure its starting line is "export function initializePage() {" and leave in the first console log message.

Your first statement should be to call confirmTheme() with the name of your theme, as shown below.

*/

// start your JS here
export function initializePage() {

    // call main function that outputs message to console and update page title
    confirmTheme("Naptime Nuisance");

    const mainBox = document.querySelector("main");
    const revealItems = document.querySelectorAll("main p, main aside, footer");

    // main box setup wip

    mainBox.style.opacity = "0";
    mainBox.style.transform = "translateY(30px)";
    mainBox.style.transition = "opacity 1s ease, transform 1s ease";

    // Hiding until content is reached
    revealItems.forEach(function(item) {
        item.style.opacity = "0";
        item.style.transform = "translateY(40px)";
        item.style.filter = "blur(3px)";
        item.style.transition = `opacity 1s ease, transform 1s ease, filter 1s ease`;
    });

    //When entered, apply styles etc.
    const observer = new IntersectionObserver(function(enters) {

        enters.forEach(function(entry) {

            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)"
                entry.target.style.filter = "blur(0)";
                // adds glow class as content enters. Removes as it leaves.
                entry.target.classList.add("focusedGlow");
            } else {
                entry.target.classList.remove("focusedGlow");
            }
        
        });
    }, {
        //how much needs to be visible before enter trigger
        threshold: 0.15
    });

    const contentObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, {
        threshold: 0.15
    });
    //Observer element to tell the function when it enters the viewport
    const mainObserver = observer;

    mainObserver.observe(mainBox);

    revealItems.forEach(function(item) {
        observer.observe(item);
    });
}