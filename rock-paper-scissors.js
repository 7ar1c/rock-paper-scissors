function rock_paper_scissors(userChoice) {
    let choices = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * 3);
    let computerChoice = choices[randomIndex];
    
    // Update the computer choice image
    document.getElementById('computer-choice-img').src = `images/${computerChoice}.png`;
    document.getElementById('computer-choice-img').alt = computerChoice;

    if (userChoice === computerChoice) {
        document.getElementById('result').innerText = 'It is a tie';
    } else if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            document.getElementById('result').innerText = 'Computer wins';
        } else {
            document.getElementById('result').innerText = 'You win';
        }
    } else if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            document.getElementById('result').innerText = 'Computer wins';
        } else {
            document.getElementById('result').innerText = 'You win';
        }
    } else if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            document.getElementById('result').innerText = 'Computer wins';
        } else {
            document.getElementById('result').innerText = 'You win';
        }
    }
}

function play(userChoice) {
    rock_paper_scissors(userChoice);
}