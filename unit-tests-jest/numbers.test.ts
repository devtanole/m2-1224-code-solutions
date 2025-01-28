import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

describe('evenNumbers', () => {
  it('returns the even numbers', () => {
    const numbers = [1, 4, 5, 10, 0];
    const result = evenNumbers(numbers);
    expect(result).toEqual([4, 10, 0]);
  });

  it('returns an empty array when the array is empty', () => {
    const numbersEmpt: any[] = [];
    const result = evenNumbers(numbersEmpt);
    expect(result).toEqual([]);
  });

  it('returns empty when no even numbers are present', () => {
    const oddNumbs = [1, 5, 17, 21];
    const result = evenNumbers(oddNumbs);
    expect(result).toEqual([]);
  });
});

describe('toDollars', () => {
  it('returns the provided amount as dollars', () => {
    const price = 12.99;
    const result = toDollars(price);
    expect(result).toEqual('$12.99');
  });
  it('formats decimals with just two digits, rounding up', () => {
    const result = toDollars(5.39999);
    expect(result).toEqual('$5.40');
  });
});

describe('divideBy', () => {
  it('returns the result of dividing by given divisor', () => {
    const dividends = [12, 24, 36, 72];
    const divisor = 6;
    const result = divideBy(dividends, divisor);
    expect(result).toEqual([2, 4, 6, 12]);
  });
  it('does not modify the original array', () => {
    const numbers = [2, 4, 6, 8];
    const result = divideBy(numbers, 2);
    expect(result).toEqual([1, 2, 3, 4]);
    expect(numbers).toEqual([2, 4, 6, 8]);
    expect(numbers).not.toBe(result);
  });
});

describe('multiplyBy', () => {
  it('returns the result of multiplying by given number', () => {
    const factors = { a: 3, two: 4, last: 5, ha: 'banana' };
    const result = multiplyBy(factors, 3);
    expect(result).toEqual({ a: 9, two: 12, last: 15, ha: 'banana' });
  });

  it('correctly handles negative numbers', () => {
    const newFact = { a: 2, b: -5, c: 12 };
    const result = multiplyBy(newFact, -2);
    expect(result).toEqual({ a: -4, b: 10, c: -24 });
  });
  it('modifies the original object', () => {
    const obj = { foo: 1, bar: '2' };
    const result = multiplyBy(obj, 3);
    expect(obj).toBe(result);
  });
  it('does not multiply non-number values', () => {
    const obj = { foo: 1, bar: '2', baz: [1, 2] };
    const result = multiplyBy(obj, 3);
    expect(result).toEqual({ foo: 3, bar: '2', baz: [1, 2] });
  });
});
