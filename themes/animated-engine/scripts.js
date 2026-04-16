/* 

Animated Engine JavaScript 

Instead of document.addEventListener() with DOMContentLoaded, put your initialization code inside the "initalize()" function.
Make sure its starting line is "export function initializePage() {" and leave in the first console log message.

Your first statement should be to call confirmTheme() with the name of your theme, as shown below.

*/

// start your JS here
export function initializePage() {

    // call main function that outputs message to console and update page title
    confirmTheme("Animated Engine");

let newArticle = document.createElement("article");
document.body.appendChild(newArticle);
let header = document.querySelector("header");
let main = document.querySelector("main");
let footer = document.querySelector("footer");

newArticle.appendChild(header);
newArticle.appendChild(main);
newArticle.appendChild(footer);

}
