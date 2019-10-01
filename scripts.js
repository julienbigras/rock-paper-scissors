const gameOptions =[
    "rock",
    "paper",
    "scissors"
]

let userChoice = "";

const submit = document.getElementById('submit');

const warning = document.getElementById("warning");

const results = document.getElementById("results");

const playAgain = document.getElementById("playAgain");

// FUNCTION TO OPEN THE USER CHOICE MODAL

const openModal = () => {
    const modalOpen = document.getElementById("openModal");
    const userPickModal = document.getElementById("userPickModal")

    modalOpen.addEventListener("click", () => {
        console.log("click");
        userPickModal.style.display = "block";
    })
}

openModal();

// get all the elements with the class name of userChoice and save them to a variable
const radioButtons = document.getElementsByClassName("userChoice");

// loop over the radio buttons, and add an event listener to each one
for (let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].addEventListener("click", () => {
        // assign the value of the selected radio button to the userChoice variable
        userChoice = radioButtons[i].value;
        warning.style.visibility = "hidden";
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
            warning.style.visibility = "visible";
        } else {
            userPickModal.style.display = "none";

            hand.classList.add('handAnimate');
            handReverse.classList.add('handReverseAnimate');

            handReverse.addEventListener("animationend", () => {
                if (userChoice === "paper") {
                    handReverse.setAttribute("src", "./assets/paper-reverse.png");
                } else if (userChoice === "scissors") {
                    handReverse.setAttribute("src", "./assets/scissors-reverse.png");
                } else {
                    return;
                }
            })

            hand.addEventListener("animationend", () => {
                if (computerChoice === "paper") {
                    hand.setAttribute("src", "./assets/paper.png");
                } else if (computerChoice === "scissors") {
                    hand.setAttribute("src", "./assets/scissors.png");
                } else {
                    return;
                }
            })

            setTimeout(() => {
                if (
                    userChoice === "rock" && computerChoice === "scissors" ||
                    userChoice === "paper" && computerChoice === "rock" ||
                    userChoice === "scissors" && computerChoice === "paper") {
                        const winMessage = document.createElement('p');
                        winMessage.innerHTML = "Congrats, you won!";
                        results.appendChild(winMessage);
                        playAgain.style.display = "block";
                } else if (
                    userChoice === "rock" && computerChoice === "paper" ||
                    userChoice === "paper" && computerChoice === "scissors" ||
                    userChoice === "scissors" && computerChoice === "rock") {
                        const lossMessage = document.createElement('p');
                        lossMessage.innerHTML = "Bummer, you lost!";
                        results.appendChild(lossMessage);
                        playAgain.style.display = "block";
                } else if (
                    userChoice === "rock" && computerChoice === "rock" ||
                    userChoice === "paper" && computerChoice === "paper" ||
                    userChoice === "scissors" && computerChoice === "scissors") {
                        const tieMessage = document.createElement('p');
                        tieMessage.innerHTML = "It's a tie!";
                        results.appendChild(tieMessage);
                        playAgain.style.display = "block";
                }
            }, 1450)

        }
    })
}

startAnimation();


// playAgain.addEventListener("click", () => {
//     hand.setAttribute("src", "./assets/rock.png");
//     handReverse.setAttribute("src", "./assets/rock-reverse.png");
//     computerChoice = "";
//     playAgain.style.display = "none";
//     hand.classList.remove("handAnimate");
//     handReverse.classList.remove("handReverseAnimate");
// })

playAgain.addEventListener("click", () => {
    document.location.reload();
})