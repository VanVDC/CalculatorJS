//DOM Elements

//buttons
const valueEl = document.querySelector('.value');

//variables
let valueStrInMemory = null;
let operatorInMemory = null;

//functions============================
//get funtions
const getValueAsStr = () => {
  console.log('getValueAsStr() ', valueEl.textContent.split(',').join(''));

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
  if (currentValueStr.length > 5) {
    valueEl.style.fontSize = `${100 - currentValueStr.length + 5}px`;
  } else if (currentValueStr.length > 11) {
    valueEl.style.fontSize = `${100 - currentValueStr.length * 4}px`;
  } else if (currentValueStr.length > 14) {
    valueEl.style.fontSize = `${100 - currentValueStr.length * 6}px`;
  } else {
    valueEl.style.fontSize = '130px';
  }

  if (currentValueStr === '0') {
    setStrAsValue(numStr);
  } else {
    setStrAsValue(currentValueStr + numStr);
  }
};

// operation funtions

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

  console.log('newValueNum ', newValueNum);
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
