//DOM Elements
//time
// const hourEl = document.querySelector('.hour');
// const minuteEl = document.querySelector('.minute');

//buttons
const valueEl = document.querySelector('.value');

const acEL = document.querySelector('.ac');
const pmEL = document.querySelector('.pm');
const percentEL = document.querySelector('.percent');

// const divisionEL = document.querySelector('.division');
// const additionEL = document.querySelector('.addition');
// const subtractionEL = document.querySelector('.subtraction');
// const multiplicationEL = document.querySelector('.multiplication');
// const equalEL = document.querySelector('.equal');

// const decimalEL = document.querySelector('.decimal');

// const number1EL = document.querySelector('.number-1');
// const number2EL = document.querySelector('.number-2');
// const number3EL = document.querySelector('.number-3');
// const number4EL = document.querySelector('.number-4');
// const number5EL = document.querySelector('.number-5');
// const number6EL = document.querySelector('.number-6');
// const number7EL = document.querySelector('.number-7');
// const number8EL = document.querySelector('.number-8');
// const number9EL = document.querySelector('.number-9');
// const number0EL = document.querySelector('.number-0');

// const numberElArray = [
//   number0EL,
//   number1EL,
//   number2EL,
//   number3EL,
//   number4EL,
//   number5EL,
//   number6EL,
//   number7EL,
//   number8EL,
//   number9EL,
// ];

//variables
let valueStrInMemory = null;
let operatorInMemory = null;

//functions============================
const getValueAsStr = () => {
  // const currentValueStr = valueEl.textContent;
  return valueEl.textContent.split(',').join('');
};

const getValueAsNum = () => {
  return parseFloat(getValueAsStr());
};

const setStrAsValue = (valueStr) => {
  if (valueStr[valueStr.length - 1] === '.') {
    valueEl.textContent += '.';
    return;
  }
  const [wholeNumStr, decimalStr] = valueStr.split('.');
  if (decimalStr) {
    valueEl.textContent =
      parseFloat(wholeNumStr).toLocaleString() + '.' + decimalStr;
  } else {
    valueEl.textContent = parseFloat(wholeNumStr).toLocaleString();
  }
  valueEl.textContent = parseFloat(valueStr).toLocaleString();
};
const handleNumberClick = (numStr) => {
  const currentValueStr = getValueAsStr();

  if (currentValueStr === '0') {
    setStrAsValue(numStr);
  } else {
    setStrAsValue(currentValueStr + numStr);
  }
};

const getResultOfOperationAsStr = () => {
  const currentValueNum = getValueAsNum();
  const valueNumInMemory = parseFloat(valueStrInMemory);
  let newValueNum;
  if (operatorInMemory === 'addition') {
    newValueNum = valueNumInMemory + currentValueNum;
  } else if (operatorInMemory === 'subtraction') {
    newValueNum = valueNumInMemory - currentValueNum;
  } else if (operatorInMemory === 'multiplication') {
    newValueNum = valueNumInMemory * currentValueNum;
  } else if (operatorInMemory === 'division') {
    newValueNum = valueNumInMemory / currentValueNum;
  }

  return newValueNum.toString();
};

const handleOperatorclick = (operation) => {
  const currentValueStr = getValueAsStr();

  if (!valueStrInMemory) {
    valueStrInMemory = currentValueStr;
    operatorInMemory = operation;
    setStrAsValue('0');
    return;
  }

  valueStrInMemory = getResultOfOperationAsStr();
  operatorInMemory = operation;
  setStrAsValue = '0';
};

//add event listeners to functions=====================
acEL.addEventListener('click', () => {
  setStrAsValue('0');
  valueStrInMemory = null;
  operatorInMemory = null;
});

pmEL.addEventListener('click', () => {
  const currentValueNum = getValueAsNum();
  const currentValueStr = getValueAsStr();
  if (currentValueStr === '-0') {
    setStrAsValue('0');
    return;
  }
  if (currentValueNum >= 0) {
    setStrAsValue('-' + currentValueStr);
  } else {
    setStrAsValue(currentValueStr.substring(1));
  }
});
percentEL.addEventListener('click', () => {
  const currentValueNum = getValueAsNum();

  const newValueNum = currentValueNum / 100;
  setStrAsValue(newValueNum.toString());
  valueStrInMemory = null;
  operatorInMemory = null;
});

//add event listeners to operators==========================
// additionEL.addEventListener('click', () => {
//   handleOperatorclick('addition');
// });
// subtractionEL.addEventListener('click', () => {
//   handleOperatorclick('subtraction');
// });
// multiplicationEL.addEventListener('click', () => {
//   handleOperatorclick('multiplication');
// });
// divisionEL.addEventListener('click', () => {
//   handleOperatorclick('division');
// });

// equalEL.addEventListener('click', () => {
//   if (valueStrInMemory) {
//     setStrAsValue(getResultOfOperationAsStr());
//     valueStrInMemory = null;
//     operatorInMemory = null;
//   }
// });

// add event listeners to numbers and decimal=============
// for (let i = 0; i < numberElArray.length; i++) {
//   const numberEL = numberElArray[i];
//   numberEL.addEventListener('click', () => {
//     handleNumberClick(i.toString());
//   });
// }

// decimalEL.addEventListener('click', () => {
//   const currentValueStr = getValueAsStr();

//   if (!currentValueStr.includes('.')) {
//     setStrAsValue(currentValueStr + '.');
//   }
// });

//get the time===================
// set up the time

// const updateTime = () => {
//   const currentTime = new Date();
//   let currentHour = currentTime.getHours();
//   const currentMinute = currentTime.getMinutes();

//   if (currentHour > 12) {
//     currentHour -= 12;
//   }

//   hourEl.textContent = currentHour.toString();
//   minuteEl.textContent = currentMinute.toString().padStart(2, '0');
// };
// setInterval(updateTime, 1000);
// updateTime();
