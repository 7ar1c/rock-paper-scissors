let wins = 0;
let losses = 0;
let ties = 0;
function rock_paper_scissors(userChoice) {
    let choices = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * 3);
    let computerChoice = choices[randomIndex];
    
    // Update the computer choice image
    document.getElementById('computer-choice-img').src = `images/${computerChoice}.png`;
    document.getElementById('computer-choice-img').alt = computerChoice;

    if (userChoice === computerChoice) {
        document.getElementById('result').innerText = 'It is a tie';
        ties++;
        document.getElementById('ties').innerText = ties;
    } else if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            document.getElementById('result').innerText = 'Computer wins';
            losses++;
            document.getElementById('losses').innerText = losses;
        } else {
            document.getElementById('result').innerText = 'You win';
            wins++;
            document.getElementById('wins').innerText = wins;
        }
    } else if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            document.getElementById('result').innerText = 'Computer wins';
            losses++;
            document.getElementById('losses').innerText = losses;
        } else {
            document.getElementById('result').innerText = 'You win';
            wins++;
            document.getElementById('wins').innerText = wins;
        }
    } else if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            document.getElementById('result').innerText = 'Computer wins';
            losses++;
            document.getElementById('losses').innerText = losses;
        } else {
            document.getElementById('result').innerText = 'You win';
            wins++;
            document.getElementById('wins').innerText = wins;
        }
    }
}

function play(userChoice) {
    rock_paper_scissors(userChoice);
}

