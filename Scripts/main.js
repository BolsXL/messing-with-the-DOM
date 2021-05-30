const BUTTON = document.querySelector('.container');
const TEXT = document.querySelector('.container > h2');

BUTTON.addEventListener('click', firstChange);

// FUNCTIONS

function firstChange() {
    TEXT.textContent = "When You Click Me, I Change!";
    BUTTON.removeEventListener('click', firstChange);
    BUTTON.addEventListener('click', secondChange);
}

function secondChange() {
    TEXT.textContent = "The Next Click Will Toggle the Style of the Button!";
    BUTTON.removeEventListener('click', secondChange);
    BUTTON.addEventListener('click', colorShift);
}

function colorShift() {
    BUTTON.classList.toggle('color-shift');
}