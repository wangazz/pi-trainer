import { App } from './app.js';

const app = new App();
const offset = 2;

const hintButton = document.getElementById('hint');
const resetButton = document.getElementById('reset');

let pi;

window.addEventListener('load', () => {
    fetch('./static/pi_dec_1m.txt')
        .then((response) => response.text())
        .then((text) => (pi = text));
});

document.addEventListener('keypress', (e) => {
    const digit = e.key;
    if (/^[0-9]$/.test(digit)) {
        const index = app.digitCount + offset;
        if (digit === pi.charAt(index)) {
            app.updatePi(digit);
            app.digitCount += 1;
            app.updateScore();
        } else {
            app.errorCount += 1;
            app.updateErrors();
        }
    }
});

hintButton.addEventListener('click', () => {
    const index = app.digitCount + offset;
    const nextDigit = pi.charAt(index);
    app.updatePi(nextDigit);
    app.digitCount += 1;
    app.hintCount += 1;
    app.updateScore();
    app.updateHints();
});

resetButton.addEventListener('click', () => {
    app.reset();
});
