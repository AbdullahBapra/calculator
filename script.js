let currentInput = '0';
let previousInput = null;
let operator = null;
let resultDisplayed = false;

const display = document.getElementById('display');

const updateDisplay = () => {
  display.textContent = currentInput;
};

const handleNumber = (number) => {
  if (resultDisplayed) {
    currentInput = number;
    resultDisplayed = false;
  } else {
    currentInput = currentInput === '0' ? number : currentInput + number;
  }
  updateDisplay();
};

const handleOperator = (newOperator) => {
  if (operator && !resultDisplayed) {
    calculate();
  }
  previousInput = currentInput;
  operator = newOperator;
  currentInput = '0';
  updateDisplay();
};

const handleDecimal = () => {
  if (!currentInput.includes('.')) {
    currentInput += '.';
    updateDisplay();
  }
};

const handleClear = () => {
  currentInput = '0';
  previousInput = null;
  operator = null;
  updateDisplay();
};

const calculate = () => {
  if (!previousInput || !operator) return;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);
  let result;

  switch (operator) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      result = prev / current;
      break;
  }

  currentInput = result.toString();
  operator = null;
  previousInput = null;
  resultDisplayed = true;
  updateDisplay();
};

const handleEquals = () => {
  if (operator) {
    calculate();
  }
};

document.getElementById('clear').addEventListener('click', handleClear);
document.getElementById('equals').addEventListener('click', handleEquals);

document.getElementById('zero').addEventListener('click', () => handleNumber('0'));
document.getElementById('one').addEventListener('click', () => handleNumber('1'));
document.getElementById('two').addEventListener('click', () => handleNumber('2'));
document.getElementById('three').addEventListener('click', () => handleNumber('3'));
document.getElementById('four').addEventListener('click', () => handleNumber('4'));
document.getElementById('five').addEventListener('click', () => handleNumber('5'));
document.getElementById('six').addEventListener('click', () => handleNumber('6'));
document.getElementById('seven').addEventListener('click', () => handleNumber('7'));
document.getElementById('eight').addEventListener('click', () => handleNumber('8'));
document.getElementById('nine').addEventListener('click', () => handleNumber('9'));

document.getElementById('add').addEventListener('click', () => handleOperator('+'));
document.getElementById('subtract').addEventListener('click', () => handleOperator('-'));
document.getElementById('multiply').addEventListener('click', () => handleOperator('*'));
document.getElementById('divide').addEventListener('click', () => handleOperator('/'));

document.getElementById('decimal').addEventListener('click', handleDecimal);
