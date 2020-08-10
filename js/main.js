let pi;
let digits = 2;
let offset = 2;
let errors = 0;

window.addEventListener('load', () => {
    fetch('./static/pi_dec_1m.txt')
        .then((response) => response.text())
        .then((text) => {
            pi = text;
        });
});

document.addEventListener('keypress', (e) => {
    const digit = e.key;
    if (/^([0-9])$/.test(digit)) {
        const index = digits + offset;
        if (digit === pi.charAt(index)) {
            console.log('yay');
            appendText(digit);
            digits += 1;
        } else {
            errors += 1;
        }
    }
});

const appendText = (text) => {
    const p = document.getElementById('#pi');
    p.innerText += text;
};
