const hangman1 = new Hangman('Car car', 2);

const puzzleDisplay = document.querySelector('#display-puzzle');
const guessDisplay = document.querySelector('#display-guess');
const statusEl = document.querySelector('#status');
const ststusMsg = document.querySelector('#ststus-msg');

guessDisplay.textContent = hangman1.remainingGuesses;
puzzleDisplay.textContent = hangman1.puzzle;
console.log(hangman1.status)

window.addEventListener('keypress', e => {
    const guess = String.fromCharCode(e.charCode);
    hangman1.makeGusses(guess);
    guessDisplay.textContent = hangman1.remainingGuesses;
    puzzleDisplay.textContent = hangman1.puzzle;
    console.log(hangman1.status)
    statusEl.textContent = hangman1.status;
    ststusMsg.textContent = hangman1.statusMessage;
})

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

const puzzle = getPuzzle('1').then(data => {
    console.log(JSON.stringify(data.puzzle));
}).catch(err => {
    console.log("Error :", err);
});

// getPuzzleSync();