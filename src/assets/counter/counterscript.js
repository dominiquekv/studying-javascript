/*var currentNumberWrapper = document.getElementById("currentNumber"); //my <span>
var currentNumber = 0;

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}*/

// New code
let count = 0;
const CURRENT_NUMBER = document.getElementById('currentNumber');

function increment() {
    count++;
    CURRENT_NUMBER.innerHTML = count;
}

function decrement() {
    count--;
    CURRENT_NUMBER.innerHTML = count;
}