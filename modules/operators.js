const divisionEL = document.querySelector('.division');
const additionEL = document.querySelector('.addition');
const subtractionEL = document.querySelector('.subtraction');
const multiplicationEL = document.querySelector('.multiplication');
const equalEL = document.querySelector('.equal');

//add event listeners to operators==========================
additionEL.addEventListener('click', () => {
  handleOperatorclick('addition');
});
subtractionEL.addEventListener('click', () => {
  handleOperatorclick('subtraction');
});
multiplicationEL.addEventListener('click', () => {
  handleOperatorclick('multiplication');
});
divisionEL.addEventListener('click', () => {
  handleOperatorclick('division');
});

equalEL.addEventListener('click', () => {
  if (valueStrInMemory) {
    setStrAsValue(getResultOfOperationAsStr());
    valueStrInMemory = null;
    operatorInMemory = null;
  }
});
