import {it, expect} from 'vitest';
import { transformToNumber } from './numbers';

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