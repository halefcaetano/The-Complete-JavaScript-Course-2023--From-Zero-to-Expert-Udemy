'use strict';

// Selecting elements
const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');
const score0EL = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1');
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');
const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions 

    let scores, currentScore, activePlayer, playing;

const init = function(){
    playing = true;

    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    score0EL.textContent = 0;
    score1EL.textContent = 0;
    diceEL.classList.add('hidden');

    current0EL.textContent = 0;
    current1EL.textContent = 0;
    player0EL.classList.remove('player--winner');
    player1EL.classList.remove('player--winner');
    player0EL.classList.add('player--active');
    player1EL.classList.remove('player--active');
};

init();
const switchPlayer = function (){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0; 
    currentScore = 0;
    player0EL.classList.toggle('player--active');
    player1EL.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function(){
    if (playing){
        //Generating a random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;

        //Display dice
        diceEL.classList.remove('hidden');
        diceEL.src = `dice-${dice}.png`;

        //Check for rolled 1: if true, switch to next player
        if(dice !== 1){
            //Add to the current score
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;

        }else{
            //Switch to next player
            switchPlayer();
    }}
});

btnHold.addEventListener('click', function(){
    if (playing){
        //Add current score active player's score
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        //Check if player's score is >= 100
        //Finish the game
        if (scores[activePlayer] >= 100){
            diceEL.classList.add('hidden');
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

        }else{
        //Switch to the next player
        switchPlayer();
    }}
});

btnNew.addEventListener('click', init);
