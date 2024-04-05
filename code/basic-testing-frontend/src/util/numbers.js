import { validateStringNotEmpty, validateNumber } from './src/util/validation.js'

export function transformToNumber(value) {
  if(value === '')
    throw new Error('sth went wrong')
  return +value;
}

export function cleanNumbers(numberInputs) {
  const numbers = []
  for (const numberInput of numberInputs) {
    validateStringNotEmpty(numberInput);
    const number = transformToNumber(numberInput);
    validateNumber(number);
    numbers.push(number);
  }
  return numbers
}