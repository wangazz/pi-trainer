export class App {
    digitCount;
    errorCount;
    hintCount;

    constructor() {
        this.reset();
    }

    getPi() {
        return document.getElementById('pi');
    }

    reset() {
        this.errorCount = 0;
        this.updateErrors();

        this.digitCount = 2;
        this.updateScore();

        this.hintCount = 0;
        this.updateHints();

        this.resetPi();
    }

    resetPi() {
        const defaultText = '3.14';
        const $el = this.getPi();
        $el.innerText = defaultText;
    }

    updateErrors() {
        const $el = document.getElementById('errors');
        $el.innerText = `Errors: ${this.errorCount}`;
    }

    updateHints() {
        const $el = document.getElementById('hints');
        $el.innerText = `Hints: ${this.hintCount}`;
    }

    updatePi(char) {
        const $el = this.getPi();
        $el.innerText += char;
    }

    updateScore() {
        const $el = document.getElementById('score');
        $el.innerText = `Digits: ${this.digitCount}`;
    }
}
