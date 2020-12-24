'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    if (guess === 0) {
        document.querySelector('.message').textContent = "No number :(";
    } else if (guess === secretNumber) {
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.message').textContent = "Correct Number! Ez.";
        document.querySelector('body').style.backgroundColor = "#60b347";
        document.querySelector('.number').style.width = "40rem";
        document.querySelector('.number').style.color = "#60b347";
        document.querySelector('.highscore').textContent = score;
    } else if (guess > secretNumber) {
        document.querySelector('.message').textContent = "Not bad! But Too high!";
        document.querySelector('.number').style.color = "red";
        score--;
        document.querySelector('.score').textContent = score;
    } else if (score < 1) {
        document.querySelector('.message').textContent = "You lose the game! D:";
        document.querySelector('.check').style.display = "none";
        document.querySelector('body').style.backgroundColor = "red";
        document.querySelector('.number').style.color = "red";
        document.querySelector('.number').textContent = secretNumber;
    } else if (guess < secretNumber) {
        document.querySelector('.message').textContent = "Hm. Too low!";
        score--;
        document.querySelector('.score').textContent = score;
    } else {
        document.querySelector('.message').textContent = "Wrong Number!";
    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 10;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').style.color = "#333";
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.check').style.display = "flex";
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = "15rem";
});