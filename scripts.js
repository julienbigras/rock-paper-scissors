const gameOptions =[
    "rock",
    "paper",
    "scissors"
]

let userChoice = "";

const submit = document.getElementById('submit');

const radioButtons = document.getElementsByClassName("userChoice");

// loop over the radio buttons, and add an event listener to each one
for (let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].addEventListener("click", () => {
        // assign the value of the selected radio button to the userChoice variable
        userChoice = radioButtons[i].value;
        console.log(userChoice);
    })
}

// randomly choose one of the three game options, and assign it to the computerChoice variable
const computerChoice = gameOptions[Math.floor(Math.random() * gameOptions.length)];
console.log(computerChoice);

const startAnimation = () => {
    const hand = document.getElementById('hand');
    const handReverse = document.getElementById('handReverse');

    submit.addEventListener('click', (e) => {
        e.preventDefault();

        if (userChoice === "") {
            alert("Please make a selection!");
        } else {
            hand.classList.add('handAnimate');
            handReverse.classList.add('handReverseAnimate');

            hand.addEventListener("animationend", () => {
                if (userChoice === "paper") {
                    hand.setAttribute("src", "./assets/paper.png");
                } else if (userChoice === "scissors") {
                    hand.setAttribute("src", "./assets/scissors.png");
                } else {
                    return;
                }
            })

            handReverse.addEventListener("animationend", () => {
                if (computerChoice === "paper") {
                    handReverse.setAttribute("src", "./assets/paper-reverse.png");
                } else if (computerChoice === "scissors") {
                    handReverse.setAttribute("src", "./assets/scissors-reverse.png");
                } else {
                    return;
                }
            })

            setTimeout(() => {

                if (userChoice === "rock" && computerChoice === "scissors") {
                    alert("You win!");
                } else if (userChoice === "rock" && computerChoice === "paper") {
                    alert("You lose!");
                } else if (userChoice === "rock" && computerChoice === "rock") {
                    alert("It's a tie!");
                } else if (userChoice === "paper" && computerChoice === "rock") {
                    alert("You win!");
                } else if (userChoice === "paper" && computerChoice === "scissors") {
                    alert("You lose!");
                } else if (userChoice === "paper" && computerChoice === "paper") {
                    alert("It's a tie!");
                } else if (userChoice === "scissors" && computerChoice === "paper") {
                    alert("You win!");
                } else if (userChoice === "scissors" && computerChoice === "rock") {
                    alert("You lose!");
                } else if (userChoice === "scissors" && computerChoice === "scissors") {
                    alert("It's a tie!");
                }
            }, 1750)

        }
    })
}

startAnimation();



