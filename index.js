console.log("js file is connected and running");


const happyButton = document.querySelector(".happy");
const fineButton = document.querySelector(".fine");
const sadButton = document.querySelector(".not-good");
const feelingImage = document.querySelector(".feeling-container img");
const luckyNumberElement = document.getElementById('lucky-num');
const cheerleaderParent = document.querySelector('.cheerleader')
const quoteElement = document.querySelector('.quote')
const form = document.querySelector('.todo-form')
const todoInput = document.querySelector('.todo-form input');
const todoContainer = document.querySelector('.todo-container');

randomNum = Math.floor(Math.random()*500);

luckyNumberElement.textContent = `Your lucky number today is ${randomNum}`



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
   let randomIndex =  Math.floor(Math.random()*array.length);
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
    "The only person you should try to be better than is the person you were yesterday."
];

let randomQuoteIndex = getRandomIndex(motivationalQuotes); // return 0-10

let randomQuote = motivationalQuotes[randomQuoteIndex]
// put string on screen
quoteElement.textContent = randomQuote;

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
    let newRandomIndex = getRandomIndex(motivationalQuotes);
    let newRandomQuote = motivationalQuotes[newRandomIndex];
    quoteElement.textContent = newRandomQuote;

})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valueFromInput = todoInput.value;
    console.log(valueFromInput);
    // create a new LI element
    const newTodoElement = `
    <div class="single-todo">
        <input type="checkbox" />
        <p>${valueFromInput}</p>
        <div class="close">X</div>
    </div>
    `

    const divContainer = document.createElement('div')
    divContainer.classList = "single-todo"

    const  myInput = document.createElement('input')
    myInput.type = "checkbox"

    divContainer.appendChild(myInput)

    
    const  pTag = document.createElement('p')
    pTag.textContent = valueFromInput

    const  closeButton = document.createElement('div')
    closeButton.classList = "close"
    closeButton.textContent = "X"
    closeButton.addEventListener('click', (e) => {
        console.log("you clicked a button!");
        console.log(e.target);
        todoContainer.removeChild(divContainer)
    })

    divContainer.appendChild(pTag)
    divContainer.appendChild(closeButton)


    // const newTodoElement = document.createElement('li');
    // put the value as the text content
    newTodoElement.textContent = valueFromInput;
    //  PUT INSIDE the container
    // todoContainer.appendChild(newTodoElement)

    todoContainer.appendChild(divContainer)
    todoInput.value = "";
})