const decimalEL = document.querySelector('.decimal');

const number1EL = document.querySelector('.number-1');
const number2EL = document.querySelector('.number-2');
const number3EL = document.querySelector('.number-3');
const number4EL = document.querySelector('.number-4');
const number5EL = document.querySelector('.number-5');
const number6EL = document.querySelector('.number-6');
const number7EL = document.querySelector('.number-7');
const number8EL = document.querySelector('.number-8');
const number9EL = document.querySelector('.number-9');
const number0EL = document.querySelector('.number-0');

const numberElArray = [
  number0EL,
  number1EL,
  number2EL,
  number3EL,
  number4EL,
  number5EL,
  number6EL,
  number7EL,
  number8EL,
  number9EL,
];

// add event listeners to numbers and decimal=============
for (let i = 0; i < numberElArray.length; i++) {
  const numberEL = numberElArray[i];
  numberEL.addEventListener('click', () => {
    handleNumberClick(i.toString());
  });
}

decimalEL.addEventListener('click', () => {
  const currentValueStr = getValueAsStr();

  if (!currentValueStr.includes('.')) {
    setStrAsValue(currentValueStr + '.');
  }
});
