// import functions and grab DOM elements

import { compareNumbers } from "./numUtils.js";

const guessField = document.querySelector('#user-number');
const playButton = document.querySelector('#but-ton');
const resetButton = document.querySelector('#try-again');
const hiLow = document.querySelector('#hi-low');
const winLose = document.querySelector('#win-lose');
const winCount = document.querySelector('#win-count');
const lossCount = document.querySelector('#loss-count');
const triesLeft = document.querySelector('#turn-count');




// initialize state
const correctNumber = Math.ceil(Math.random() * 20);
let tries = 4;
let wins = 0;
let losses = 0;



// set event listeners to update state and DOM
playButton.addEventListener('click', () => {
    const guess = Number(guessField.value);
    const result = compareNumbers(guess, correctNumber);
    
    if (result === 0) {
        wins ++;
        winLose.textContent = 'Hooray your a Wiener!';
        hiLow.textContent = '';
        triesLeft.textContent = '';
        winCount.textContent = ('you have ' + wins + ' wins');
        playButton.style.display = 'none';
        resetButton.style.display = 'flex';
        

    } else if (result === -1) {
        tries --;
        hiLow.textContent = 'Too low Joe!';
        triesLeft.textContent = (tries + ' tries left!');
         
       

    } else { 
        tries --;
        hiLow.textContent = 'Too high guy!';
        triesLeft.textContent = (tries + ' tries left!');
    }
    if (tries === 0) {
        winLose.textContent = 'YOU ARE A LOSER!';
        losses ++;
        playButton.style.display = 'none';
        resetButton.style.display = 'flex';
        lossCount.textContent = ('you have ' + losses + ' losses!');
        winCount.textContent = ('you have ' + wins + ' wins');
    }
    resetButton.addEventListener('click', () => {
        lossCount.textContent = ('you have ' + losses + ' losses!');
        winCount.textContent = ('you have ' + wins + ' wins');
        winLose.textContent = ('');
        hiLow.textContent = ('');
        guessField.value = ('');
        playButton.style.display = 'flex';
        resetButton.style.display = 'none';
        tries = 4;
        triesLeft.textContent = tries;
    });
    
});
    


