const { expect } = require('chai');
const { describe, it } = require('mocha');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('sUM', () => {
    it('checking if numbers round', () => {
      expect(calculateNumber('SUM', 2, 3)).to.equal(5);
    });
    it('checking if numbers round', () => {
      expect(calculateNumber('SUM', 1.2, 2.8)).to.equal(4);
    });
  });
  describe('sUBTRACT', () => {
    it('checking if numbers round', () => {
      expect(calculateNumber('SUBTRACT', 3.4, 1.3)).to.equal(2);
    });
    it('checking if numbers round', () => {
      expect(calculateNumber('SUBTRACT', 7.9, 4.7)).to.equal(3);
    });
    it('checking if numbers round', () => {
      expect(calculateNumber('SUBTRACT', -6.9, -3.7)).to.equal(-3);
    });
  });
  describe('dIVIDE', () => {
    it('checking if numbers round', () => {
      expect(calculateNumber('DIVIDE', 8, 4)).to.equal(2);
    });
    it('checking if numbers round', () => {
      expect(calculateNumber('DIVIDE', 5.4, 2.2)).to.equal(2.5);
    });
    it('checking if numbers round', () => {
      expect(calculateNumber('DIVIDE', 6, 0)).to.equal('Error');
    });
  });
});
