// const hitungan = document.getElementById('hitungan');
const hasil = document.querySelector('#hasil');

function addNumber(clickedNumber) {
  hasil.value += clickedNumber;
}

function addOperator(clickedOperator) {
  hasil.value += clickedOperator;
}

function cancel(clickedCancel) {
  hasil.value = '';
}

function equals() {
  try {
    hasil.value = eval(hasil.value);
  } catch (error) {
    hasil.value = 'Error';
  }
}
//   hitungan.value = '';

// let displayValue = '';

// function appendToDisplay(value) {
//   displayValue += value;
//   document.getElementById('display').value = displayValue;
// }

// function clearDisplay() {
//   displayValue = '';
//   document.getElementById('display').value = displayValue;
// }

// function calculate() {
//   try {
//     displayValue = eval(displayValue).toString();
//     document.getElementById('display').value = displayValue;
//   } catch (error) {
//     document.getElementById('display').value = 'Error';
//   }
// }
