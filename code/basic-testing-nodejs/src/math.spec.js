import {it, expect} from 'vitest';
import {add} from './math';


it('should summarize all numbers in an array', () => {
  const numbers = [1,9]
  const expectedResult = numbers.reduce((prevValue, curValue) =>
  prevValue + curValue, 0);
  const result = add(numbers);
  expect(result).toBe(expectedResult);
});

it('should yield NaN if there is an invalid value', () => {
  const inputs = ['invalid', 1]
  const result = add(inputs)
  expect(result).toBeNaN();
});

it('should yield a correct sum is an array of strings is provided', () => {
  const numbers = ['1','2'];
  const result = add(numbers);
  const expectedResult = numbers.reduce((prevValue, curValue) =>
  +prevValue + +curValue, 0);
  expect(result).toBe(expectedResult)
});

it('should yield 0 if an empty array is passed', () => {
  const numbers = []
  const result = add(numbers);
  expect(result).toBe(0);
});

// it('should throw an error if no value is passed into the function try-catch', () => {
//   try{
//     const result = add();
//   }catch(error){
//     expect(result).toBeDefined();
//   }
// });

it('should throw an error if no value is passed into the function', () => {
  const resultFn = () => {
    add();
  };
  expect(resultFn).toThrow();
});

it('should throw an error if provided with multiple arguments instead of an array', () =>{
  const num1 = 1
  const num2 = 2
  const result = () => { 
    add(num1, num2);
  };
  expect(result).toThrow(/is not iterable/);

});