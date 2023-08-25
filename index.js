console.log("js file is connected and running");


let happyButton = document.querySelector(".happy");
let fineButton = document.querySelector(".fine");
let sadButton = document.querySelector(".not-good");
let feelingImage = document.querySelector(".feeling-container img");
console.log(happyButton, fineButton, sadButton, feelingImage);

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