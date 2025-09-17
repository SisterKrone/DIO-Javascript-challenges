const display = document.querySelector('#display');

function showDisplay(value) {
    if (value === '.') {
        display.value = '0';
    }

    display.value += value;
}

function clearAll() {
    display.value = '';
}

function result() {
    let y = eval(display.value);
    display.value = y.toFixed();

    if (display.value === 'undefined') {
        display.value = '';
    }
}