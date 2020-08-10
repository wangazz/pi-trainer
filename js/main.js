import { App } from './app.js';

const app = new App();
let pi;
let resetButton = document.getElementById('reset');

window.addEventListener('load', () => {
    fetch('./static/pi_dec_1m.txt')
        .then((response) => response.text())
        .then((text) => (pi = text));
});

document.addEventListener('keypress', (e) => {
    const digit = e.key;
    if (/^([0-9])$/.test(digit)) {
        const offset = 2;
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

resetButton.addEventListener('click', (e) => {
    app.reset();
});
