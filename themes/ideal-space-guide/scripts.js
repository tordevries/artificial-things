/* Ideal Space Guide JavaScript */

// start your JS here
export function initializePage() {

    confirmTheme("Ideal Space Guide");

    let newArticle = document.createElement("article");

    document.body.append(newArticle);

    let header = document.querySelector("header");

    let main = document.querySelector("main");

    let footer = document.querySelector("footer");

    newArticle.append(header, main, footer);

}