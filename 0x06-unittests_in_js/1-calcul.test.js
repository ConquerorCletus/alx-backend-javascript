const assert = require('assert');
const { it, describe } = require('mocha');
const calculateNumber = require('./1-calcul');

describe('calculateNumber()', () => {
  it('checking if numbers round', () => {
    const res = calculateNumber('SUM', 3, 7);
    assert.strictEqual(res, 10);
  });

  it('checking if numbers round', () => {
    const res = calculateNumber('SUBTRACT', 5.5, 2.5);
    assert.strictEqual(res, 3);
  });

  it('checking if numbers round', () => {
    const res = calculateNumber('SUBTRACT', 10.9, 4.7);
    assert.strictEqual(res, 6.2);
  });

  it('checking if numbers round', () => {
    const res = calculateNumber('DIVIDE', 8, 2);
    assert.strictEqual(res, 4);
  });

  it('checking if numbers round', () => {
    const res = calculateNumber('DIVIDE', 0.9, 0.3);
    assert.strictEqual(res, 3);
  });

  it('checking if numbers round', () => {
    const res = calculateNumber('DIVIDE', 2.4, 1.2);
    assert.strictEqual(res, 2);
  });
});
