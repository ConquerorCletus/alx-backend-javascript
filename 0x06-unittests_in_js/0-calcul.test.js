const assert = require('assert');
const { it, describe } = require('mocha');
const calculateNumber = require('./0-calcul');

describe('calculateNumber()', () => {
  it('checking if numbers round', () => {
    const res = calculateNumber(3, 5);
    assert.strictEqual(res, 8);
  });
  it('checking if numbers round', () => {
    const res = calculateNumber(1.7, 2.2);
    assert.strictEqual(res, 4);
  });
  it('checking if numbers round', () => {
    const res = calculateNumber(1.5, 2.8);
    assert.strictEqual(res, 5);
  });
  it('checking if numbers round', () => {
    const res = calculateNumber(0, 0);
    assert.strictEqual(res, 0);
  });
  it('checking if numbers round', () => {
    const res = calculateNumber(-2.3, -1.7);
    assert.strictEqual(res, -4);
  });
  it('checking if numbers round', () => {
    const res = calculateNumber(-1.9, -1.1);
    assert.strictEqual(res, -3);
  });
});
