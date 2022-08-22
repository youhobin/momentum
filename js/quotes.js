const quotes = [
    {
       quote:  "You will kill 10 of our men, and we will kill one of yours,and in the end it will be you who tires of it.",
       author: "Ho Chi Minh",
    },
    {
        quote:  "He who does not hope to win has already lost.",
        author: "Jose Joaquin Olmedo",
    },
    {
        quote:  "Art produces ugly things which frequently become beautiful with time.",
        author: "Jean Cocteau",
    },
    {
        quote:  "I met a lot of people in Europe, I even encountered myself.",
        author: "James Baldwin",
    },
    {
        quote:  "The hardest work is to go idle.",
        author: "Jewish proverb",
    },
    {
        quote:  "The richest peach is highest on the tree.",
        author: "James Whitcomb Riley",
    },
    {
        quote:  "A writer must refuse to allow himself to be transformed into an institution.",
        author: "Jean-Paul Sartre",
    },
    {
        quote:  "3 O'clock is always too early for anything you want to do.",
        author: "Jean-Paul Sartre",
    },
    {
        quote:  "The happiness of society is the end of government.",
        author: "John F. Kennedy",
    },
    {
        quote:  "I lvoe treason but hate a traitor.",
        author: "Julius Caesar",
    },
    
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


function getQuotes(){
    const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
}
getQuotes();
setInterval(getQuotes,10000);
