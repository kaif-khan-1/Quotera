
const api_key= "https://quotes-api-self.vercel.app/quote";
const newQuote= document.querySelector(".quote_btn");
const tweetBtn= document.querySelector(".tweet_btn");
var Quotes = document.getElementById("Quotes");
var author = document.getElementById("author");


// api call --> async & await
let temp;
const getData = async() => {
    const response= await fetch(api_key);
    const data= await response.json();
    Quotes.innerHTML =data.quote;
    author.innerHTML =data.author;
    temp=data.quote;
}

getData();

newQuote.addEventListener("click",()=>{
    getData();
});

//window.open ---> Open a new window
tweetBtn.addEventListener("click",()=>{
    window.open("https://twitter.com/intent/tweet?text="+ temp);
});


