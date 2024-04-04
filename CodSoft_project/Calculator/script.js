let screen = document.getElementById('screen');
  let currentInput = '0';

  function appendToScreen(value) {
    if (currentInput === '0' && value !== '.') {
      currentInput = value;
    } else {
      currentInput += value;
    }
    screen.innerText = currentInput;
  }

  function clearScreen() {
    currentInput = '0';
    screen.innerText = currentInput;
  }

  function backspace() {
    currentInput = currentInput.slice(0, -1);
    if (currentInput === '') {
      currentInput = '0';
    }
    screen.innerText = currentInput;
  }

  function operate(operator) {
    if (currentInput.slice(-1) !== operator) {
      currentInput += operator;
    }
    screen.innerText = currentInput;
  }

  function calculate() {
    try {
      currentInput = eval(currentInput);
      screen.innerText = currentInput;
    } catch (error) {
      currentInput = 'Error';
      screen.innerText = currentInput;
    }
  }