console.log("js file is connected and running");


const happyButton = document.querySelector(".happy");
const fineButton = document.querySelector(".fine");
const sadButton = document.querySelector(".not-good");
const feelingImage = document.querySelector(".feeling-container img");
const luckyNumberElement = document.getElementById('lucky-num');
const cheerleaderParent = document.querySelector('.cheerleader')
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



let randomIndex = Math.floor(Math.random()*cheerleaders.length)

// select random cheerleader
let randomCheerleader = cheerleaders[randomIndex];
// put on screen
console.log(randomCheerleader);

cheerleaderParent.children[0].textContent = randomCheerleader.name;
cheerleaderParent.children[1].src = randomCheerleader.img;




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