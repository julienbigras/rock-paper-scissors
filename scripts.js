const gameOptions =[
    "rock",
    "paper",
    "scissors"
]

let userChoice = "";

const modalOpen = document.getElementById("openModal");

const label = document.getElementsByClassName("label");

const submit = document.getElementById('submit');

const warning = document.getElementById("warning");

const results = document.getElementById("resultsContent");

const playAgain = document.getElementById("playAgain");

const resultsMessage = document.createElement('p');

let winCount = 0;
let lossCount = 0;
let drawCount = 0;

const winCountDisplay = document.getElementById("winCount");
const lossCountDisplay = document.getElementById("lossCount");
const drawCountDisplay = document.getElementById("drawCount");

// FUNCTION TO OPEN THE USER CHOICE MODAL

const openModal = () => {
    const userPickModal = document.getElementById("userPickModal")

    modalOpen.addEventListener("click", () => {
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
        console.log(userChoice, "user choice");
    })
}

// randomly choose one of the three game options, and assign it to the computerChoice variable
const getComputerChoice = () => {
    return gameOptions[Math.floor(Math.random() * gameOptions.length)];
}

let computerChoice = getComputerChoice();
console.log(computerChoice, "computer choice");

const startAnimation = () => {
    const hand = document.getElementById('hand');
    const handReverse = document.getElementById('handReverse');

    submit.addEventListener('click', (e) => {
        e.preventDefault();

        if (userChoice === "") {
            warning.style.visibility = "visible";
        } else {
            userPickModal.style.display = "none";

            document.getElementById("openModal").style.visibility = "hidden";

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
                        resultsMessage.innerHTML = "Congrats, you win!";
                        results.appendChild(resultsMessage);
                        winCount++;
                        winCountDisplay.innerHTML = `${winCount}`;
                        playAgain.style.display = "block";
                } else if (
                    userChoice === "rock" && computerChoice === "paper" ||
                    userChoice === "paper" && computerChoice === "scissors" ||
                    userChoice === "scissors" && computerChoice === "rock") {
                        resultsMessage.innerHTML = "Bummer, you lose!";
                        results.appendChild(resultsMessage);
                        lossCount++;
                        lossCountDisplay.innerHTML = `${lossCount}`;
                        playAgain.style.display = "block";
                } else if (
                    userChoice === "rock" && computerChoice === "rock" ||
                    userChoice === "paper" && computerChoice === "paper" ||
                    userChoice === "scissors" && computerChoice === "scissors") {
                        resultsMessage.innerHTML = "It's a draw!";
                        results.appendChild(resultsMessage);
                        drawCount++;
                        drawCountDisplay.innerHTML = `${drawCount}`;
                        playAgain.style.display = "block";
                }
            }, 1450)

        }
    })
}

startAnimation();


playAgain.addEventListener("click", () => {
    // reset the userChoice and computerChoice variables
    computerChoice = getComputerChoice();
    console.log(computerChoice);
    userChoice = "";
    // show the openModal button
    modalOpen.style.visibility = "visible";
    // reset the radio buttons
    radioButtons.checked = false;

    // reset the color of the radio button label
    // for (i = 0; i < label.length; i++) {
    //     label[i].style.background = "white";
    // }

    // change the two hand images back to their original source files
    hand.setAttribute("src", "./assets/rock.png");
    handReverse.setAttribute("src", "./assets/rock-reverse.png");
    // remove the animate classes from each of the hand images
    hand.classList.remove("handAnimate");
    handReverse.classList.remove("handReverseAnimate");
    // hide the play again button
    playAgain.style.display = "none";
    // remove the previous results message
    results.removeChild(resultsMessage)
})