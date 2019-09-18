class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('');
        this.remainingGuesses = remainingGuesses;
        this.guessLetter = [];
        this.status = "Playing";
    }
    calculateStatus() {
        // let finished = true;
        // this.word.forEach(letter => {
        //     if(this.guessLetter.includes(letter)) {
        //         finished = true;
        //     } else {
        //         finished = false;
        //     }
        // })
        // Another solution 
        const finished = this.word.every(letter => {
            return this.guessLetter.includes(letter) || letter === ' ';
        });
        if (this.remainingGuesses <= 0) {
            this.status = 'Failed';
        }
        else if (finished) {
            this.status = 'Finished';
        }
        else {
            this.status = 'Playing';
        }
    }
    get statusMessage() {
        if (this.status === "Playing") {
            return `Guesses left is ${this.remainingGuesses}`;
        }
        else if (this.status === "Failed") {
            return `Nice try! The word was "${this.word.join('')}"`;
        }
        else {
            return `Great work!You guessed the word`;
        }
    }
    get puzzle() {
        let puzzle = '';
        this.word.forEach(letter => {
            if (this.guessLetter.includes(letter) || letter === ' ') {
                puzzle += letter;
            }
            else {
                puzzle += '*';
            }
        });
        return puzzle;
    }
    makeGusses(guess) {
        guess = guess.toLowerCase();
        const isUniqe = !this.guessLetter.includes(guess);
        const isBadGuess = !this.word.includes(guess);
        if (this.status !== "Playing") {
            return;
        }
        if (isUniqe) {
            this.guessLetter.push(guess);
        }
        if (isUniqe && isBadGuess) {
            this.remainingGuesses--;
        }
        this.calculateStatus();
    }
}





