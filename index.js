console.log("js file is connected and running");


const happyButton = document.querySelector(".happy");
const fineButton = document.querySelector(".fine");
const sadButton = document.querySelector(".not-good");
const feelingImage = document.querySelector(".feeling-container img");
const firstRandomQuote = document.querySelector('#lucky-num');
const cheerleaderParent = document.querySelector('.cheerleader')
const quoteElement = document.querySelector('.quote')
const form = document.querySelector('.todo-form')
const todoInput = document.querySelector('.todo-form input');
const todoContainer = document.querySelector('.todo-container');
const catPic = document.getElementById("photo");







let cheerleaders = [
    {
        name: "Robert",
        img: "https://img.freepik.com/free-vector/cute-australian-shepherd_138676-2071.jpg"
    },
    {
        name: "Rex Goliath",
        img: "https://img.freepik.com/vector-premium/t-rex-vector-logo_43623-377.jpg"
    },
    {
        name: "Sir William",
        img: "https://img.freepik.com/free-vector/white-goat-cartoon-character_1308-108587.jpg?w=2000"
    },
    {
        name: "Shanaynay",
        img: "https://img.freepik.com/premium-vector/cute-cat-vector-illustration_175152-337.jpg?w=2000"
    },
]

const getRandomIndex = (array) => {
    let randomIndex = Math.floor(Math.random() * array.length);
    return randomIndex
}

let cheerleaderIndex = getRandomIndex(cheerleaders) // gives us 0-3

// select random cheerleader
let randomCheerleader = cheerleaders[cheerleaderIndex];
// put on screen
console.log(randomCheerleader);

cheerleaderParent.children[0].textContent = randomCheerleader.name;
cheerleaderParent.children[1].src = randomCheerleader.img;



const motivationalQuotes = [
    "Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.",
    "Don't watch the clock; do what it does. Keep going.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The only way to do great work is to love what you do.",
    "You are never too old to set another goal or to dream a new dream.",
    "The future depends on what you do today.",
    "Believe you can and you're halfway there.",
    "Hardships often prepare ordinary people for an extraordinary destiny.",
    "You are amazing just the way you are.",
    "The only person you should try to be better than is the person you were yesterday.",
    "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    "Success is stumbling from failure to failure with no loss of enthusiasm.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "The secret of getting ahead is getting started.",
    "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    "It does not matter how slowly you go as long as you do not stop.",
    "The harder the conflict, the greater the triumph.",
    "In the middle of every difficulty lies opportunity.",
    "Believe in the power of your dreams.",
    "The journey of a thousand miles begins with one step.",
    "The only thing that stands between you and your dream is the will to try and the belief that it is actually possible.",
    "The mind is everything. What you think, you become.",
    "You are the master of your destiny. You can influence, direct, and control your own environment.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Every great story on the planet happened when someone decided not to give up, but kept going no matter what.",
    "The only person you are destined to become is the person you decide to be.",
    "Your time is limited, don't waste it living someone else's life.",
    "The best revenge is massive success.",
    "It always seems impossible until it's done.",
    "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
    "The harder you work for something, the greater you'll feel when you achieve it.",
    "The past cannot be changed. The future is yet in your power.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "Don't count the days, make the days count.",
    "You are never too old to set another goal or to dream a new dream.",
    "The only way to achieve the impossible is to believe it is possible.",
    "You miss 100% of the shots you don't take.",
    "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
    "Life is short, and it's up to you to make it sweet.",
    "It's not about how hard you hit. It's about how hard you can get hit and keep moving forward.",
    "You are the artist of your own life. Don't hand the paintbrush to anyone else.",
    "The only time to start is now.",
    "Don't let yesterday take up too much of today.",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    "If you don’t like something, change it. If you can’t change it, change your attitude.",
    "Dream big and dare to fail.",
    "The struggle you're in today is developing the strength you need for tomorrow.",
    "You have within you right now, everything you need to deal with whatever the world can throw at you.",
    "The only place where success comes before work is in the dictionary.",
    "You can't go back and change the beginning, but you can start where you are and change the ending.",
    "The biggest risk is not taking any risk. In a world that is changing quickly, the only strategy that is guaranteed to fail is not taking risks.",
    "Your value doesn't decrease based on someone's inability to see your worth.",
    "Believe in your dreams and they may come true; believe in yourself and they will come true.",
    "It's not the load that breaks you, it's the way you carry it.",
    "The only thing standing between you and your dream is the will to try and the belief that it is actually possible."
];


let newRandomIndex = getRandomIndex(motivationalQuotes);
let newRandomIndex2 = getRandomIndex(motivationalQuotes);
let newRandomQuote = motivationalQuotes[newRandomIndex];
let newRandomQuote2 = motivationalQuotes[newRandomIndex2]
quoteElement.textContent = newRandomQuote;
firstRandomQuote.textContent = newRandomQuote2;
// put string on screen

fineButton.addEventListener('click', () => {
    // 1. change img src to ./fine.jpg
    feelingImage.src = "./assets/fine.jpg"
    feelingImage.alt = "fine"
    // 2. change img alt to "fine"
    // 3. remove acive class from happy button OR sad button
    happyButton.classList.remove('active-button')
    sadButton.classList.remove('active-button')
    // 4. add active class to fine button
    fineButton.classList.add("active-button")
})
happyButton.addEventListener('click', () => {
    // 1. change img src to ./fine.jpg
    feelingImage.src = "./assets/happy.jpg"
    feelingImage.alt = "happy"
    // 2. change img alt to "fine"
    // 3. remove acive class from happy button OR sad button
    fineButton.classList.remove('active-button')
    sadButton.classList.remove('active-button')
    // 4. add active class to fine button
    happyButton.classList.add("active-button")
})
sadButton.addEventListener('click', () => {
    // 1. change img src to ./fine.jpg
    feelingImage.src = "./assets/sad.jpg"
    feelingImage.alt = "sad"
    // 2. change img alt to "fine"
    // 3. remove acive class from happy button OR sad button
    fineButton.classList.remove('active-button')
    happyButton.classList.remove('active-button')
    // 4. add active class to fine button
    sadButton.classList.add("active-button")
})

cheerleaderParent.children[1].addEventListener('click', () => {
    console.log("you clicked the cheerleader!");
    location.reload();
})
