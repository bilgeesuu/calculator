const calculatorScreen = document.querySelector('.calculator-screen');
const keys = document.querySelector('.calculator-keys');
let currentInput = '';
let operator = '';
let previousInput = '';

keys.addEventListener('click', event => {
    const { target } = event;
    const { action } = target.dataset;
    const keyContent = target.textContent;

    if (!target.matches('button')) return;

    if (action === 'clear') {
        currentInput = '';
        operator = '';
        previousInput = '';
        calculatorScreen.value = '';
        return;
    }

    if (action === 'calculate') {
        if (previousInput && operator && currentInput) {
            const result = calculate(parseFloat(previousInput), operator, parseFloat(currentInput));
            calculatorScreen.value = result;
            previousInput = result;
            currentInput = '';
            operator = '';
        }
        return;
    }

    if (['add', 'subtract', 'multiply', 'divide'].includes(action)) {
        if (previousInput && operator && currentInput) {
            const result = calculate(parseFloat(previousInput), operator, parseFloat(currentInput));
            calculatorScreen.value = result;
            previousInput = result;
            currentInput = '';
        } else {
            previousInput = currentInput;
            currentInput = '';
        }
        operator = action;
        return;
    }

    if (action === 'decimal') {
        if (!currentInput.includes('.')) {
            currentInput += '.';
            calculatorScreen.value = currentInput;
        }
        return;
    }

    currentInput += keyContent;
    calculatorScreen.value = currentInput;
});

function calculate(n1, operator, n2) {
    let result = 0;
    switch (operator) {
        case 'add':
            result = n1 + n2;
            break;
        case 'subtract':
            result = n1 - n2;
            break;
        case 'multiply':
            result = n1 * n2;
            break;
        case 'divide':
            result = n1 / n2;
            break;
    }
    return result;
}
