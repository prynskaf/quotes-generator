const quoteText = document.querySelector('.quote-text');
const qouteName = document.querySelector('.quote-name');
const btn = document.querySelector('button');


// quotes 
const quotes = [
    {
        quote: "The only way to do great work is to love what you do.",
        name: "Steve Jobs"
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        name: "Winston Churchill"
    },
    {
        quote: "Believe you can and you're halfway there.",
        name: "Theodore Roosevelt"
    },
    {
        quote: "In the middle of every difficulty lies opportunity.",
        name: "Albert Einstein"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        name: "Eleanor Roosevelt"
    },
    {
        quote: "It does not matter how slowly you go, as long as you do not stop.",
        name: "Confucius"
    },
    {
        quote: "The best way to predict the future is to create it.",
        name: "Peter Drucker"
    },
    {
        quote: "The only limit to our realization of tomorrow will be our doubts of today.",
        name: "Franklin D. Roosevelt"
    },
    {
        quote: "The biggest risk is not taking any risk. In a world that's changing quickly, the only strategy that is guaranteed to fail is not taking risks.",
        name: "Mark Zuckerberg"
    },
    {
        quote: "Success usually comes to those who are too busy to be looking for it.",
        name: "Henry David Thoreau"
    },
    {
        quote: "The only person you are destined to become is the person you decide to be.",
        name: "Ralph Waldo Emerson"
    },
    {
        quote: "Your time is limited, don't waste it living someone else's life.",
        name: "Steve Jobs"
    },
    {
        quote: "Don't watch the clock; do what it does. Keep going.",
        name: "Sam Levenson"
    },
    {
        quote: "Strive not to be a success, but rather to be of value.",
        name: "Albert Einstein"
    },
    {
        quote: "The only source of knowledge is experience.",
        name: "Albert Einstein"
    },
    {
        quote: "It does not matter how many times you get knocked down, but how many times you get up.",
        name: "Vince Lombardi"
    },
    {
        quote: "Life is 10% what happens to us and 90% how we react to it.",
        name: "Charles R. Swindoll"
    },
    {
        quote: "The secret to getting ahead is getting started.",
        name: "Mark Twain"
    },
    {
        quote: "The best revenge is massive success.",
        name: "Frank Sinatra"
    },
    {
        quote: "You miss 100% of the shots you don't take.",
        name: "Wayne Gretzky"
    },{
        quote: "The only person you are destined to become is the person you decide to be.",
        name: "Ralph Waldo Emerson"
      },
      {
        quote: "Your time is limited, don't waste it living someone else's life.",
        name: "Steve Jobs"
      },
      {
        quote: "Don't watch the clock; do what it does. Keep going.",
        name: "Sam Levenson"
      },
      {
        quote: "Strive not to be a success, but rather to be of value.",
        name: "Albert Einstein"
      },
      {
        quote: "The only source of knowledge is experience.",
        name: "Albert Einstein"
      },
      {
        quote: "It does not matter how many times you get knocked down, but how many times you get up.",
        name: "Vince Lombardi"
      },
      {
        quote: "Life is 10% what happens to us and 90% how we react to it.",
        name: "Charles R. Swindoll"
      },
      {
        quote: "The secret to getting ahead is getting started.",
        name: "Mark Twain"
      },
      {
        quote: "The best revenge is massive success.",
        name: "Frank Sinatra"
      },
      {
        quote: "You miss 100% of the shots you don't take.",
        name: "Wayne Gretzky"
      },
      {
        quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
        name: "Albert Schweitzer"
      },
      {
        quote: "The only way to do great work is to love what you do.",
        name: "Steve Jobs"
      },
      {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        name: "Winston Churchill"
      },
      {
        quote: "Believe you can and you're halfway there.",
        name: "Theodore Roosevelt"
      },
      {
        quote: "In the middle of every difficulty lies opportunity.",
        name: "Albert Einstein"
      },
      {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        name: "Eleanor Roosevelt"
      },
      {
        quote: "It does not matter how slowly you go, as long as you do not stop.",
        name: "Confucius"
      },
      {
        quote: "The best way to predict the future is to create it.",
        name: "Peter Drucker"
      },
      {
        quote: "The only limit to our realization of tomorrow will be our doubts of today.",
        name: "Franklin D. Roosevelt"
      },
      {
        quote: "The biggest risk is not taking any risk. In a world that's changing quickly, the only strategy that is guaranteed to fail is not taking risks.",
        name: "Mark Zuckerberg"
      }
];


// eventlistner
btn.addEventListener("click", function(){
    const random = Math.floor(Math.random() * quotes.length);

    quoteText.innerText = quotes[random].quote;
    qouteName.innerText = quotes[random].name;

})

