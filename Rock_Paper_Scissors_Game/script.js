


const startBtn = document.getElementById('start-btn');
const gameForm = document.getElementById('game-form');
const playBtn = document.getElementById('play-btn');
const loader = document.getElementById('loader');
const resultModal = document.getElementById('result-modal');
const closeBtn = document.getElementById('close-btn');
const toggleBtn = document.getElementById('toggle-history');
const historyModal = document.getElementById('history-modal');
const closeHistory = document.getElementById('close-history');
const closeOverAll = document.getElementById('mainContainer')


let matchHistory = []; // History array

startBtn.addEventListener('click', () => {
    gameForm.style.display = 'block';
    startBtn.style.display = 'none';
    playBtn.style.display = 'block';
});

playBtn.addEventListener('click', () => {

    const name = document.getElementById('player-name').value.trim();
    const userChoice = document.getElementById('user-choice').value;

    if (!name || !userChoice) {
        alert('Please enter your name and select a choice.');
        return;
    }
    gameForm.style.display = 'none';
    playBtn.style.display = 'none';

    loader.style.display = 'block';

    setTimeout(() => {
        loader.style.display = 'none';

        const choices = ['rock', 'paper', 'scissors'];
        const computerChoice = choices[Math.floor(Math.random() * 3)];
        const result = getResult(userChoice, computerChoice);

        // Fill modal
        document.getElementById('modal-player-name').innerText = name;
        document.getElementById('modal-player-choice').innerText = formatChoice(userChoice);
        document.getElementById('modal-computer-choice').innerText = formatChoice(computerChoice);
        document.getElementById('modal-result').innerText = result;

        // Set footer message
        const footer = document.getElementById('modal-footer-message');
        const lowerResult = result.toLowerCase();

        if (lowerResult.includes("win")) {
            footer.innerText = "🎉 Well played! You're the champ! Keep shining!";
        } else if (lowerResult.includes("lose")) {
            footer.innerText = "💪 Don’t worry, even pros lose! Try again!";
        } else {
            footer.innerText = "😄 It’s a draw! Great game from both sides!";
        }

        // Save match to history
        matchHistory.push({
            player: name,
            userChoice: userChoice,
            computerChoice: computerChoice,
            result: result
        });

        updateHistory(); // Update history UI

        resultModal.style.display = 'block';
    }, 3000);
});

closeBtn.onclick = function () {
    resultModal.style.display = 'none';
    gameForm.style.display = 'none';
    startBtn.style.display = '';
    playBtn.style.display = 'none';
    document.getElementById('player-name').value = "";
    document.getElementById('user-choice').value = "";

};

toggleBtn.addEventListener('click', () => {
    historyModal.classList.remove('hidden');
    // historyModal.classList.add('block');
    closeOverAll.style.display = 'none';

});

closeHistory.addEventListener('click', () => {
    // historyModal.classList.remove('block');
    historyModal.classList.add('hidden');
    closeOverAll.style.display = '';
});





// toggleBtn.addEventListener('click', () => {
//   historyModal.classList.remove('hidden');
// });

// closeHistory.addEventListener('click', () => {
//   historyModal.classList.add('hidden');
// });



function getResult(user, computer) {
    if (user === computer) return "It's a Draw!";
    if (
        (user === 'rock' && computer === 'scissors') ||
        (user === 'paper' && computer === 'rock') ||
        (user === 'scissors' && computer === 'paper')
    ) return "🎉 You Win!";
    else return "😢 You Lose!";
}

function formatChoice(choice) {
    if (choice === 'rock') return '✊ Rock';
    if (choice === 'paper') return '✋ Paper';
    if (choice === 'scissors') return '✌ Scissors';
    return choice;
}

function updateHistory() {
    const historyContainer = document.getElementById('history-list');
    historyContainer.innerHTML = ''; // Clear previous

    matchHistory.forEach((match, index) => {
        const entry = document.createElement('div');
        entry.classList.add('history-entry');
        entry.innerHTML = `
            <strong>Round ${index + 1}:</strong> 
            ${match.player} chose ${formatChoice(match.userChoice)}, 
            Robot chose ${formatChoice(match.computerChoice)} — 
            <em>${match.result}</em>
        `;
        historyContainer.appendChild(entry);
    });
}

