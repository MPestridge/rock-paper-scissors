'use strict';

function generateComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3);
  return randomNum;
}

function selectUserChoice(event) {
  switch (event.target.id) {
    case 'rock':
      return 0;
    case 'paper':
      return 1;
    case 'scissors':
      return 2;
  }
}

function userSelectedSomething(event) {
  let userChoice = selectUserChoice(event);
  let compChoice = generateComputerChoice();
  let whoWon = decideWinner(userChoice, compChoice);

  let userImg = document.getElementById('you');
  let computerImg = document.getElementById('computer');

  document.getElementById('game').style.visibility = 'visible';

  switch (userChoice) {
    case 0:
      userImg.className = 'rock';
      break;
    case 1:
      userImg.className = 'paper';
      break;
    case 2:
      userImg.className = 'scissors';
      break;
  }

  switch (compChoice) {
    case 0:
      computerImg.className = 'rock';
      break;
    case 1:
      computerImg.className = 'paper';
      break;
    case 2:
      computerImg.className = 'scissors';
      break;
  }

  let outcome = document.getElementById('outcome');
  switch (whoWon) {
    case -1:
      outcome.innerText = 'You lose!';
      let loss = document.getElementById('loss');
      loss.innerText = parseInt(loss.innerText) + 1;
      break;
    case 0:
      outcome.innerText = "It's a draw.";
      break;
    case 1:
      outcome.innerText = 'You won, hotshot!';
      let win = document.getElementById('win');
      win.innerText = parseInt(win.innerText) + 1;
      break;
  }
}

function decideWinner(userChoice, compChoice) {
  switch (userChoice) {
    case 0:
      if (compChoice === 0) {
        return 0;
      } else if (compChoice === 1) {
        return -1;
      } else if (compChoice === 2) {
        return 1;
      }
      break;
    case 1:
      if (compChoice === 0) {
        return 1;
      } else if (compChoice === 1) {
        return 0;
      } else if (compChoice === 2) {
        return -1;
      }
      break;
    case 2:
      if (compChoice === 0) {
        return -1;
      } else if (compChoice === 1) {
        return 1;
      } else if (compChoice === 2) {
        return 0;
      }
      break;
  }
}

function reset() {
  document.getElementById('win').innerText = 0;
  document.getElementById('loss').innerText = 0;
  document.getElementById('game').style.visibility = 'hidden';
}

document.addEventListener('DOMContentLoaded', function() {
  // DOCUMENT LOAD
  document.getElementById('choice').addEventListener('click', userSelectedSomething);
  document.getElementById('reset').addEventListener('click', reset);
});
