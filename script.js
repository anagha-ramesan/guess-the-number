'use strict';

// DOM Manipulation
// let number = document.querySelector('.number').textContent;
// let guessedValue = document.querySelector('.guess').value;

let secretNumber = Math.floor(Math.random() * 20) + 1;
let scoreValue = 20;
let highScore = 0;

const disableCheckButton = function () {
  document.querySelector('.check').disabled = true;
};

const enableCheckButton = function () {
  document.querySelector('.check').disabled = false;
};

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const setScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const changeBackgroundColor = function (color) {
  document.querySelector('body').style.background = color;
};

const setNumberInBox = function (number) {
  document.querySelector('.number').textContent = number;
};

const checkButtonClick = function () {
  if (scoreValue > 1) {
    const guessedValue = Number(document.querySelector('.guess').value);

    if (!guessedValue) {
      displayMessage('⛔ No Number!');
    } else if (guessedValue === secretNumber) {
      setNumberInBox(secretNumber);
      displayMessage(`Yaay! That's correct. 🎉`);
      changeBackgroundColor(`linear-gradient(to left top, #2E3192, #18FFFF)`);
      document.querySelector('.number').style.width = '30rem';

      // document.querySelector('.modal').classList.remove('hidden');

      if (scoreValue > highScore) {
        highScore = scoreValue;
        document.querySelector('.highscore').textContent = scoreValue;
      }

      disableCheckButton();
    } else {
      displayMessage(guessedValue < secretNumber ? `📉 Too Low...` : `📈 Too High...`);
      setScore(--scoreValue);
    }
  } else {
    displayMessage('You lost!');
    setScore(0);
    disableCheckButton();
  }
};

const againButtonClick = function () {
  enableCheckButton();
  secretNumber = Math.floor(Math.random() * 20) + 1;
  scoreValue = 20;

  setScore(scoreValue);
  setNumberInBox('?');
  displayMessage('Start guessing...');
  changeBackgroundColor('#222');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
};

document.querySelector('.check').addEventListener('click', checkButtonClick);
document.querySelector('.again').addEventListener('click', againButtonClick);
