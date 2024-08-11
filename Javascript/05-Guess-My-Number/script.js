'use strict';
// document.querySelector('.message').textContent = '🥳🎊Correct Number';
// document.querySelector('.guess').value = 16;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (!guess) {
    document.querySelector('.message').textContent = '⛔No Number';
  }
});
