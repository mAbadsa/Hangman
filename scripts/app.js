const puzzleDisplay = document.querySelector('#display-puzzle');
const guessDisplay = document.querySelector('#display-guess');
const statusEl = document.querySelector('#status');
const ststusMsg = document.querySelector('#ststus-msg');
const reset = document.querySelector('#reset');
let hangman1;

window.addEventListener('keypress', e => {
    const guess = String.fromCharCode(e.charCode);
    hangman1.makeGusses(guess);
    render();
})

const render = () => {
    guessDisplay.textContent = hangman1.remainingGuesses;
    puzzleDisplay.textContent = hangman1.puzzle;
    statusEl.textContent = hangman1.status;
    ststusMsg.textContent = hangman1.statusMessage;
}

const startGame = async () => {
    const puzzle = await getPuzzle('1');
    hangman1 = new Hangman(puzzle, 5);
    render();
}

reset.addEventListener('click', startGame);
startGame();

// const puzzle = getPuzzle('1', (err, puzzle) => {
//     if(err) {
//         // throw new Error('Error!!!');
//         console.log(err);
//     } else {
//         console.log(puzzle)
//     }
// });

// const puzzle = getPuzzle('1')
// .then((puzzle) => {
//     console.log(puzzle);
// }).catch((err) => {
//     console.log("Error :", err);
// })

// const puzzle = getPuzzle('1').then(puzzle => {
//     console.log(puzzle);
// }).catch(err => {
//     console.log("Error :", err);
// });

