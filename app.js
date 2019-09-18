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


const request = new XMLHttpRequest();

request.addEventListener('readystatechange', (e) => {
    if(e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText);
        console.log(data);
    } else if (e.target.readyState === 4) {
        console.log("An error has been occurred");
    }
})

request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=1');
request.send();