import {describe, it, expect} from 'vitest';
import { cleanNumbers, transformToNumber } from './util/numbers';

describe('transformToNumber()', () => {

  it('should transform a value to number', ()=>{
    const value = '1';
    const res = transformToNumber(value);
    expect(res).toBe(1)
    expect(res).toBeTypeOf('number')
  });

  it('should not transform if the value provided is a string', ()=> {
    const value = 'a';
    const res = transformToNumber(value);
    expect(res).toBeNaN()
  });

  it('should provide a value to send', ()=> {
    const value = '';
    const res = () => {
      transformToNumber(value);
    }
    expect(res).toThrow(/sth went wrong/)
  });

  it('should validate the number of parameters', () => {
    const value = '';
    const res = ()=> {
      transformToNumber(value)
    } 
    expect(res).toThrow()

  });
})

describe('cleanNumbers()', ()=> {
  it('should return integers if an array of string numbers is passed', () =>{
    const numberValues = ['2','3'];
    const numberCleaned = cleanNumbers(numberValues);
    expect(numberCleaned[0]).toBeTypeOf('number'); 
    expect(numberCleaned).toEqual([2, 3]);
  });

  it('should throw an error if one element in the array is empty', () => {
    const numberValues = ['', '2']    
    const cleanFn = () => cleanNumbers(numberValues);
    expect(cleanFn).toThrow();
  })

})