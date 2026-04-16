/* 

Caelin Conner

This code just makes everything cat

*/

const CAT_WORDS = 
[
    "meow",
    "mrow",
    "meeeow",
    "mrph"
];


// start your JS here
export function initializePage() 
{
    let main = document.querySelector("main");
    let title = document.querySelector("header");
    let footer = document.querySelector("footer");

    Catify(main);
    Catify(title);
    Catify(footer);
}


function Catify(domObj)
{
    const tagRegexFinder = /(<.*?>)/g;
    const wordReplace = /\w+/g;

    // call main function that outputs message to console and update page title
    confirmTheme("Fearless Kitten");

    //get all words from body
    let chunks = domObj.innerHTML.split(tagRegexFinder);

    //outputting chunks to console to verify output is correct
    console.log(chunks);

    //clear body innerHTML (to be replaced below)
    let newInnerHTML = '';

    for (let chunk of chunks)
    {
        if(tagRegexFinder.test(chunk)) //is tag
        {
            newInnerHTML += chunk;
        }
        else //is not tag.  Replace inner text
        {
            for (let word of chunk.split(/\s+/))
            {
                let randomCatWord = CAT_WORDS[Math.floor(Math.random() * CAT_WORDS.length)];

                //capitalize first letter, or entire word if it matches
                if (word.length > 0)
                {
                    //capitalize first letter check
                    let firstLetter = word.match(/\w/);
                    if (firstLetter != null)
                    {
                        firstLetter = firstLetter[0]; //for some reason, it returns an array despite not being global
                        let firstLetterUpper = firstLetter.toUpperCase();
                        if (firstLetter == firstLetterUpper)
                        {
                            if (randomCatWord.length > 1)
                            {
                                //capitalize first letter in the most complex way possible because strings are read only for some reason
                                randomCatWord = randomCatWord[0].toUpperCase() + randomCatWord.slice(1);
                            }
                            else
                            {
                                //easy case where we just replace the entire word
                                randomCatWord = randomCatWord.toUpperCase();
                            }
                        }
                    }

                    //all caps check
                    let wordUpperCase = word.toUpperCase();
                    if (word == wordUpperCase)
                    {
                        randomCatWord = randomCatWord.toUpperCase();
                    }
                }

                //add cat word to body
                newInnerHTML += ' ' + word.replaceAll(wordReplace,randomCatWord);
            }
        }
    }

    //replace DOM content finally (can't replace earlier because otherwise browser autofills closing tags)
    domObj.innerHTML = newInnerHTML;
}