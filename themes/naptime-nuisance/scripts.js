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

    const revealItems = document.querySelectorAll("main p, main aside, footer");

    // Hiding until content is reached
    revealItems.forEach(function(item) {
        item.style.opacity = "0";
        item.style.transform = "translateY(40px)";
        item.style.filter = "blur(3px)";
        item.style.transition = `opacity 1s ease, transform 1s ease, filter 1s ease`;
        item.style.transitionDelay= `${index * 0.08}s`
    });

    //When entered, apply styles etc.
    const observer = new IntersectionObserver(function(enters) {

        enters.forEach(function(entry) {

            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, {
        //how much needs to be visible before enter trigger
        threshold: 0.15
    });

    revealItems.forEach(function(item) {
        observer.observe(item);
    });
}