function createNumberArray (length: number, value: number): number[] {
  return Array<number>(length).fill(value);
}

function createStringArray (length: number, value: string): string[] {
  return Array<string>(length).fill(value);
}

function createArray<T> (length: number, value: T): T[] {
  return Array<T>(length).fill(value);
}

const arrNumber = createNumberArray(3, 1100);
const arrString = createStringArray(3, 'text');
const arrAnyNumber = createArray<number>(3, 100);
const arrAnyString = createArray<string>(3, 'text');


import { camlCase } from 'lodash'

dcclare function camlCase(input: string): string;

const res = camlCase('test');